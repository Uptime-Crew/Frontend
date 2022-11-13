import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Status from './Components/Status/Status';
import { getAllMonitors } from './Services/monitor';
import Row from './Components/Row/Row';

function App() {

  const monitors = getAllMonitors();
  function getMonitors() {
    console.log(monitors);
  }
  getMonitors();

  return (
    <div className="App">
      <NavBar />
      <Row />
      {monitors.monitors.map((monitor) => (
         <Status monitor={monitor} />
      ))}
    </div>
  )
}

export default App;