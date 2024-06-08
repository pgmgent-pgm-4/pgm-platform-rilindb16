import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery, gql } from '@apollo/client';
import '../styles/main.css'; 


const GET_PROJECTS = gql`
    query getProjects {
        projects {
            id
            title
            description
            imageUrl
            url
        }
    }
`;

const Home = () => {
    const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(GET_PROJECTS);

    if (projectsLoading) return <p>Loading content...</p>;
    if (projectsError) {
        console.error('GraphQL Error:', projectsError);
        return <p>Error loading projects: {projectsError.message}</p>;
    }
    const projects = projectsData?.projects || [];

    return (
        <div>
            <Helmet>
                <title>Portfolio - Graduaat Programmeren</title>
            </Helmet>
            <header className="jumbotron">
                <h1>Portfolio</h1>
            </header>
            <section>
                <div className="portfolio-hero">
                    <div className="left-section">
                        <h1>Programmeren</h1>
                        <p>Ontdek het studentenwerk van het graduaat Programmeren!</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-section">
                    <h1>Projecten</h1>
                    <div className="container">
                        {projects.map(project => (
                            <article key={project.id} className="article">
                                <img src={require(`../assets/${project.imageUrl}.png`)} alt={project.title} className='article-image'/>
                                <h2 className="article-title">{project.title}</h2>
                                <p className="article-description">{project.description}</p>
                                <a href={project.url} className="article-link">Lees meer</a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
