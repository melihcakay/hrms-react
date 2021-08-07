import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import './App.css';
import Navbar from './Layouts/Navbar';
import MainHeader from './Layouts/MainHeader';
import Main from './Layouts/Main';
import Footer from './Layouts/Footer';
import Banner from './Layouts/Banner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
     <MainHeader/>
     <br/>
     <Main/>
     <br/>  
     <Banner/>
     </Container>
     <Footer/>
    </div>
  );
}

export default App;
