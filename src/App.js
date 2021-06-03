import Body from "./components/Body";
import About from "./components/About";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Team from "./components/Team";
import Terms from "./components/Terms";
import Faqs from "./components/Faqs";
import PrivacyPolicy from "./components/PriivacyPolicy";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/about" component={About} />
          <Route path="/team"  component={Team} />
          <Route path="/terms" component={Terms} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/privacy" component={PrivacyPolicy} />
        </Switch>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
