import React from 'react';
import logo from './logo.svg';
import './App.css';
import  UsersField from './UsersField'
// import Firstdemofile from './components/Firstdemofile';
// import Firstclasscom from './components/Firstclasscom';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'  // from module style sheet
// import Form from './components/Form'
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/HOCandHighcom/ClickCounter';
// import HoverCounter from './components/HOCandHighcom/HoverCounter';
// import Counter from './components/RenderProps/Counter';
// import Hover from './components/RenderProps/Hover';
// import WithRenderProp from './components/RenderProps/WithRenderProp';
// import ComponentA from './components/Context/ComponentA';
// import {UserProvider} from './components/Context/UserContext';
//import GetAPI from './components/APIreq/GetAPI'
import PostAPI from './components/APIreq/PostAPI'

function App() {
  console.log(window)
  return (
    <div className="App">
        {/* <ErrorBoundary>
            <Hero heroName="Batman"/>
            <Hero heroName="Joker"/>
        </ErrorBoundary>
        <PortalDemo/>
        <FRParentInput/>
        <FocusInput/>
        <RefsDemo/>
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
        <Firstclasscom name="Boys and Girls" /> */}

        {/* <ClickCounter name="nik"/>
        <HoverCounter name="var"/> */}

        {/* <Counter/>
        <Hover/> */}
        {/* <WithRenderProp render={ (count,clickhandler) => (
           <Counter count={count} clickhandler={clickhandler}/>
        )}/>
        <WithRenderProp render={ (count,clickhandler) => (
          <Hover count={count} clickhandler={clickhandler}/>
        )}/>    */}

        {/* <UserProvider value="nik">
          <ComponentA />
        </UserProvider> */}

        {/* <GetAPI/> */}
        {/* <PostAPI/> */}
        <UsersField/>

    </div>
  );
}

export default App;
