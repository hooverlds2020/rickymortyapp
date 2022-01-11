import React from 'react'
import SearchBox from './components/SearchBox';
import './styles.css'

document.body.style = "background: #FB0058";

const App = () => {
  return (
    <>
      <div className="banner-img"></div>
      <div className="container">
        <h1>Rick and Morty Wiki</h1>
        <SearchBox />
      </div>
    </>
  );
}

export default App;
