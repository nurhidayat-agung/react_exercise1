import './App.css';
import Footer from './Components/Footer'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Main from './Components/Main'


function App() {
  return (
    <div className="App">
      <Header />
        <div className="row">
            <div className="col-sm-6">
                <SideBar />
            </div>
            <div className="col-sm-6">
                <Main />
            </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
