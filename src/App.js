import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Project from "./Components/projects/Project";
import { Experience } from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import 'aos/dist/aos.css';
import { useState, createContext } from "react";



export const themeContext = createContext()

// const initialState = {darkMode: false};

// const themeReducer = (state, action)=> {

//     switch(action.type){
//         case 'TOGGEL' :
//         return {darkMode: !state.darkMode};
//         default:
//             return state;
//     }
// };

function App() {

  // const [state, dispatch] = useReducer (themeReducer, initialState);


  // const handleClick =  () =>{
  //   return dispatch({
  //     type: 'TOGGEL'
  //   })
  // }

  const [dark, setDark] = useState(false);

  const change = () => {
    setDark(!dark);
  }

  // const value = {
  //   dark,
  //   change: change
  // }
  

  return (
    <div className="App"
    style={{
      background: dark? 'black' : '',
      color: dark? 'white': '',
    }}
    >
      <themeContext.Provider value={{dark,change}}>
        <Navbar/>
        <Intro />
        <Project />
        <Experience />
        <Portfolio  />
        <Contact />
        <Footer/>
      </themeContext.Provider>
    </div>
  );
}

export default App;