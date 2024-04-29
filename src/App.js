import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import CourseBody from "./components/CourseBody";
import Instruction from "./components/Instruction";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import Adminsignup from "./components/Adminsignup";
import Adminsignin from "./components/Adminsignin";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { QuizScoreProvider } from "./contexts/QuizContext";
import "./App.css";
import Signinpage from "./components/Signinpage";
import TermsAndPolicies from "./components/TermsAndPolicies";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <QuizScoreProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<Signinpage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/terms-of-service" element={<TermsAndPolicies />} />

            <Route
              path="/dashboard"
              element={<PrivateRoute element={<Profile />} />}
            />
            <Route
              path="/coursebody"
              element={<PrivateRoute element={<CourseBody />} />}
            />
            <Route
              path="/instruction"
              element={<PrivateRoute element={<Instruction />} />}
            />

            <Route path="/" element={<Navigate to="/" />} />
          </Routes>
        </QuizScoreProvider>
        <Routes>
          <Route path="/adminsignup" element={<Adminsignup />} />
          <Route path="/adminsignin" element={<Adminsignin />} />
          <Route
            path="/admindashboard"
            element={<AdminRoute element={<Dashboard />} />}
          />
          <Route path="/Admin" element={<Navigate to="/adminsignup" />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
