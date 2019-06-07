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
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'  // from module style sheet
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
        <Form/>
        <h1 className='error'>Error</h1>
        <h1 className={styles.sucess}>Success</h1>
        <p>
          hello world
        </p>
        <ParentComp/>
        <Table/>
        <FragmentDemo/>
        <LifecycleA/>
        <Inline/>
        <Stylesheet primary={true}/>
        <NameList/>
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
