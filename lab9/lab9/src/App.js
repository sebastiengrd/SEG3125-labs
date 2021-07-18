import Navbar from './Navbar';
import Home from './Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import { UserProvider } from './context/LanguageContext';


function App() {
  const title = "Hello this is the title";
  const person = { name: "Seb", age: 30};
  const link ="https://www.google.com"


  return (
    <Router>
      <div className="App">
        <UserProvider>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/search">
                <Home />
              </Route>
              <Route exact path="/favourite">
                <Home />
              </Route>
              <Route exact path="/plan">
                <Home />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
