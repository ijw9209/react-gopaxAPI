import React, { Component } from 'react';
import Header from './components/header.js';
import CoinList from './components/coinList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css'
import './App.css';


class App extends Component {
  state = {
    selectCate: "KRW",
    assetName: [],
    assetList: [],
    input: ''
  };


  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      input: e.target.value
    })
  }
  getAssetNames = async () => {
    try {
      const res = await fetch('/assets')
        .then(res => res.json());
      this.setState({
        assetName: res
      })
    } catch (e) {
      console.log(e);
    }

  }

  getTraidingPairs = async () => {
    try {
      const res = await fetch('/trading-pairs/stats')
        .then(res => res.json());
      console.log(res);
      this.setState({
        assetList: res
      })
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.getAssetNames();
    this.getTraidingPairs();
  }
  render() {
    const { input, assetName, assetList } = this.state;
    return (
      <div className="App">
        <Header input={input} onChange={this.handleChange} />
        <CoinList
          assetName={assetName}
          assetList={assetList}
        />
      </div>
    );
  }
}

export default App;
