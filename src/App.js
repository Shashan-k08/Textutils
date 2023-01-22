import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';






function App() {

  const [mode, setmode] = useState(`light`);
  const [text, settext] = useState(`Enable Darkmode`);
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  // const blink = () => {
  //   setInterval(() => {
  //     document.title = "Install TextUtills";
  //   }, 1000);

  // }

  // const removeBodyClasses = ()=>{

  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  // }

  const toggleMode = () => {

    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      settext('Enable Lightmode');

      showalert("Dark mode has been enabled", "success");
      // document.title = "TextUtils Dark-mode";
      // setInterval(() => {
      //   document.title = "TextUtils Dark-mode";
      // }, 1500);

      // blink();

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      settext('Enable Darkmode');
      showalert("Light mode has been enabled", "success");
      // document.title = "TextUtils Light-mode";
    }
  }
  return (<>


    
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert} />
      <div className="container my-3">
        
         
        <TextForm showalert={showalert} heading="Try TextUtils - Word counter ,Character counter ,Remove extra spaces" mode={mode} />

        <About  mode={mode}/>


      </div>


  </>
  );
}
export default App;