import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import axios from "axios";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
const dataCompany = ({ data, setidControl,setupdateidControl }) => {
  const [dataUpdate, setDataUpdate] = useState({
    companyname: "",
    direction: "",
    NIT: "",
    cell: "",
  });
  const { companyname, direction, NIT, cell } = dataUpdate;
  const [show, setShow] = useState(false);
  const deleteData = async (id) => {
    const url = `${import.meta.env.VITE_APP_RUTA}/company/`;
    try {
      await axios.delete(url + id);
      Swal.fire({
        icon: "success",
        title: "Exitoso",
        text: "Eliminado Correctamente",
      });
      setidControl(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]: e.target.value,
    });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = e => {
    e.preventDefault();
    if([companyname,direction,NIT,cell].includes('')){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son Obligatorios',
      });
      return;
    }
    updateData(data.id);
    setDataUpdate({
      companyname:"",
      direction:"",
      NIT:"",
      cell:""
    })
  };
  const updateData = async (id) => {
    try{
      const url = `${import.meta.env.VITE_APP_RUTA}/company/${id}`;
       await axios.put(url, dataUpdate);
      Swal.fire({
        icon: 'success',
        title: 'Exitoso',
        text: 'Actualizado correctamente',
      });
      setupdateidControl(id);
    }catch(error){
      console.log(error);
    }
  };
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.companyname}</td>
      <td>{data.direction}</td>
      <td>{data.NIT}</td>
      <td>{data.cell}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteData(data.id);
          }}
        >
          Eliminar
        </button>
      </td>
      <td>
        <Button className="btn-success" onClick={handleShow}>
          Actualizar
        </Button>
      </td>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Datos de la Compañia</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={6}>
                <label>
                  <strong> Nombre Compañia</strong>
                </label>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={companyname}
                  name="companyname"
                  onChange={handleChange}
                />
              </Col>
              <Col xs={12} md={6}>
                <label>
                  <strong>Direccion</strong>{" "}
                </label>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={direction}
                  name="direction"
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label>
                  {" "}
                  <strong>NIT</strong>
                </label>
                <input
                  type="number"
                  className="form-control mb-3"
                  value={NIT}
                  name="NIT"
                  onChange={handleChange}
                />
              </Col>
              <Col xs={6} md={6}>
                <label>
                  {" "}
                  <strong> Telefono </strong>
                  <input
                    type="number"
                    className="form-control mb-3"
                    value={cell}
                    name="cell"
                    onChange={handleChange}
                  />
                </label>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
          <Button 
          type="submit"
          className="btn-success">
            Actualizar
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </tr>
  );
};

export default dataCompany;
