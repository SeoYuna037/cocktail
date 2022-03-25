import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Category from './pages/Category';
import Home from './pages/Home';
import CocktailDesc from './pages/CocktailDesc/CocktailDesc';
function App() {
    return (
      <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/category">
              <Category/>
            </Route>
            <Route path="/cocktail/:id">
              <CocktailDesc/>
            </Route>
          </Switch>
      </Router>
    );
}

export default App;
