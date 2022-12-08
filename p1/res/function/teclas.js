const rob=require("robotjs")
const path = require('path');
const { parse } = require('path')
  

module.exports.palabras=function (texto) {
    rob.typeString(texto)
}



module.exports.teclas=function (tecla) {
    rob.keyTap(tecla)
}

