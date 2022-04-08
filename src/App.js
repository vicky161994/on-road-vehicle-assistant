import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </main>
    </BrowserRouter>
  );
}

export default App;
