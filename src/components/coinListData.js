import React, { Component } from 'react';

class coinListData extends Component {
    render() {
        const { nameList, name, open, high, low, close, volume } = this.props;
        const coinName = nameList.filter(item => name.indexOf(item.id) > -1)[1].name;
        console.log(coinName);
        return (
            <tr>
                <td>{coinName}</td>
            </tr>
        );
    }
}

export default coinListData;