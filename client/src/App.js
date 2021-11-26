
import {React,useState} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Helmet } from 'react-helmet';

//components
import Nav from "./components/Nav";
import SquareLoader from './components/SquareLoader';

//pages
import Home from './pages/Home';
import Companies from './pages/Companies';


import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

// import ResetPassword from "./pages/ResetPassword";
// import ForgetPassword from "./pages/ForgetPassword";

// import EmailVerified from "./pages/EmailVerified";
import UserProfile from "./pages/UserProfile";
import AddReview from "./pages/AddReview";
import Reviews from "./pages/Reviews";
import MyReviews from "./pages/MyReviews";



import Logout from "./pages/Logout";
// import NotFound from "./pages/NotFound";

//utils
import ProtectedRoute from './utils/ProtectedRoute';

import API from "./utils/API";

//styles
import './App.css';

function App(props) {

  const [user,setUser]=useState(API.isAuth());

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>JustPlaced</title>
        <meta
          name="description"
          content="!"
        />
        <meta name="keywords" content="" />
      </Helmet>
      <Router>
      <Nav user={API.isAuth()}/>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route exact path="/signin" component={()=>{return(<Signin setUser={setUser}/>)}}/>
          <Route exact path="/companies" component={Companies} />
          <Route exact path="/signup" component={Signup} />
         
          <Route exact path="/company/reviews/:companyId"  component={Reviews}/>

          <Route path="/user/logout"  component={()=>{return(<Logout setUser={setUser}/>)}}/>
          <ProtectedRoute path="/user/profile"  component={UserProfile}/>
          <ProtectedRoute path="/user/addReview"  component={AddReview} />
          <ProtectedRoute path="/user/myReviews"  component={MyReviews} />


        </Switch>
      </Router>
    </>
  );
}

export default App;
