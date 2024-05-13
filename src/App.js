// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap styling
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact'
import {Footer} from './components/Footer'
import {TimeLine} from './components/TimeLine'
import {Ventures} from "./components/Ventures";


function App() {

    return (

        <div className="App">

            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
            <TimeLine/>
            <Ventures/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
