function P10(){
  document.body.innerHTML=`
  <button onclick="backHome()">Back</button>
   <div id="Pu">
          <h1>Welcome to Physics</h1>
          <p>choose the unit</p>
          <button onclick="Punit1()">Unit One</button>
          <button onclick="Punit2()">Unit Two</button>
          <button onclick="Punit3()">Unit Three</button>
          <button onclick="Punit4()">Unit Four</button>
          <button onclick="Punit5()">Unit Five</button>
          <button onclick="Punit6()">Unit Six</button>
      </div>
  `;
}
function backHome(){
    start();
}
