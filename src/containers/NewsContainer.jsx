import React, { Component } from 'react';
import Search from '../components/articles/Search';
import ArticleList from '../components/articles/ArticleList';
import { fetchArticles, fetchNews } from '../services/NewsAPI';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: [],
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({ loading: false, articles });
  }

  render() {
    const { loading, articles } = this.state;

    if (loading) return <h1>Loading...</h1>;
    return (
      <>
        {/* <Search
          searchParam={searchParam}
          onSearchChange={this.onSearchChange}
          onSubmit={this.onSubmit}
        /> */}
        <ArticleList articles={articles} />
      </>
    );
  }
}
