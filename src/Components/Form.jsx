import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import {Link} from 'react-router-dom'
const Form = () => {
  const [data, setData] = useState({
    companyname: "",
    direction: "",
    NIT: "",
    cell: ""
  });
  const { companyname,direction, NIT, cell} = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if([companyname,direction,NIT,cell].includes('')){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son Obligatorios',
      });
      return;
    }
    inserDataCompany();
    setData({
      companyname:"",
      direction:"",
      NIT:"",
      cell:""
    })
  };

  const inserDataCompany = async () => {
    try {
      const url = `${import.meta.env.VITE_APP_RUTA}/excusa`;
      const result = await axios.post(url, excusa);
      Swal.fire({
        icon: 'success',
        title: 'Exitoso',
        text: 'Los Datos fueron agregados Correctamente',
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h4 className="centrar mt-5 mb-5 fw-bold">
        Completar el formulario para Guardar la Informacion
      </h4>
      <div className="centrar">
      <form className=" mb-5 mt-5" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <label className="mb-1">Nombre de la Compañia</label>
            <input
              type="text"
              className="form-control mb-3"
              value={companyname}
              name="companyname"
              onChange={handleChange}
            />
          </div>

          <div className="col-6">
            <label className="mb-1">Direccion</label>
            <input
              type="text"
              className="form-control mb-3"
              value={direction}
              name="direction"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className="mb-1">NIT</label>
            <input
              type="number"
              className="form-control mb-3"
              value={NIT}
              name="NIT"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="mb-1">Celular</label>
            <input
              type="number"
              className="form-control mb-3"
              value={cell}
              name="cell"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-5">
            <button
              className="btn btn-success btn-lg btn-block "
              type="submit"
            >
              Enviar Datos
            </button>
          </div>
          <div className="col-6 mt-5">
          <Link to="/history" className="btn btn-primary btn-lg btn-block">Historial </Link>
          </div>  
        </div>
      </form>
      </div> 
    </>
  );
};

export default Form;