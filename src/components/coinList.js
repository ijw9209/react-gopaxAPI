import React, { Component } from 'react';

class coinList extends Component {
    render() {
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
                            <td>비트코인</td>
                            <td>8,429,000</td>
                            <td>-4.57%</td>
                            <td>8,429,000</td>
                            <td>8,360,000</td>
                            <td>41억 KRW</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default coinList;