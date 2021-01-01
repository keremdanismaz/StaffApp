import React, { Component } from "react";
import Navbar from "./layout/Navbar";
//import Users from "./componenet/users";
//  import Kullanıcı from "./componenet/card";
//  import Card from "./componenet/nav";
//  import Deneme from "./componenet/deneme";
import Users from "./componenet/users";
import AddUser from "./forms/AddUser";
import "./App.css";
import NotFound from  "./pages/NotFound";
import ProjectFiles from "./pages/github";
import UptadeUser from "./forms/UptadeUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // sayfalar arası geçiş yapmak için kullandığımız bir kütüphane
// npm install react-router-dom -> sayfasal yapı yapmak için kullanılır.
// npm run start -> reactapp i çalıştırmak için kullanılır.
// npm install -g json-server ->  fake api olan json serverı  indirmek için kullanıldı.
// json-server --watch reactapp/api/db.json 3000 -> fake api json serverı çalıştırmak için kullanıldı 3000. portda
// npm install react-pose --save -> react pose u  indirmek için kullandık react pose bir animation kütüphanesi
// $ npm install axios -> axios kütüphanesini indirdik. json servera get post delete gibi işlemleri yapmak için kullandık.

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Navbar title="UserApp" />
            <hr />
            <Switch>
              <Route exact path="/" component={Users}></Route>
              <Route exact path="/add" component={AddUser}></Route>
              <Route exact path="/github" component={ProjectFiles}></Route>
              <Route exact path="/Edit/:id" component={UptadeUser}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
