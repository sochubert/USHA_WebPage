import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Term from "./pages/Term";
import Term_2 from "./pages/Term_2";
import Explore from "./pages/Explore";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { Home } from "./components";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Main />} />
    //     {/* <Route path="/admin" element={<Admin />} /> */}
    //     <Route path="/explore" element={<Explore />} />
    //     <Route path="/term" element={<Term />} />
    //     <Route path="/term2" element={<Term_2 />} />
    //   </Routes>
    // </BrowserRouter>
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/introduce">
            <Main />
          </Route>
          <Route path="/term">
            <Term />
          </Route>
          <Route path="/term2">
            <Term_2 />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
