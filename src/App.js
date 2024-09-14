import Navbar from "./components/Navbar"
import Categories from './components/Categories';
import Sales from "./components/Sales"
import Recommandation from './components/Recommandation';
import Topics from './components/Topic';
import Popular from './components/Popular';
import Footer from './components/Footer';

function App(){
    return(
        <div>
  <Navbar></Navbar>
  <Categories></Categories>
  <Sales></Sales>
  <Recommandation></Recommandation>
  <Topics></Topics>
  <Popular></Popular>
  <Footer></Footer>
</div>
    )
}

export default App