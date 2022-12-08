import React from 'react'
import {Grid,Button,Container} from "@mui/material"
import { styled,createTheme,ThemeProvider} from '@mui/material/styles';

///

const Btn_stop = styled(Button)`
  background-color: #d50000;
  color: #fff;
  padding: 6px 12px;
  &:hover {
    background-color: #9b0000;
  }
  &:focus {
    background-color: #ff5131;
  }
`;
///
function Selector_port() {
    const [puertos,set_puertos] =React.useState([{}]);
    const [com,set_com] =React.useState();
    React.useEffect(() => {
        fetch("http://localhost:3000/api/mostrar_puertos").then(a=>a.json()).then(a=>set_puertos(a)).catch(e=>console.log(e))

    },[])    

    function conectar_port(port) {
        fetch("http://localhost:3000/api/conectar_port?port="+port,{method:"POST"}).then(a=>a.json()).then(a=>console.log(a)).catch(e=>console.log(e))
        fetch("http://localhost:3000/api/iniciar",{method:"POST"}).then(a=>a.json()).then(a=>console.log(a)).catch(e=>console.log(e))
    }
    function parar_teclado() {
        fetch("http://localhost:3000/api/stop",{method:"POST"}).then(a=>a.json()).then(a=>console.log(a)).catch(e=>console.log(e))
        
    }
  return (
    <Grid gap={2} display="flex" width="500px" height={70}>
        <select name="port" id="port" onChange={(e)=>{
            set_com(e.target.value);
        }}>
            {puertos.map((item,index)=>{
                return (<option value={item.path} key={index}>{item.path}</option> )
            })}
        </select>
        <Button variant='contained'onClick={()=>{
            conectar_port(com)
        }} > Iniciar </Button>
        <Btn_stop onClick={()=>{
            parar_teclado();
        }} >PARAR</Btn_stop>
    </Grid>
  )
}

export default Selector_port