# Proyecto Integrador: CRUD con Node.js y MongoDB 🧐
En este proyecto se realiza una aplicación utilizando Node.js (Express JS) y MongoDB (Mongoose) para gestionar una colección de productos agrícolas (frutas y verduras). La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) sobre los productos.

## Desarrollador 👨‍💻:
- **Desarrollador:** Matías Di Risio 👍 
- **GitHub:** [DiriARG](https://github.com/DiriARG)

## Docentes 👨‍🏫 :
- **Profesor:** Fabio D. Argañaraz A.
- **GitHub:** [Fabio D. Argañaraz A.](https://github.com/FabioDrizZt)
- **Tutor:** Juan Nebbia
- **GitHub:** [JuanNebbia](https://github.com/JuanNebbia)
- **Tutor:** Nicolás Krein Werle
- **GitHub:** [NKrein](https://github.com/NKrein)

## Tabla de contenidos 📚:
- [Previo a iniciar](#previo-a-iniciar-)
- [Instalación](#instalación-)
- [Configuración de la Base de Datos](#configuración-de-la-base-de-datos-️)
- [Iniciando el proyecto](#iniciando-el-proyecto-)
- [Configuramos el archivo .env (Environment Variables)](#configuramos-el-archivo-env-environment-variables-%EF%B8%8F)
- [Estructura del proyecto](#estructura-del-proyecto-)
- [Descripción de archivos](#descripción-de-archivos-)
- [Rutas de la API REST](#rutas-de-la-api-rest-%EF%B8%8F)
- [Ejemplos de uso](#ejemplos-de-uso-)
- [Recursos](#recursos-)

## Previo a iniciar 🕒:
- **Descarga e instala** Visual Studio Code. Es el editor de código recomendado para abordar este proyecto.
- **Descarga e instala** Node.js, un entorno de ejecución de JavaScript de código abierto y multiplataforma que permite crear servidores, aplicaciones web, APIs, herramientas de línea de comandos y scripts.
- **Crea una cuenta** en MongoDB y **descarga e instala** Compass, que es una herramienta gráfica interactiva para consultar, optimizar y analizar datos en MongoDB. 

## Instalación 📥:
1. **Fork** el repositorio desde [aquí](https://github.com/DiriARG/Proyecto_Integrador_CRUD_Node.js_MongoDB/fork).
2. **Clona** tu fork en tu máquina local:
```bash
git clone https://github.com/tu-usuario/tu-repositorio-fork.git
```
3. Ahora **abre** Visual Studio Code y la carpeta correspondiente (Proyecto_Integrador_CRUD_Node.js_MongoDB).
4. **Inicia** una nueva terminal y escribe `npm install`, este comando en un directorio que ya contiene el archivo `package.json` genera que <u>npm</u> instale las dependencias especificadas en ese `package.json` y actualice el `package-lock.json` con las versiones exactas de esas dependencias.
- Si seguiste estas instrucciones de instalación mediante forkear el repositorio y clonandolo a tu máquina local, evita el apartado [Iniciando el proyecto](#iniciando-el-proyecto-), ya que esta orientado a las personas que simplemente han descargado algunos archivos individuales del proyecto.

## Configuración de la Base de Datos 🗄️:
1. **Crea** una nueva base de datos en MongoDB Compass.
2. **Importa** el archivo llamado "granjas.json" en tu base de datos:
    - Selecciona tu base de datos.
    - Haz click en "ADD DATA" --> "Import JSON or CSV file" y selecciona el archivo "granjas.json".

## Iniciando el proyecto 🚀: 
Este apartado esta orientado a las personas que simplemente quieran descargar los archivos individualmente sin forkear el repositorio, por lo tanto, los archivos que son necesarios para el correcto funcionamiento de la API REST son los siguientes: 
```plaintext
/json
  - granjas.json
/.env-copy
/api.http
/app.js
/database.js
/product.js
```
Antes de comenzar, **asegúrate** de haber completado la [Configuración de la Base de Datos](#configuración-de-la-base-de-datos-️). Si ya realizaste estos pasos y tienes la estructura del proyecto como se muestra arriba, puedes continuar con lo siguiente:
- Abrimos la terminal e inicializamos un nuevo proyecto con `npm init -y`. Esto nos creara el archivo "package.json".
- Luego instalamos las dependencias necesarias: Express JS (Entorno para desarrollar la API), Mongoose (Biblioteca de modelado de objetos para MongoDB y Node.js) y Morgan (Middleware de registro de solicitudes HTTP) con el siguiente comando: `npm i express mongoose morgan`. Al haber instalado dichos paquetes se crea el archivo "package-lock.json".

## Configuramos el archivo .env (Environment Variables) ⚙️:
En este caso cambiamos el nombre del archivo llamado `.env_copy` a `.env`, luego modificamos su contenido:
- MONGODB_URLSTRING: Copiamos la cadena de conexión desde la pagina de MongoDB o propiamente desde el MongoDB Compass.
- PORT: Escribimos el puerto que se va a usar para conectar a la API.
- DATABASE_NAME: Escribimos el nombre de la base de datos en la cual vamos a acceder.
- COLLECTION_NAME: Escribimos el nombre de la collection que nos va a permitir obtener los datos necesarios para nuestra API.

## Estructura del proyecto 📂:
Así será la estructura que encontraremos en nuestro editor de código fuente, en mi caso, Visual Studio Code (puede variar la estructura en caso de haber instalado los archivos de forma individual).
```plaintext
/json
  - granjas.json
/.env
/api.http
/app.js
/database.js
/Enunciado.md
/LICENSE
/Matias_Di_Risio_Correción.pdf
/package-lock.json
/package.json
/product.js
/README.md
```

## Descripción de archivos 📄:
- **/json**: Carpeta que contiene el dataset (conjunto de datos) JSON:
  - granjas.json: Archivo de formato JSON que contiene los productos agrícolas que vamos a utilizar en nuestra BD.
- **/.env**: Archivo que almacena las variables de entorno.
- **/api.http**: Archivo que contiene todas las rutas de la API REST.
- **/app.js**: Archivo principal de la aplicación Node.js donde se define toda la lógica de rutas y la conexión a la base de datos.
- **/database.js**: Archivo que crea y configura la conexión a la base de datos MongoDB usando Mongoose.
- **/Enunciado.md**: Archivo que fue brindado por el profesor de la diplomatura. Contiene la consigna del ejercicio a realizar junto a otros detalles que se deben cumplir para la aprobación del proyecto integrador. 
- **/LICENSE**: Archivo que sirve para especificar los términos y condiciones bajo los cuales el software de este repositorio puede ser utilizado, copiado, modificado o distribuido por otras personas.
- **/Matias_Di_Risio_Correción.pdf**: Documento con las devoluciones del primer trabajo integrador, incluyendo comentarios y recomendaciones del profesor.
- **/package-lock.json**: Archivo que asegura la reproducibilidad y consistencia de las instalaciones de paquetes en el proyecto con Node.js.
- **/package.json**: Archivo de configuración de npm que describe el proyecto, incluyendo metadatos como nombre, versión, descripción, scripts, dependencias y más.
- **/product.js**: Archivo que define el esquema (schema) y el modelo (model) para los productos agrícolas.
- **/README.md**: Archivo guía para poder entender y comenzar a trabajar con este proyecto.

## Rutas de la API REST 🛤️:
Para poder comprobar la funcionalidad de cada ruta de la API vamos a utilizar la extensión `REST Client` del marketplace de Visual Studio Code o cualquier otra herramienta que tenga como finalidad el testeo de una API, como puede ser `Postman`. Los links de descarga se encuentran en [Recursos](#recursos-).<br>
Dentro del archivo `api.http` (archivo funcional si utilizamos `REST Client`) se van a encontrar rutas con las siguientes finalidades:
| PETICIÓN | URL | DESCRIPCIÓN |
|:--------:|-----|-------------|
| GET | / | Ruta principal (Devuelve un mensaje de bienvenida a la API). |
| GET | /productos | Devuelve todos los productos. |
| GET | /productos/:id | Devuelve un producto por su ID. |
| GET | /productos/nombre/:nombre | Devuelve los productos que coinciden con el nombre especificado (búsqueda parcial). |
| POST | /productos | Crear un nuevo producto. |
| PATCH | /productos/:id | Modificar SOLO el precio de un producto mediante su ID. |
| DELETE | /productos/:id | Eliminar un producto por su ID. |

## Ejemplos de uso 🧪:
Estas acciones se realizan en el archivo `api.http`: 
- **GET**: Devuelve todos los productos.
```json

GET http://localhost:3000/productos

```

- **POST**: Crear un nuevo producto.
```json

POST http://localhost:3000/productos
content-type: application/json

{
    "codigo": 62,
    "nombre": "Carambola",
    "precio": 800,
    "categoria": "Fruta"
}

```

- **PATCH**: Modificar SOLO el precio de un producto mediante su ID.
```json

PATCH http://localhost:3000/productos/669fe3e7361091d570b8f01e
content-type: application/json
{
    "precio": 1250
}

```

- **DELETE**: Eliminar un producto por su ID.
```json

DELETE http://localhost:3000/productos/669fe3e7361091d570b8f01e

```

## Recursos 🧰 
Aquí encontrarás enlaces útiles para aprender más sobre las tecnologías utilizadas en este proyecto:
- Visual Studio Code: [Visual Studio Code](https://code.visualstudio.com/)
- Node.js: [Node.js](https://nodejs.org/)
- MongoDB: [MongoDB](https://www.mongodb.com/es)
- MongoDBCompass: [MongoDBCompass](https://www.mongodb.com/products/tools/compass)
- Express: [Express](https://expressjs.com/)
- Mongoose: [Mongoose](https://mongoosejs.com/)
- Morgan: [Morgan](https://www.npmjs.com/package/morgan)
- REST Client: [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- Postman: [Postman](https://www.postman.com/)



