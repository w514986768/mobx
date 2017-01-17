import React, { Component } from 'react';
import { Link } from 'react-router';
import request from '../utils/request';
console.log(request("../package.json"));

export default class Index extends Component{
    render(){
        return (
            <div>
                <h1>这是首页</h1>
                <Link to="/hello">跳转Hello</Link>
            </div>
        )
    }
}