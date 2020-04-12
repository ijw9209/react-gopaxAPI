import React, { Component } from 'react';

class coinListData extends Component {
    render() {
        const { nameList, name, open, high, low, close, volume } = this.props;
        const coinName = nameList.filter(item => name.indexOf(item.id) > -1)[1].name;
        console.log(coinName);
        return (
            <tr>
                <td>{coinName}</td>
                <td>{close}</td>
                <td>변동</td>
                <td>{high}</td>
                <td>{low}</td>
                <td>거래량</td>
            </tr>
        );
    }
}

export default coinListData;