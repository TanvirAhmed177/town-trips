import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { createContext, useState } from "react";
import Destination from "./components/Destination/Destination";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    password: "",
    photoUrl: "",
    error: "",
    success: false,
  });

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/destination/:type">
              <Destination></Destination>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
