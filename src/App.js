import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './reset.css'
import './App.css';


class App extends Component {
  state = {
    assetsList: []
  };

  // getAssetNames = async () => {
  //   try {
  //     const res = await fetch('/assets')
  //       .then(res => res.json());
  //     console.log(res);
  //     this.setState({
  //       assetSList: res
  //     })
  //   } catch (e) {
  //     console.log(e);
  //   }

  // }
  // componentDidMount() {
  //   this.getAssetNames();
  // }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row tab_menu">
            <div className="col-10 mx-auto col-md-8 mt-4">
              1 col
            </div>
          </div>
          <div className="row main_menu mt-4">
            <div className="col main_menu">
              2 col
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;