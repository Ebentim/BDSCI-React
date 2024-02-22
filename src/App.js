import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import CourseBody from "./components/CourseBody";
import Instruction from "./components/Instruction";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
// import { QuizScoreProvider } from "./contexts/QuizContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* <QuizScoreProvider> */}
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Profile />} />}
          >
            <Route path="dashboard/coursebody" element={<CourseBody />} />
            <Route path="dashboard/instruction" element={<Instruction />} />
          </Route>
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        {/* </QuizScoreProvider> */}
      </AuthProvider>
    </div>
  );
}

export default App;
