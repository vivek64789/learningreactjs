import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';

let title = {"name":"Text Utils", "url":"/"};
let home = {"name":"Home", "url":"/home"};
let about = {"name":"About", "url":"/about"};
let contact = {"name":"Contact", "url":"/contact"};


function App() {
  const [darkMode, setDarkMode] = useState('light');

  const toggleDarkMode = ()=>{
    if(darkMode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor='#212529'
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode = {darkMode} title={title} home={home} about={about} contact={contact} />
      <TextForm darkMode={darkMode} heading="Enter your text" />
    </>
  );
}

export default App;
