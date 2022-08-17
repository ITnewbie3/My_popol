import './App.css';
import Main from './main/Main';
import Header from './include/Header';
import Tachnolygy from './technology/Technology'
import Portfolio from './portfolio/Portfolio';
import Fade from 'react-reveal/Fade'

function App() {

window.addEventListener("mousewheel",add)
function add (e){
  let move = window.innerHeight
  let page = Math.floor(window.pageYOffset/1150)
  console.log(page)
  if(e.deltaY > 80){
        window.scrollTo({ left: 0, top: (page+1)*move, behavior: "smooth" });
  }
else if(e.deltaY < -80){
    window.scrollTo({ left: 0, top: (page-1)*move, behavior: "smooth" });
    }
  }
  

  return (
    <div className="App">
      <Main/>
      <Fade bottom>
      <Tachnolygy/></Fade>
      <Portfolio/>
    </div>
  );
}

export default App;
