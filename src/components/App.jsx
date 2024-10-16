import React, { useState } from "react";

let time = new Date().toLocaleTimeString();

// function sayHi() {
//   console.log("Hey");
// }

function App() {
  var [currentTime, setCurrentTime] = useState(time);

  function getCurrentTime() {
    // const secCount = currentTime.getSeconds();
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(getCurrentTime, 1000);
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
