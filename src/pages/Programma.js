import React from 'react';
import { Helmet } from 'react-helmet';
import Grid from '../components/GridContainer';

const Programma = () => {
    return (
        <div>
        <Helmet>
            <title>Programma - Graduaat Programmeren</title>
        </Helmet>
        <header className="jumbotron">
            <h1>Programma van de opleiding</h1>
        </header>
        <section>
            <Grid />
        </section>
        </div>
    );
};

export default Programma;
