import Navbar from './Navbar';
import Home from './Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import { UserProvider } from './context/LanguageContext';
import Search from './Search';


function App() {
  const title = "Hello this is the title";
  const person = { name: "Seb", age: 30};
  const link ="https://www.google.com"


  return (
    <Router>
      <UserProvider>
        <div className="App" style= {{
          minHeight: "100vh",
          display: "flex",
          flexFlow: "column",
        }}>
          <Navbar />
          <div className="content" style={{
            flexBasis: "auto",
            flexGrow: "1",
            display: "flex",
            flexFlow: "column",
          }}>
            <Switch>
              <Route exact path="/search">
                <Search />
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
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
