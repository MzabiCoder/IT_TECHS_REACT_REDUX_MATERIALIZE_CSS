import React,{useEffect,Fragment} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './Components/layouts/SearchBar'
import Logs from './Components/logs/Logs'
import AddBtn from './Components/layouts/AddBtn'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
        <AddBtn/>
      </div>
    
    </Fragment>
  );
}

export default App;
