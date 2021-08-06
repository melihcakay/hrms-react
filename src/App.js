import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import './App.css';
import Navbar from './Layouts/Navbar';
import MainHeader from './Layouts/MainHeader';
import Main from './Layouts/Main';
import Footer from './Layouts/Footer';

function App() {
  return (
    <div className="App">
      <Container>
     <Navbar/>
     <MainHeader/>
     <br/>
     <Main/>
     <Footer/>
     </Container>
     
    </div>
  );
}

export default App;
