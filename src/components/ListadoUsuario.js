import { useEffect, useState } from "react";
import api from "../Api";

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api.get("/usuarios")
      .then(response => setUsuarios(response.data))
      .catch(error => console.error("Error al obtener usuarios", error));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
