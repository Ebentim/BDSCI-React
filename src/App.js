import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import CourseBody from "./components/CourseBody";
import Instruction from "./components/Instruction";
// import { QuizScoreProvider } from "./contexts/QuizContext";
import One from "./quizes/One";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <QuizScoreProvider> */}
      <Header />
      {/* <One/> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/dashboard" element={<Profile />} />
        <Route path="/coursebody" element={<CourseBody />} />
        <Route path="/instruction" element={<Instruction />} />
      </Routes>
      <Footer />
      {/* </QuizScoreProvider> */}
    </div>
  );
}

export default App;

// const App = () => {
//   const [names, setNames] = useState([]);

//   useEffect(() => {
//     fetch("/api")
//       .then((response) => response.json())
//       .then((data) => {
//         setNames(data.name); // Update to match the server response structure
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Names:</h1>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
