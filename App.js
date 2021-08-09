import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages'
import Dashboard from './pages/dashboard'
import WeeklyPlan from './pages/weeklyplan'
import SignIn from './pages/signin'
import SignUp from './pages/signup'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/weeklyplan" component={WeeklyPlan} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;

