import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import SignupForm from './pages/SignupForm';
import Dashboard from './pages/Dashboard';
import UsersList from './pages/UsersList';
import UserProfile from './pages/UserProfile';
import RequestForm from './pages/RequestForm';
import RequestsList from './pages/RequestsList';
import Request from './pages/Request';
import NotFound from './pages/NotFound';
import './App.css';

// This example has a few pages, most of the private 
// In order to see the protected pages
// you must first login. Pretty standard stuff.
//
// First, visit the login and signup pages. Then, visit the protected
// pages. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function App() {
  return (
    
    <ChakraProvider>
        <ProvideAuth>
            <Router>
                <div>
                <AuthButton />
                <Switch>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>
                <Route exact path={"/signup"}>
                    <SignupForm />
                </Route>
                <PrivateRoute exact path={"/"}>
                    <Dashboard />
                </PrivateRoute>
                <PrivateRoute exact path={"/users"}>
                    <UsersList />
                </PrivateRoute>
                <PrivateRoute exact path={"/users/:id"}>
                    <UserProfile />
                </PrivateRoute>
                <PrivateRoute exact path={"/requestform"}> 
                    <RequestForm />
                </PrivateRoute>
                <PrivateRoute exact path={"/requests"}>
                    <RequestsList />
                </PrivateRoute>
                <PrivateRoute exact path={"/requests/:id"}>
                    <Request />
                </PrivateRoute>
                <PrivateRoute exact path={"*"}>
                    <NotFound />
                </PrivateRoute>
                </Switch>
                </div>
            </Router>
        </ProvideAuth>
    </ChakraProvider>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}