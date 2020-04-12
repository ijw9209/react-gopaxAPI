import React, { Component } from 'react';
import CoinListData from './coinListData';
import shortid from 'shortid';

class coinList extends Component {
    render() {
        const { assetName, assetList, selectCate } = this.props;
        const coinList = assetList.filter(item => item.name.indexOf(selectCate) > -1);
        return (
            <div className="table_Wrap mx-auto">
                <table className="list_table mx-auto">
                    <colgroup>
                        <col width="300px"></col>
                        <col width="150px"></col>
                        <col width="124px"></col>
                        <col width="100px"></col>
                        <col width="100px"></col>
                        <col width="100px"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>현재가</th>
                            <th>변동</th>
                            <th>최고가</th>
                            <th>최저가</th>
                            <th>거래대금</th>
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
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default coinList;