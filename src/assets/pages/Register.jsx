import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [nombre_usuario, setNombreUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", { nombre_usuario, correo, password, password_confirmation });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error en registro", error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre de Usuario" value={nombre_usuario} onChange={(e) => setNombreUsuario(e.target.value)} required />
        <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirmar Contraseña" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
