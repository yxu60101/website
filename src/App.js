import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Rush from './Rush';
import Brothers from './Brothers';
import Alumni from './Alumni';
import FamilyTree from './FamilyTree';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>UB Theta Tau</title>
        </Helmet>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Rush">
              <Rush />
            </Route>
            <Route path="/Brothers">
              <Brothers />
            </Route>
            <Route path="/Alumni">
              <Alumni />
            </Route>
            <Route path="/FamilyTree">
              <FamilyTree />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
