import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import './App.css';
import Navbar from './Layouts/Navbar';
import MainHeader from './Layouts/MainHeader';
import MainContent from './Layouts/MainContent';
import Footer from './Layouts/Footer';
import Banner from './Layouts/Banner';
import SecondMenu from './Layouts/SecondMenu';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SecondMenu/>
      <Container>
     <MainHeader/>
     <br/>
     <MainContent/>
     <br/>  
     <Banner/>
     </Container>
     <Footer/>
    </div>
  );
}

export default App;
