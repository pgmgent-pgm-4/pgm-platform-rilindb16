import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import '../styles/main.css'; 

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

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [uniqueFunctions, setUniqueFunctions] = useState([]);

  const { loading: blogsLoading, data: blogsData } = useQuery(GET_BLOGS);
  const { loading: projectsLoading, data: projectsData } = useQuery(GET_PROJECTS);
  const { loading: teamLoading, data: teamData } = useQuery(GET_TEAM);
  
  useEffect(() => {
    if (teamData && teamData.teams) {
      const functions = [...new Set(teamData.teams.map(member => member.functie.toLowerCase()))];
      setUniqueFunctions(functions);
    }
  }, [teamData]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredBlogs = blogsData?.blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredProjects = projectsData?.projects.filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredTeam = teamData?.teams?.filter(member => member.naam.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <Helmet>
        <title>Zoeken - Graduaat Programmeren</title>
      </Helmet>
      <header className="jumbotron">
        <h1>Zoeken</h1>
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
          <option value="Blogs">Blogs</option>
          <option value="Projects">Projects</option>
          <option value="Team">Team</option>
        </select>
      </div>
      {filter === 'Blogs' && (
        <div className="blog">
          {blogsData && blogsData.blogs.length > 0 && (
            <div className="main-blog">
              <img src={require(`../assets/${blogsData.blogs[0].imageUrl}.webp`)} alt='Photo1' className='article-image'/>
              <p>{blogsData.blogs[0].date}</p>
              <h2>{blogsData.blogs[0].title}</h2>
              <p>{blogsData.blogs[0].excerpt}</p>
              <Link to="/blog" state={{ blog: blogsData.blogs[0] }} className="button">Lees Meer</Link>
            </div>
          )}
          <div className="small-blogs">
            {filteredBlogs && filteredBlogs.slice(1).map(blog => (
              <div key={blog.id} className="small-blog">
                <img src={require(`../assets/${blog.imageUrl}.webp`)} alt={`Photo${blog.id}`} className='article-image'/>
                <p>{blog.date}</p>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <Link to="/blog" state={{ blog }} className="button">Lees Meer</Link>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {filter === 'Projects' && (
        <div className="container-section">
          <h1>Projecten</h1>
          <div className="container">
            {projectsData && projectsData.projects.map(project => (
              <article key={project.id} className="article">
                <img src={require(`../assets/${project.imageUrl}.png`)} alt={project.title} className='article-image'/>
                <h2 className="article-title">{project.title}</h2>
                <p className="article-description">{project.description}</p>
                <a href={project.url} className="article-link">Lees meer</a>
              </article>
            ))}
          </div>
        </div>
      )}

      {filter === 'Team' && (
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
            {filteredTeam && filteredTeam.map(group => (
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
      )}
    </div>
  );
};

export default Search