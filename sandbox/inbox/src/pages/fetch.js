import React from 'react'
import 'isomorphic-fetch'

export default class extends React.Component {
    static async getInitialProps() {
        const res = await fetch('https://b.hatena.ne.jp/entry/json/http://www.hatena.ne.jp/');
        const data = await res.json();
        return {data: data}
    }

    render() {
        const {data} = this.props;
        console.log(data);
        return data.title;
    }
}