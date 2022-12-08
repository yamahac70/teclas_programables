import { Grid, ListItem,Button } from '@mui/material';
import React from 'react'

function Matriz() {
    const m=Array(9);
    const [teclas,set_teclas] =React.useState([]);
    console.log(m)
    React.useEffect(() => {
        fetch("http://localhost:3000/api/mostrar_teclas").then(a=>a.json()).then(a=>set_teclas(a)).catch(e=>console.log(e))
        },[])

  return (
    <div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"400px",height:"400px",gridGap: "5px"} }>
        {teclas.map((item,index) => {
            return(
                <div key={item.id} style={{width:"100%",height:"100%",backgroundColor:"#4EC5F1"}}>
                    <h4>{item.nombre_tecla}</h4>
                    <h3>{item.funcion_tecla}</h3>
                    <Button variant='contained'>Cambiar funcion</Button>
                </div>
            )
        })}


        </div>
            </div>
  )
}

export default Matriz