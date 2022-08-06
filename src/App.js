import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './Login';
import SignIn from './SignIn';
import Join from './Join';
import All_In_One from './components/All_In_One';
function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      {/* <Route path="/" element={ <Login/>}/> */}
      <Route path="/" element={<All_In_One/>}></Route>
      <Route path="signIn" element={ <SignIn/>}/>
      <Route path="join/signIn" element={ <SignIn/>}/>
        <Route path="join" element={<Join/>}/>
        <Route path="signIn/join" element={<Join/>}/>

        

    </Routes>
   </Router>
    
   
    </div>
  );
}

export default App;
