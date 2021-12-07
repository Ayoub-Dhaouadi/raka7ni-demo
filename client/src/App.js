import './App.css';
import Navbar from './App container/Navbar/Navbar';
import Showcase1 from './App container/Home/Showcase1/Showcase1';
import Showcase2 from './App container/Home/Showcase2/Showcase2';
import Showcase3 from './App container/Home/Showcase3/Showcase3';
import Footer from './App container/Footer/Footer';


function App() {
  return (
    <div className="App">

        <Navbar></Navbar>
        <Showcase1></Showcase1>
        <Showcase2></Showcase2>
        <Showcase3></Showcase3>
        <Footer></Footer>

    </div>
  );
}

export default App;
