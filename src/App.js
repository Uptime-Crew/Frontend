import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Status from './Components/Status/Status';
import { getAllMonitors } from './Services/monitor';

function App() {

  const monitors = getAllMonitors();
  function getMonitors() {
    console.log(monitors);
  }
  getMonitors();

  return (
    <div className="App">
      <NavBar />
      <Status
      props={monitors}
      />
    </div>
  )
}

export default App;