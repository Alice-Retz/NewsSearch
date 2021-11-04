import PropTypes from 'prop-types';
import React from 'react';
import Article from './Article';

export default function ArticleList({ articles }) {
  const articleList = articles.map(({ title, author, description }) => (
    <li key={`${title}`}>
      <Article title={title} author={author} description={description} />
    </li>
  ));
  return <ul aria-label="articles">{articleList}</ul>;
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      article: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};
