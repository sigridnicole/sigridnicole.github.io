import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

class App extends Component {

  constructor() {
    super();
    this.state = {
      page: "home"
    };
  }

  onPageChange = page => {
    this.setState({page:page});
  };

   render() {
    const { page } = this.state;
    return (
      <div className="App">
        <Nav onPageChange={this.onPageChange}/>
        { page ==='about' ? <About /> :
          page ==='portfolio'? <Portfolio /> :
          page ==='contact' ? <Contact /> :
          <Home />
        }
      </div>
    );
  }
}

export default App;
