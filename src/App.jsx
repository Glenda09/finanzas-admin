import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListaUsuarios from "./components/ListaUsuarios";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/usuarios" element={<ListaUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
