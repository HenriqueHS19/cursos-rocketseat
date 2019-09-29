import React from 'react';

//style
import './style.css';

//components
import Header from './components/header';

//pages
import Main from './pages/main/index';

const App = function(){
  return(
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
