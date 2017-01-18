import React, { Component } from 'react';
import { Link } from 'react-router';
import { observer, inject } from "mobx-react";

@inject('article') @observer
export default class Index extends Component{
    componentDidMount = () => {
        this._fetchList()
    };

    _fetchList = (data) => {
        const { article } = this.props;
        article.getArticleList(data)
    };

    _selectOnChange = (e) => {
        const val = e.target.value;
        this._fetchList({
            type: val
        })
    };

    render = () => {
        const { article: { loading, list, pageNum, totalPage, count } } = this.props;

        return (
            <div>
                <h1>这是首页</h1>
                <Link to="/hello">跳转Hello</Link>
                <select onChange={this._selectOnChange}>
                    <option value="">全部</option>
                    <option value="0">css</option>
                    <option value="1">js</option>
                    <option value="2">react</option>
                    <option value="3">mobile</option>
                    <option value="4">杂谈</option>
                </select>
                {
                    loading ?
                        <h1>Loding........</h1> :
                        list.map((data, index) => {
                            return <h3 key={index}>{data.title}</h3>
                        })
                }
                <h4>当前总条数:{count},当前页数:{pageNum},总页数:{totalPage}</h4>
            </div>
        )
    }
}