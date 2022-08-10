//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
function App() {
  return (
    <>
     <Navbar title="React"/>
     <div className="container">
     <Table/>
     </div>
     <div className="container2">
      <textArea/>
      </div>
    </>
  );
}

export default App;
