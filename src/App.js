import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import './App.css';
import Navbar from './Layouts/Navbar';
import MainContent from './Layouts/MainContent';
import Footer from './Layouts/Footer';
import CreateCVSegment from './Pages/CreateCVSegment';
import MainMenu from './Layouts/MainMenu';
import CreateJobAdvertisementSegment from './Pages/CreateJobAdvertisementSegment';

function App() {
  return (
    <div className="App">
      <MainMenu/>
      <Navbar/>
      <Container>
     <CreateJobAdvertisementSegment/>
     <br/>
     <MainContent/>
     <br/>  
     <CreateCVSegment/>
     </Container>
     <Footer/>
    </div>
  );
}

export default App;
