import logo from './img/Myprofile.jpeg';
import './App.css';
 

function App() {
  return(
   <center>
     <div className="container">
     <header className='app-header'>AXIOM TECHGURU PVT LTD</header>
       <img src={logo} className="App-logo" alt="logo" />
    <table>
      <tr><td><b>Full Name :</b> Nikhil Dukse</td></tr>
      <tr><td><b>DOB  :</b>08-Aug-2000 </td></tr>

      <tr><td><b>Desingtion: </b>Software Developer</td></tr>
      <tr><td><b>Email Id  :</b>nikhildukse123@gmail.com</td></tr>
      <tr><td><b>Git-hub   :</b>https://github.com/Nikhildukse </td></tr>

    </table>
    </div>
   </center>
  );
}

export default App;
