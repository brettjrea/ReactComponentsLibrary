import { Route, Link, Switch } from 'wouter';
import "./App.css";

import Button from '../lib/r/button';

import MyButton from '../lib/rnw/mybutton';

import HorizontalLine from '../lib/rnw/horizontalline';

import HeadersComponent from '../lib/rnw/headerscomponent'; 

import GitComponent from '../lib/rnwg/gitcomponent'; 

function App() {

const handlePress = () => {
    console.log('Button pressed!');
  };

  return <>

      <HeadersComponent 
      headerText="Deno + Vite + React + Nav + Routes" 
      subHeaderText="Shows the links and current routes." 
      lineThickness={1}
      lineColor="black"
      />
      
      <div className="switch">
      <Switch>
        <Route path="/">This is "/" page</Route>
        <Route path="/about">This is "/about" page</Route>
      </Switch>
      </div>
      <div>
       <Link href="/">Home</Link>&nbsp;
       <Link href="/about">About</Link>
      <HorizontalLine thickness={4} color="black" />
      </div>


      <HeadersComponent 
      headerText="Deno + Vite + React" 
      subHeaderText="From ../lib/r"
      lineThickness={1}
      lineColor="black"
      />
      <Button title="Press Me" />
      <HorizontalLine thickness={4} color="black" />

      <HeadersComponent 
      headerText="Deno + Vite + React-Native-Web" 
      subHeaderText="From ../lib/rnw" 
      lineThickness={1}
      lineColor="black"
      />   
      <MyButton title="Press Me" />
      <HorizontalLine thickness={4} color="black" />
      
       <HeadersComponent 
       headerText="Deno + Vite + React-Native-Web + Git"
       subHeaderText="From ../lib/rnw"
       lineThickness={1}
       lineColor="black"
       />
      <GitComponent />
      <HorizontalLine thickness={4} color="black" />

  </>;
}

export default App;
