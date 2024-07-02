//Importación modulo Express JS.
const express = require("express");
//Creamos una instancia de la aplicación Express.
const app = express();
//Importamos la función para conectarse a la base de datos MongoDB.
const connectDB = require("./database.js");
//Definimos el puerto, predeterminadamente el que se encuentra en el archivo .env, caso contrario el 3008.
const port = process.env.PORT ?? 3008;
//Importamos el módulo morgan para el registro detallado de solicitudes HTTP.
const morgan = require("morgan");
//Importamos el modelo de producto.
const Producto = require("./product.js");

//Conectarse a MongoDB usando Mongoose.
connectDB();

//Desactivar el encabezado X-Powered-By por razones de seguridad.
app.disable("x-powered-by");

//Middleware que sirve para reconocer el objeto de solicitud entrante como un objeto JSON (para POST y PUT).
app.use(express.json());
//Middleware de morgan.
app.use(morgan("dev"));

//Ruta principal (Devuelve un mensaje de bienvenida a la API).
app.get("/", (req, res) => {
  res.json(
    "Bienvenido a la API de productos de la granja: especializados en frutas y verduras! 🍌🍅"
  );
});

//Devuelve todos los productos.
app.get("/productos", async (req, res) => {
  try {
    const productos = await Producto.find();
    //Verificamos si se encontraron productos.
    if (productos.length === 0) {
      return res
        .status(404)
        .json({ error: "No se encontraron productos 🕵️❗" });
    } else {
      res.json(productos);
    }
  } catch (error) {
    res.status(500).json({ error: "Error del servidor 🚫⚙️" });
  }
});

//Obtener un producto por su ID.
app.get("/productos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findById(id);
    if (!producto) {
      return res
        .status(404)
        .json({ error: `Producto con ID:${id} no encontrado 🕵️❗ ` });
    } else {
      res.json(producto);
    }
  } catch (error) {
    res.status(500).json({ error: "Error del servidor 🚫⚙️" });
  }
});

//Devuelve los productos que coinciden con el nombre especificado (búsqueda parcial).
app.get("/productos/nombre/:nombre", async (req, res) => {
  const { nombre } = req.params;
  try {
    const productos = await Producto.find({
      nombre: { $regex: nombre, $options: "i" }, //Crea una expresión regular con el nombre del producto y el modificador "i" para que la búsqueda sea insensible a mayúsculas y minúsculas.
    });
    //Verificamos si se encuentran productos basados en la longitud del array "productos".
    //Si el array es igual a 0, significa que no se encontraron productos que cumplan con los criterios de busqueda.
    if (productos.length === 0) {
      return res
        .status(404)
        .json({ error: "No se encontraron los productos especificados 🕵️❗" });
    } else {
      res.json(productos);
    }
  } catch (error) {
    res.status(500).json({ error: "Error del servidor 🚫⚙️" });
  }
});

//Agregar un nuevo producto.
app.post("/productos", async (req, res) => {
  //Crear una instancia del modelo Producto con los datos recibidos en req.body.
  const nuevoProducto = new Producto(req.body);
  try {
    //Validamos que todos los campos requeridos estén presentes en req.body.
    if (
      !req.body.codigo ||
      !req.body.nombre ||
      !req.body.precio ||
      !req.body.categoria
    ) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios 🚫!" }); //Si no lo estan devolvemos un error 400.
    } else {
      //Caso contrario si estan todos los campos, guardamos el nuevo producto y devolvemos un mensaje con estatus 201.
      await nuevoProducto.save();
      res
        .status(201)
        .json({ message: "Nuevo producto creado ✅: ", nuevoProducto });
    }
  } catch (error) {
    res.status(500).json({ error: "Error del servidor 🚫⚙️" });
  }
});

//Modificar el precio de un producto (parcialmente).
app.patch("/productos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(id, req.body, {
      new: true, //Devuelve el documento actualizado en lugar del original.
    });
    if (!productoActualizado) {
      return res
        .status(404)
        .json({ error: "Producto no encontrado para su actualización 🕵️❗" });
    } else {
      res.json({
        message: "Producto actualizado con exito ✅: ",
        productoActualizado,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error del servidor 🚫⚙️" });
  }
});

//Borrar un producto.
app.delete("/productos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const productoEliminado = await Producto.findByIdAndDelete(id);
    if (!productoEliminado) {
      return res
        .status(404)
        .json({ error: "Producto no encontrado para eliminar 🕵️❗" });
    } else {
      res.json({
        message: "Producto eliminado con exito ✅: ",
        productoEliminado,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error del servidor 🚫⚙️" });
  }
});

//Inicializamos el servidor.
app.listen(port, () => {
  console.log(`Servidor escuchando en: http://localhost:${port}`);
});
