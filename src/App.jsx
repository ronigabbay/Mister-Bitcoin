// import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import {ContactPage} from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ContactDetailsPage from './pages/ContactDetailsPage';
import StatisticPage from './pages/StatisticPage';
import {ContactEdit} from './pages/ContactEdit.jsx'
import AppHeader from './cmps/AppHeader.jsx'
import SignupPage from './pages/SingupPage.jsx'

export function App() {
  return (
    <div className="App flex col align-center">
      <Router>
        <AppHeader></AppHeader>
        <Switch>
          <Route path="/contact/edit/:id?" component={ContactEdit}></Route>
          <Route path="/contact/:id" component={ContactDetailsPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/signup" component={SignupPage}></Route>
          <Route path="/statistic" component={StatisticPage}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

// export default App;
