const { get_datos,get_base } = require("./res/function/datas");
const { lista_puertos,conexion_puertos } = require("./res/function/serial_port");
const express= require("express");
const app= express();
const cors=require("cors") //allow cross-origin resource sharing
const bodyParser=require("body-parser")//para poder traer el body con json
const path=require("path");
const { teclas } = require("./res/function/teclas");
const { Console } = require("console");
app.use(bodyParser.json())//usamos joson
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors({
    origin:"*"
}))

app.get("/api/mostrar_puertos",async (req,res)=>{
    try {

        res.status(200).json(await lista_puertos())

    } catch (error) {
        res.status(500).json(error)
    }
})
let port;
let iniciar=false;

app.post("/api/conectar_port",async(req,res)=>{
    try {
        port=await conexion_puertos(req.query.port);
        res.status(200).json(port)
    } catch (error) {
        res.status(500).json(error)
    }

    
})

app.post("/api/iniciar",(req,res)=>{
        console.log("con")
        port.on('data',async (line)=>{
            const bf=Buffer.from(line,"utf-8")
            const serial=bf.toString()
            const funcion=await get_datos(`${serial}`)
            try {
                
          
            console.log(funcion>0)

            if(funcion[0].funcion_tecla!="nan"){
                console.log(funcion[0].funcion_tecla)
                teclas(funcion[0].funcion_tecla)
            }
        } catch (error) {
                    console.log(error)
        }

        })
 res.json("asd")
})
app.post("/api/stop",async(req,res)=>{
    port.close()
    res.json("close")
})
//console.log( get_datos(`1`))

app.get("/api/mostrar_teclas",async (req,res)=>{
    const datos =await get_base()
    res.status(200).json(datos)
})


app.listen(3000,()=>{
    console.log("puerto 3000")
})
