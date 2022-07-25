import { useState,useEffect } from "react";
import DataCompany from "./dataCompany";
import {Link} from 'react-router-dom'
const historyCompany = () => {
  const [datos,setDatos] = useState([]);

  useEffect(()=>{
    const listdata =async ()=>{
            try{
                const url = `${import.meta.env.VITE_RUTA}/api/v1/post`;
                const {data} = await axios.get(url);
                setDatos(data);
            }catch(error){
                console.log(error);
            }
}
listdata();
});
  return (
    <div className="container">
   <div className="row justify-content-center mt-5">
       <div className="col-auto">
         <h2>Tus Datos Guardados</h2>
       </div>
       
   </div>
   <div className="row justify-content-center mt-5">
       <div className="col-8">
       <table className="table table-responsive">
           <tbody>
                {datos.map(data => (
                    <DataCompany data={data} key={data.id}/>   
                ) )}
            </tbody>
        </table>
       </div>
        <div className="col-10 ">
                <Link to="/" className="btn btn-block btn-primary mt-5 float-left">Volver </Link>
        </div>
    </div>
    
</div>
  )
}

export default historyCompany