import React, { Component } from 'react';

class coinListData extends Component {
    render() {
        const { nameList, name, open, high, low, close, volume, selectCate, findName } = this.props;
        const coinName = nameList.filter(item => name.indexOf(item.id) > -1)[1].name;
        const rateOfCharge = ((close - open) / open * 100).toFixed(2);
        const transactionPrice = Math.floor(close * volume);
        const cate = num => {
            if (selectCate === 'BTC' || selectCate === 'ETH') {
                return Number.isInteger(num) ? num.toLocaleString() : num.toFixed(8);
            } else {
                return num.toLocaleString();
            }
        }

        const strPrice = num => {
            const str = num + "";
            if (str.length > 4) {
                if (str.length > 8) {
                    const sub = str.substring(0, 2);
                    const numParse = Number(sub);
                    return numParse.toLocaleString() + "억";
                } else {
                    const sub2 = str.substring(0, 4);
                    const numParse2 = Number(sub2);
                    return numParse2.toLocaleString() + "만";
                }
            } else {
                return num.toLocaleString();
            }
        }

        if (coinName.indexOf(findName) < 0) {
            return null;
        }

        return (
            <tr>
                <td>{name.slice(0, 3)}/{coinName}</td>
                <td>{cate(close)}</td>
                <td className={`data_rate ${rateOfCharge > 0 ? 'green' : (rateOfCharge === 0 ? '' : 'red')}`}>{rateOfCharge}%</td>
                <td>{cate(high)}</td>
                <td>{cate(low)}</td>
                <td>{strPrice(transactionPrice) + '' + selectCate}</td>
            </tr>
        );
    }
}

export default coinListData;