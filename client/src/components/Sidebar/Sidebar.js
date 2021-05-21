import react from "react";
import "./Sidebar.css";


function Sidebar() {
  return (
    <div>
      <div className="Sidebar">
        <h1>Soy una Sidebar </h1>

        <div>
          <botton className="SidebarBotton">Crear Pokemon</botton>
          <botton className="SidebarBotton">Filtrar Pokemon</botton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
