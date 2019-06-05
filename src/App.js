import React from 'react';
import logo from './logo.svg';
import './App.css';
import Firstdemofile from './components/Firstdemofile';
import Firstclasscom from './components/Firstclasscom';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting'

function App() {
  return (
    <div className="App">
        <p>
          hello world
        </p>
        <UserGreeting/>
        <ParentComponent/>
        <EventBind/>
        <ClassClick/>
        <FunctionClick/>
        <Counter/>
        <Message/>
        <Firstdemofile name="Welcome"><p>see the future</p></Firstdemofile>
        <Firstdemofile name="to the world"/>
        <Firstclasscom name="Boys and Girls" />
    </div>
  );
}

export default App;
