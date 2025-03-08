import React from "react";
import LandingPage from "./components/LandingPage";
import OurTeam from "./components/OurTeam";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Features from "./components/Features";
import SignupPage from "./components/signupPage";
import Leaderboard from "./components/LeaderBoard";
import AboutPage from "./components/AboutPage";
import FocusTimer from "./components/FocusTimer";
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/ourteam" element={<OurTeam/>}/>
          <Route path="/signupPage" element={<SignupPage/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
          <Route path="/focustimer" element={<FocusTimer/>}/>
          <Route path="*"/>
        </Route>

      </Routes>
    </Router>
  );
};

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./components/LandingPage";
// import LoginPage from "./components/LoginPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
