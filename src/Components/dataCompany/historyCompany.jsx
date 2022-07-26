import { useState,useEffect } from "react";
import DataCompany from "./dataCompany";
import {Link} from 'react-router-dom'
import axios from 'axios'
const historyCompany = () => {
  const [datos,setDatos] = useState([]);
  const [control,setidControl] = useState();
  const [updatecontrol,setupdateidControl] = useState();
  useEffect(()=>{
    const listdata =async ()=>{
            try{
                const url = `${import.meta.env.VITE_APP_RUTA}/company/`;
                const {data}= await axios.get(url);
                setDatos(data.companies);
            }catch(error){
                console.log(error);
            }
}
listdata();
},[control,updatecontrol]);
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
       <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre de la Compañia</th>
              <th scope="col">Direccion </th>
              <th scope="col">NIT</th>
              <th scope="col">Telefono</th>
            </tr>
      </thead>
           <tbody>
                {datos?.map(data => (
                    <DataCompany data={data} setupdateidControl={setupdateidControl} setidControl={setidControl}key={data.id}/>   
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