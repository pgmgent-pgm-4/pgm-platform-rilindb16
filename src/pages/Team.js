import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Helmet } from 'react-helmet'; 
import '../styles/Team.css';

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

function Team() {
    const { loading, error, data } = useQuery(GET_TEAM);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    if (loading) return <p>Loading team...</p>;
    if (error) {
        console.error('GraphQL Error:', error);
        return <p>Error: {error.message}</p>;
    }

    if (!data || !data.teams) {
        return <p>No team data found.</p>;
    }

    // Group team members by function
    const groupedTeam = {};
    data.teams.forEach(member => {
        if (!groupedTeam[member.functie]) {
            groupedTeam[member.functie] = [];
        }
        groupedTeam[member.functie].push(member);
    });

    // Get unique functions for the filter dropdown
    const uniqueFunctions = [...new Set(data.teams.map(member => member.functie.toLowerCase()))];

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
        <>
            <Helmet>
                <title>Services - Graduaat Programmeren</title>
            </Helmet>
            <header className="jumbotron">
                <h1>Team</h1>
            </header>
            <div className="team-container">
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
        </>
    );
}

export default Team;
