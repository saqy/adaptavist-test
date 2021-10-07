
import './App.css';
import { Welcome } from './components/Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { WordCount } from './components/WordCount/WordCount';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/word-count">
            <WordCount />
          </Route>

        </Switch>
      </Router>

    </>
  );
}

export default App;
