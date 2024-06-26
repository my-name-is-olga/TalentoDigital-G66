const { Sequelize } = require("sequelize");
const ExampleModel = require("./models/Example");



// ⚠ IMPORTO LA FUNCION DEL MODELO PARA SINCRONIZAR Y EVITAR MULTIPLES NEW SEQUELIZE EN CADA ARCHIVO

/* VARIABLES DE ENTORNO */
const USER_DB = "postgres";
const PASS_DB = "1234";
const HOST_DB = "localhost";
const PORT_DB = "5432";
const NAME_DB = "ejemplo";

/* Inicio una instancia de sequelize y conecto con la base de datos */
const sequelize = new Sequelize(
  `postgres://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`,
  {
    logging: false, // cambiar a true para ver las query que se ejecutan desde la consola
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

/* Aquí ejecuto la función importada de cada modelo y paso sequelize como argumento */
ExampleModel(sequelize);


/* ¿como me doy cuenta si se conectaron los modelos correctamente? */
/* Aqui tenemos los modelos guardados luego de sincronizarlos */
console.log(sequelize.models);

/* Hacemos un destructuring y podemos hacer las relaciones */
const { Example } = sequelize.models;

/* aca van las relaciones */
//-----------ACA---------



/* Exporto sequelize y modelos */
module.exports = { sequelize, ...sequelize.models };


