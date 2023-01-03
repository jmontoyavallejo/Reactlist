import "./App.css";
import images from "./imagenes/images.jpg";
import ListaDeTareas from './componentes/ListaDeTareas/ListaDeTareas'




function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={images}
          alt="logo de freecodecamp"
          className="freecodecamp-logo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
