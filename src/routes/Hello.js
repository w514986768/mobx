import React, { Component } from 'react';
import { Link } from 'react-router';
import './Hello.less';

export default class Hello extends Component {
    state = {
        title: "hello页面"
    };

    render = () => {
        const { title } = this.state;
        return (
            <div className="hello">
                <h1>{title}</h1>
                <Link to="/">跳转回首页</Link>
            </div>
        )
    }
}