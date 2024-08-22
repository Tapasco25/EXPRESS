const cors = require("cors");
const express = require("express");
const port = 3000;

const routerUsuarios = require("./src/routes/usuariosRoute");
const routerVentas = require("./src/routes/ventasRoute");
const routerFacturas = require("./src/routes/facturaVentasRoute");
const routerCarrito = require("./src/routes/carritoComprasRoute");

const { ConexionDB } = require("./src/config/database");
const loggerMiddelware = require("./src/middelwares/loggerMiddelware");

ConexionDB();

const app = express();

app.use(cors())

// app.use(cors({
//   origin: ['https://example.com', 'https://example2.com']
// }))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(loggerMiddelware);

app.use("/usuarios", routerUsuarios);
app.use("/ventas", routerVentas);
app.use("/facturas", routerFacturas);
app.use("/carrito", routerCarrito);

app.listen(port, () => {
  console.log(`Ejecutando en http://localhost:${port}`);
});
