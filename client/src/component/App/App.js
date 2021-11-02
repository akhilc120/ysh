import { Switch, Router, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import { createBrowserHistory } from "history";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
