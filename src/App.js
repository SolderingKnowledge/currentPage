import React, { Component } from 'react';
import Header from "./components/Header";
import Device from "./components/Device";
import Repair from "./components/Repair";
import Home from "./components/Home";
const pages = {
  home: "home",
  device: "device",
  repair: "repair"
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: pages.home,
    }
  }
  setPage = (page) => {
    this.setState({
      activePage: page
    })
  }


  render() {
    let currentPage = null;
    if (this.state.activePage === pages.home) {
      currentPage = <Home />;
    }
    else if (this.state.activePage === pages.repair) {
      currentPage = <Repair />
    }
    else if (this.state.activePage === pages.device) {
      currentPage = <Device />
    }
    return (
      <div className="App">
        <button onClick={() => this.setPage(pages.home)}>Home</button>
        <button onClick={() => this.setPage(pages.repair)}>Repair</button>
        <button onClick={() => this.setPage(pages.device)}>Device</button>
        <Header setPage={this.setPage} currentPage={this.state.activePage} />
        {currentPage}
      </div >
    );
  }
}

export default App;
