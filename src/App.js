import { ChakraProvider } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Dashboard from './pages/Dashboard';
import UsersList from './pages/UsersList';
import UserProfile from './pages/UserProfile';
import RequestForm from './pages/RequestForm';
import RequestsList from './pages/RequestsList';
import Request from './pages/Request';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <ChakraProvider>
        <Router>
          <Switch>
            <Route exact path={"/login"}>
              <LoginForm />
            </Route>
            <Route exact path={"/signup"}>
              <SignupForm />
            </Route>
            <Route exact path={"/"}>
              <Dashboard />
            </Route>
            <Route exact path={"/users"}>
              <UsersList />
            </Route>
            <Route exact path={"/users/:id"}>
              <UserProfile />
            </Route>
            <Route exact path={"/requestform"}> 
              <RequestForm />
            </Route>
            <Route exact path={"/requests/:id"}>
              <RequestsList />
            </Route>
            <Route exact path={"/request"}>
              <Request />
            </Route>
            <Route exact path={"*"}>
              <NotFound />
            </Route>
          </Switch>
        </Router>
    </ChakraProvider>
  );
}

export default App;
