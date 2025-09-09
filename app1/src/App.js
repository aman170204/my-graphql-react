import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      
      
      <NavBar/>
      <Header/>
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9">
          <MainContent />
        </div>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
