
import ReviewContainer from './components/ReviewContainer';
import ReviewDetails from './components/ReviewDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import AirlineContainer from './components/AirlineContainer';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h2>Airline Reviewer</h2>
          <AirlineContainer />
        </Route>
        <Route exact path="/reviews">
      <ReviewContainer />
      </Route>
      <Route path="/airlines/:id">
          <ReviewDetails />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
