import React from 'react';
import { Helmet } from 'react-helmet';

const Search = () => {
  return (
    <div>
      <Helmet>
        <title>Zoeken - Graduaat Programmeren</title>
      </Helmet>
      <header className="jumbotron">
        <h1>Zoeken</h1>
      </header>
      <p>Zoeken naar content op de site.</p>
    </div>
  );
};

export default Search;
