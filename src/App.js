import React,{useEffect,Fragment} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './Components/layouts/SearchBar'
import Logs from './Components/logs/Logs'
import AddBtn from './Components/layouts/AddBtn'
import AddLog from './Components/logs/AddLog'
import EditLog from './Components/layouts/EditLog'
import Addtech from './Components/techs/Addtech'
import Techs from './Components/techs/Techs'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar />
        <div className="container">
        <Logs />
        <AddLog />
        <EditLog />
        <Addtech />
        <Techs/>
        <AddBtn/>
      </div>
      </Fragment>
      </Provider>
  );
}

export default App;
