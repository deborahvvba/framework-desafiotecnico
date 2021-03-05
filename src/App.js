/* Import statements */
import React from "react";
import { Router, Link, Route, Switch } from "react-router-dom";
import Todo from "./pages/to-do/todo";
import Albums from "./pages/albuns/albums";
import Posts from "./pages/postagens/posts";
import './App.css';
import history from './common/history';

const App = () => {
  return (
    <div className="container">
      <nav className="navbar"> 
      <a href="https://frwk.com.br/"><img src="./logof.png" className= "logo"></img></a>
       <ul className="App-link">
       
            <Link className="App-link" to="/"><button className="button">Menu inicial</button></Link>
          
          
            <Link className="App-link" to="/postagens"><button className="button">Postagens</button></Link>
          
          
            <Link className="App-link" to="/albuns"><button className="button">Álbuns</button></Link>
          
          
            <Link className="App-link" to="/todos"><button className="button">To-Do</button></Link>
          
        </ul>
      </nav>

      <div className="footer">
      <a>Desenvolvido por Deborah Vilas Boas</a>
      </div>

      <Router history={history}>
        <Switch>
          <Route path="/postagens" component={Posts} />
          <Route path="/albuns" component={Albums} />
          <Route path="/todos" component={Todo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;