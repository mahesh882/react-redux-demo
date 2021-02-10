
import './App.css';
import DemoData from "./demo"
import MainPage from "./components/mainPage/index"
import { Provider } from 'react-redux'
import store from './redux/store'
import React from 'react';

export const ThemeContext = React.createContext('light');

//@ provider with store 
function App() {
  return (
    <Provider store={store}>
      <ThemeContext.Provider value="dark">
        <div className="App">
   {/* <DemoData/> */}
   <MainPage/>
    </div>
      </ThemeContext.Provider>
     
  </Provider>
   
  );
}

export default App;
