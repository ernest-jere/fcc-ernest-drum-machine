import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center", 
  flexDirection: "column",
  userSelect: "none"
}

class App extends React.Component {
  
  render() {
    function player(event) {
    const audioParent = document.getElementById(event.target.id);
    const audio = audioParent.querySelector('.clip');
    if (audio) {
      audio.play();
    }
    const displayField = document.getElementById("display"); 
    const clipName = event.target.id;
    if (displayField) {
      displayField.innerText = clipName;
    }
  }
    
    document.addEventListener('keydown', function (event) {
     switch (event.key) {
       case 'Q':
       case 'q': 
         document.getElementById("Heater-1").click(); 
         break; 
       case 'W':
       case 'w':
         document.getElementById("Heater-2").click();
         break;
       case 'E':
       case 'e': 
         document.getElementById("Heater-3").click();
         break;
       case 'A':
       case 'a':
         document.getElementById("Heater-4").click();
         break;
       case 'S':
       case 's':
         document.getElementById("Clap").click();
         break;
       case 'D':
       case 'd':
         document.getElementById("Open-HH").click();
         break;
       case 'Z':
       case 'z':
         document.getElementById("Kick-n-Hat").click();
         break;
       case 'X':
       case 'x':
         document.getElementById("Kick").click();
         break;
       case 'C':
       case 'c':
         document.getElementById("Closed-HH").click();
         break;
     } 
    });
    return ( 
      <div>
        <div id="drum-machine" style={styles}>
          <h1>Drum Machine</h1>
          <div style={{width:"75%", textAlign: "center", padding: "7px"}}>
            <div id="display"> 
              Audio Clip Display 
            </div>
          </div>
          <div id="pad-area" style={{width:"75%", textAlign: "center"}}>
            <div style={{display: "flex"}}>
                <div className="drum-pad" id="Heater-1" onClick={player}>Q
                  <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" className="clip" id="Q"></audio>
                </div>
                <div className="drum-pad" id="Heater-2" onClick={player}>W
                  <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" className="clip" id="W"></audio>
                </div>
                <div className="drum-pad" id="Heater-3" onClick={player}>E
                  <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" className="clip" id="E"></audio>
                </div>
              </div> 
              <div style={{display: "flex"}}>
                <div className="drum-pad" id="Heater-4" onClick={player}>A
                 <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" className="clip" id="A"></audio>
                </div>
                <div className="drum-pad" id="Clap" onClick={player}>S
                  <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" className="clip" id="S"></audio>
                </div>
                <div className="drum-pad" id="Open-HH" onClick={player}>D
                 <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" className="clip" id="D"></audio>
                </div>
              </div>
              <div style={{display: "flex"}}>
                <div className="drum-pad" id="Kick-n-Hat" onClick={player}>Z
                  <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
                </div>
                <div className="drum-pad" id="Kick" onClick={player}>X
                  <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" className="clip" id="X"></audio>
                </div>
                <div className="drum-pad" id="Closed-HH" onClick={player}>C
                  <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" className="clip" id="C"></audio>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
