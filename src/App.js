import SpalshScreen from "./pages/splashScreen";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Addpeople from "./pages/addpeople";
import Notification from "./pages/Notification";
import Message from "./pages/message";
import Profile from "./pages/profile";
import ProjectAdd from "./pages/projectadd";
import AdminPage from "./pages/admincontrol";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SpalshScreen} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addpeople" component={Addpeople} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/projectadd" component={ProjectAdd} />
          <Route exact path="/admin/dashboard" component={AdminPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
