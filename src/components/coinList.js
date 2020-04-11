import React, { Component } from 'react';
import CoinListData from './coinListData';
import shortid from 'shortid';

class coinList extends Component {
    render() {
        const { assetName, assetList } = this.props;
        const Namefilter = assetName.filter(item => item.id !== "KRW");
        console.log(Namefilter);
        return (
            <div className="table_Wrap mx-auto">
                <table className="list_table mx-auto">
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
                        <tr>
                            {assetList.map(list => (
                                <CoinListData
                                    key={shortid.generate()}
                                    nameList={Namefilter}
                                    name={list.name}
                                    open={list.open}
                                    high={list.high}
                                    low={list.low}
                                    close={list.close}
                                    volume={list.volume}
                                />
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default coinList;