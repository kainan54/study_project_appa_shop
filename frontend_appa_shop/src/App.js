import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import Navbar from './components/navbar/Navbar'
import { Switch, Route } from 'react-router-dom';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';

function App() {
  return (
    <div> 
      <Navbar />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
