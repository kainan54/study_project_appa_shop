import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import Navbar from './components/navbar/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import Cookies from 'js-cookie';
import { setCurrentUser } from './redux/user/userActions'

function App({ currentUser, setCurrentUser }) {
  
    // if cookie exists, gets JWT and fetches currentUser from token
  const getCurrentUser = () => {
    const token = Cookies.get('appaShop');
  
    if (token) {

      fetch('http://localhost:3000/api/v1/get-user', {

        method: 'GET',

        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-type': 'application/json',
        },

      })
      .then( response => response.json())
      .then(
        ({ user }) => {
          // sets currentUser in redux store
          setCurrentUser(user);
        }
      );
    };

  };

  // when app loads run getCurrent user to check for cookie
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div> 
      <Navbar />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
      </Switch>
    </div>
  );
};

/*
  -mdp allows us to access actions/function in order alter the redux store/state
  if configured correct:

  -mdp is set to function with a dispatch arg, it then returns an object with a key set to the
  name of the corrosponding imported action function 

   -the 'action-key' pairs to a function that takes in whatever value you intend to pass into
   your imported action/function, it then returns dispatch( yourAction(value) )

   - we can now call props.yourAction(val) for example, props.setCurrentUser(userObject) -or-
    props.setCurrentUser(null) to set/remove currentUser in the redux store.
*/
const mdp = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

/*
  -msp allows us to read data from the redux store if configured correct:

  -msp is set to a function that has a reduxState/store parameter, it then 
  returns an object that is mapped to props so {currentUser: reduxState.user.currentUser}
  gives access to currentUser from store via props.currentUser
*/
const msp = (reduxState) => ({ currentUser: reduxState.user.currentUser });

  // HOC Connect + msp/mdp allows component(App) to read(msp) and write(mdp) to redux store/state
export default connect(msp, mdp)(App);
