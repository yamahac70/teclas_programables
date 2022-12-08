const serialPort = require('serialport')
  


module.exports.conexion_puertos=function(puerto){

    try {
        
   
    const port = new serialPort(
        puerto,
        {baudRate: 9600}
        )
        
        const parser = new serialPort.parsers.Readline()
        
        port.pipe(parser)
        
        
      
        return port;
    } catch (error) {
        throw new Error(error)
    }
    }
module.exports.lista_puertos=async function (params) {
   const lista= await serialPort.list()
   return lista;
}
module.exports.serrar_puerto=function (params) {
    this.conexion_puertos.close()
}
