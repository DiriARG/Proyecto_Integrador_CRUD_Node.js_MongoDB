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
      return res.status(404).json({ error: "No se encontraron productos" });
    } else {
      res.json(productos);
    }
  } catch (error) {
    res.status(500).json({ error: "Error del servidor" });
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
        .json({ error: `Producto con ID:${id} no encontrado` });
    } else {
      res.json(producto);
    }
  } catch (error) {
    res.status(500).json({ error: "Error del servidor" });
  }
});

//Inicializamos el servidor.
app.listen(port, () => {
  console.log(`Servidor escuchando en: http://localhost:${port}`);
});
