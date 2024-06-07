import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/main.css'; // Import main styles

const GET_BLOGS = gql`
    query getBlogs {
        blogs {
            id
            title
            date
            excerpt
            content
            imageUrl
        }
    }
`;

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

const GET_TEAM = gql`
    query getTeam {
        teams {
            naam
            id
            functie
            url
        }
    }
`;

const Home = () => {
    const { loading: blogsLoading, error: blogsError, data: blogsData } = useQuery(GET_BLOGS);
    const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(GET_PROJECTS);
    const { loading: teamLoading, error: teamError, data: teamData } = useQuery(GET_TEAM); // New team query

    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    if (blogsLoading || projectsLoading || teamLoading) return <p>Loading content...</p>;
    if (blogsError) {
        console.error('GraphQL Error:', blogsError);
        return <p>Error loading blogs: {blogsError.message}</p>;
    }
    if (projectsError) {
        console.error('GraphQL Error:', projectsError);
        return <p>Error loading projects: {projectsError.message}</p>;
    }
    if (teamError) {
        console.error('GraphQL Error:', teamError);
        return <p>Error loading team: {teamError.message}</p>;
    }

    const blogs = blogsData?.blogs || [];
    const projects = projectsData?.projects || [];
    const team = teamData?.teams || []; // Updated team data

    // Group team members by function
    const groupedTeam = {};
    team.forEach(member => {
        if (!groupedTeam[member.functie]) {
            groupedTeam[member.functie] = [];
        }
        groupedTeam[member.functie].push(member);
    });

    // Get unique functions for the filter dropdown
    const uniqueFunctions = [...new Set(team.map(member => member.functie.toLowerCase()))];

    // Filter and search operations remain the same
    const filteredTeam = Object.keys(groupedTeam).map(functie => ({
        functie,
        members: groupedTeam[functie].filter(member => {
            const matchesSearchTerm = member.functie.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = filter === '' || member.functie.toLowerCase() === filter.toLowerCase();
            return matchesSearchTerm && matchesFilter;
        })
    })).filter(group => group.members.length > 0);

    return (
        <div>
            <Helmet>
                <title>Graduaat Programmeren - Home</title>
            </Helmet>
            <section className="hero-section">
                {/* Hero Section content */}
            </section>
            <section>
                <div className="container-section">
                    <h1>Projecten</h1>
                    <div className="container">
                        {/* Projecten content */}
                    </div>
                </div>
            </section>
            <section className="blog-section">
                {/* Blog Section content */}
            </section>
            <section>
                <div className="team-container">
                    <header className="jumbotron">
                        <h1>Team</h1>
                    </header>
                    <div className="filter-search-container">
                        <input
                            type="text"
                            placeholder="Zoeken..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="search-bar"
                        />
                        <select value={filter} onChange={handleFilterChange} className="filter-dropdown">
                            <option value="">Alles</option>
                            {uniqueFunctions.map(functie => (
                                <option key={functie} value={functie}>{functie}</option>
                            ))}
                        </select>
                    </div>
                    <div className="team-list">
                        {filteredTeam.map(group => (
                            <div key={group.functie} className="team-group">
                                <h3>{group.functie}</h3>
                                <div className="team-card-container">
                                    {group.members.map(teamMember => (
                                        <div key={teamMember.id} className="team-card">
                                            {teamMember.url ? (
                                                <img src={require(`../assets/${teamMember.url}.jpg`)} alt={teamMember.naam} className="team-image" />
                                            ) : (
                                                <p>No image available</p>
                                            )}
                                            <h3>{teamMember.naam}</h3>
                                            <p>{teamMember.functie}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
