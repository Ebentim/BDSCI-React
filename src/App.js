import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import CourseBody from "./components/CourseBody"
import Instruction from "./components/Instruction"
// import { QuizScoreProvider } from "./contexts/QuizContext";
import One from "./quizes/One";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <QuizScoreProvider> */}
        {/* <Header /> */}
        <One/>
       {/* <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/dashboard" element={<Profile />} />
          <Route path="/coursebody" element={<CourseBody/>}/>
          <Route path="/instruction" element={<Instruction/>}/>
        </Routes> */}
        <Footer />
      {/* </QuizScoreProvider> */}
    </div>
  );
}

export default App;
