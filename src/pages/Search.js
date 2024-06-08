import React, { useState } from 'react';
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
  const [filter, setFilter] = useState('Blogs');

  const { data: blogsData } = useQuery(GET_BLOGS);
  const { data: projectsData } = useQuery(GET_PROJECTS);
  const { data: teamData } = useQuery(GET_TEAM);

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
                <img src={require(`../assets/${blog.imageUrl}.webp`)} alt='' className='article-image'/>
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
            {filteredProjects && filteredProjects.map(project => (
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
        <div className="team-container-search">
          <div className="team-list-search">
            {filteredTeam && filteredTeam.map(member => (
              <div key={member.id} className="team-card">
                {member.url ? (
                  <img src={require(`../assets/${member.url}.jpg`)} alt={member.naam} className="team-image" />
                ) : (
                  <p>No image available</p>
                )}
                <h3>{member.naam}</h3>
                <p>{member.functie}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
