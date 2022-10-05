
import Navbar from './Navbar';
import Form from './Form';
import FormComponent from './FormComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Button from './Button';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Form />
          </Route>
          <Route exact path='/employee'>
            <FormComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
