import React, { Component } from 'react';

class coinListData extends Component {
    render() {
        const { nameList, name, open, high, low, close, volume } = this.props;
        const coinName = nameList.filter(coin => name.indexOf(coin.id) > -1);
        console.log(coinName);
        return (

            <td></td>
        );
    }
}

export default coinListData;