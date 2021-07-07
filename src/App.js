import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">RESTURANT</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
    
  );
}

export default App;
