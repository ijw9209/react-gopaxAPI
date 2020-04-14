import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/header.js';
import CoinList from './components/coinList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css'
import './App.css';

class App extends Component {
  _isMounted = false;

  state = {
    selectCate: "KRW",
    assetName: [],
    assetList: [],
    input: '',
    loading: false
  };

  changeMoney = select => {
    this.setState({
      selectCate: select
    });
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  getAssetNames = async () => {

    try {
      const res = await axios.get('/assets');
      this.setState({
        assetName: res.data
      })
    } catch (e) {
      console.log(e);
    }

  }

  getTraidingPairs = async () => {

    try {
      const res = await axios.get('/trading-pairs/stats')
      this.setState({
        assetList: res.data
      })
    } catch (e) {
      console.log(e);
    }


  }

  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted) {
      this.getAssetNames();
      this.getTraidingPairs();
      try {
        setInterval(async () => {
          await this.getTraidingPairs();
        }, 30000)
      } catch (e) {
        console.log(e);
      }
    }
  }

  componentWillMount() {
    this._isMounted = false;
  }


  render() {
    const { input, assetName, assetList, selectCate } = this.state;
    return (
      <div className="App">
        <Header
          changeMoney={this.changeMoney}
          input={input}
          onChange={this.handleChange} />
        <CoinList
          findName={input}
          selectCate={selectCate}
          assetName={assetName}
          assetList={assetList}
        />
      </div>
    );
  }
}

export default App;
