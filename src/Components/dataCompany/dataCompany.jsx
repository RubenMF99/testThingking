import React from "react";

const dataCompany = ({data}) => {
  const deleteData = async id =>{
    const url = `${import.meta.env.VITE_RUTA}/api/v1/post/`;
    try{
        await axios.delete(url+id);
        setidControl(id);
    }catch(error){
        console.log(error);
    }
}
  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.body}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
           // deletePost(post.id);
          }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default dataCompany;
