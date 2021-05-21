import './App.css';
import Cards from "./components/Cards/Cards.js"
import Navbar from "./components/Navbar/Navbar.js"
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Cards/>
    </div>
  );
}

export default App;
