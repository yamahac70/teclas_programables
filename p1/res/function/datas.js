const { sql_query } = require("../db/sqlite_conection");


module.exports.get_datos=async function (tecla) {
    try {
        const funcion=await sql_query(`SELECT * FROM teclas WHERE nombre_tecla='${tecla}';`);
        return funcion
        
    } catch (error) {
        throw new Error(error);
    }


}
module.exports.get_base=async function () {
    try {
        const funcion=await sql_query(`SELECT * FROM teclas ;`);
        return funcion
        
    } catch (error) {
        throw new Error(error);
    }
}

/* 

CREATE TABLE teclas (
id integer primary key,
nombre_tecla varchar(200) unique,
funcion_tecla varchar(200)
);
DROP table teclas;

INSERT INTO teclas (nombre_tecla,funcion_tecla) VALUES ("1","audio_vol_up"),("2","audio_vol_down");
SELECT * FROM teclas WHERE nombre_tecla='1';
SELECT * from teclas;

SELECT 
    name
FROM 
    sqlite_schema
WHERE 
    type ='table' AND 
    name NOT LIKE 'sqlite_%';
*/