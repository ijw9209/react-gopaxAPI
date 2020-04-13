import React, { Component } from 'react';

class header extends Component {
    state = {
        active: 'KRW'

    }

    handleSelect = e => {
        this.setState({
            active: e.target.textContent
        })
        this.props.changeMoney(e.target.textContent)
    }

    render() {
        const { active } = this.state;
        const { input, onChange } = this.props;
        return (
            <div className="Wrap mx-auto mt-6">
                <ul className="cate_ul" onClick={this.handleSelect}>
                    <li className={active === 'KRW' ? 'active' : ''}>KRW</li>
                    <li className={active === 'BTC' ? 'active' : ''}>BTC</li>
                    <li className={active === 'ETH' ? 'active' : ''}>ETH</li>
                </ul>
                <div className="search_form">
                    <form>
                        <input onChange={onChange} value={input} type="text" placeholder="이름/심볼검색"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default header;