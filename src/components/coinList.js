import React, { Component } from 'react';
import CoinListData from './coinListData';
import shortid from 'shortid';

class coinList extends Component {
    upDown = 0;
    state = {
        selectSort: '',
    }

    handleSort = e => {
        this.setState({
            selectSort: e.target.title,
        })
        if (this.upDown === 3) {
            this.upDown = 0;
        }
        this.upDown++;
    }

    render() {
        const { selectSort } = this.state;
        const { assetName, assetList, selectCate, findName } = this.props;
        const coinList = assetList.filter(item => item.name.indexOf(selectCate) > -1);
        coinList.sort((a, b) => {

            if (selectSort === 'variations') {
                if ((a['close'] - a['open']) / a['open'] * 100 > (b['close'] - b['open']) / b['open'] * 100) {
                    return (this.upDown === 1) ? 1 : -1;
                } else if ((a['close'] - a['open']) / a['open'] * 100 < (b['close'] - b['open']) / b['open'] * 100) {
                    return (this.upDown === 2) ? 1 : -1;
                }
            } else if (selectSort === 'transactionPrice') {
                if ((a['close'] * a['volume']) > (b['close'] * b['volume'])) {
                    return (this.upDown === 1) ? 1 : -1;
                } else if ((a['close'] * a['volume']) < (b['close'] * b['volume'])) {
                    return (this.upDown === 2) ? 1 : -1;
                }

            }
            else if (selectSort === 'name') {
                const nameA = a[selectSort].toUpperCase();
                const nameB = b[selectSort].toUpperCase();
                if (nameA > nameB && this.upDown === 1) {
                    return (this.upDown === 1) ? 1 : -1;
                } else if (nameA < nameB && this.upDown === 2) {
                    return (this.upDown === 2) ? -1 : 1;
                } else {
                    return 0;
                }

            } else if (selectSort) {
                if (this.upDown === 1) {
                    return a[selectSort] - b[selectSort];
                } else if (this.upDown === 2) {
                    return b[selectSort] - a[selectSort];
                } else {
                    return 0;
                }
            }
            return 0;
        });


        return (
            <div className="table_Wrap mx-auto" >
                <table className="list_table mx-auto">
                    <colgroup>
                        <col width="300px"></col>
                        <col width="150px"></col>
                        <col width="124px"></col>
                        <col width="150px"></col>
                        <col width="150px"></col>
                        <col width="150px"></col>
                    </colgroup>
                    <thead>
                        <tr onClick={this.handleSort}>
                            <th className={selectSort === 'name' ? 'active' : ''} title="name">이름 &#x2195;</th>
                            <th className={selectSort === 'open' ? 'active' : ''} title="open">현재가 &#x2195;</th>
                            <th className={selectSort === 'variations' ? 'active' : ''} title="variations">변동 &#x2195;</th>
                            <th className={selectSort === 'high' ? 'active' : ''} title="high">최고가 &#x2195;</th>
                            <th className={selectSort === 'low' ? 'active' : ''} title="low">최저가 &#x2195;</th>
                            <th className={selectSort === 'transactionPrice' ? 'active' : ''} title="transactionPrice">거래대금 &#x2195;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinList.map(list => (
                            <CoinListData
                                key={shortid.generate()}
                                nameList={assetName}
                                name={list.name}
                                open={list.open}
                                high={list.high}
                                low={list.low}
                                close={list.close}
                                volume={list.volume}
                                selectCate={selectCate}
                                findName={findName}
                            />
                        ))}
                    </tbody>
                </table>
            </div >
        );
    }
}

export default coinList;