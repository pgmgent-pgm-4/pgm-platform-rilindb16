import React from 'react';
import { Helmet } from 'react-helmet';

const Team = () => {
  return (
    <div>
      <Helmet>
        <title>Team - Graduaat Programmeren</title>
      </Helmet>
      <header className="jumbotron">
        <h1>Ons Team</h1>
      </header>
      <p>Overzicht van het team.</p>
    </div>
  );
};

export default Team;
