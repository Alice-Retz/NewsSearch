import PropTypes from 'prop-types';
import React from 'react';

export default function Article({ title, author, description }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      <h2>{description}</h2>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
