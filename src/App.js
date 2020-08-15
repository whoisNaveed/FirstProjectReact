import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FormHandler from './compontent/FormHandler';
import ReactFragement from './compontent/ReactFragement';
// import InputFd from './compontent/InputFd';
import FocusFw from './compontent/FocusFw';
import Portal from './compontent/Portal';
// import FocusRef from './compontent/FocusRef';

// import Rest from './compontent/FunctionCompotent';
// import New from './compontent/ClassComponent';
// import { Name } from './compontent/FunctionCompNameExport';
// import Properties from './compontent/props';
// import States from './compontent/state';
// import SetStatez from './compontent/setstate';
// import Functionclick from './compontent/Functionclick';
// import ClassClick from './compontent/ClassClick';
// import EventBinding from './compontent/EventBinding';
// import ParentCompotent from './compontent/ParentCompotent';
// import Condioperoter from './compontent/Condioperoter';
// import Maparray from './compontent/Maparray';
// import CssStyle from './compontent/CssStyle';
// import InlineSheet from './compontent/InlineSheet';
//import './css/mycss.css';
//import style from './css/app.module.css';


function App() {
  return (
    <div className="App">
      <ReactFragement></ReactFragement>
      <FocusFw></FocusFw>
      <Portal></Portal>
      {/* <FocusRef></FocusRef> */}
      {/* <FocusRef></FocusRef> */}
      {/* <h1 className='error'>error</h1>
      <h1 className={style.success}>success</h1> */}
    {/*   <Rest></Rest>
     <New></New>
     <Name/>
    <own></own>
    
     <Properties name='values' ></Properties>
    <States></States>
   <SetStatez></SetStatez>
    <Functionclick></Functionclick>
    <ClassClick></ClassClick>
    <EventBinding/>
    <ParentCompotent></ParentCompotent>
  <Condioperoter></Condioperoter>
<CssStyle></CssStyle>
<InlineSheet></InlineSheet>
  <Maparray></Maparray> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <FormHandler></FormHandler> 
    </div>
  );
}

export default App;
