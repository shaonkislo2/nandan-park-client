import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Rides from './components/Home/Rides/Rides';
import Packages from './components/Home/Packages/Packages';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import PrivateRoute from './components/Login/Login/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path = "/">
           <Home></Home>
          </Route>
          <Route exact path = "/home">
           <Home></Home>
          </Route>
          <Route exact path = "/rides">
           <Rides></Rides>
          </Route>
          <Route exact path = "/packages">
           <Packages></Packages>
          </Route>
          <Route exact path = "/login">
           <Login></Login>
          </Route>
          <PrivateRoute exact path="/booking/:ridesId">
          <Booking></Booking>
          </PrivateRoute>

          <Route exact path = "/register">
           <Register></Register>
          </Route>

          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
