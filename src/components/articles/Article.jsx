import PropTypes from 'prop-types';
import React from 'react';

export default function Article({ title, author, description }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{author}</p>
      <h3>{description}</h3>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
