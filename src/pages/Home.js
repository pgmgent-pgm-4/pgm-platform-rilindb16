import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
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

const Home = () => {
    const { loading: blogsLoading, error: blogsError, data: blogsData } = useQuery(GET_BLOGS);
    const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(GET_PROJECTS);

    if (blogsLoading || projectsLoading) return <p>Loading content...</p>;
    if (blogsError) {
        console.error('GraphQL Error:', blogsError);
        return <p>Error loading blogs: {blogsError.message}</p>;
    }
    if (projectsError) {
        console.error('GraphQL Error:', projectsError);
        return <p>Error loading projects: {projectsError.message}</p>;
    }

    const blogs = blogsData?.blogs || [];
    const projects = projectsData?.projects || [];

    return (
        <div>
            <Helmet>
                <title>Graduaat Programmeren - Home</title>
            </Helmet>
            <section className="hero-section">
                <div className="hero">
                    <div className="hero-title">
                        <h1>Graduaat Programmeren</h1>
                        <p>Ontdek de wereld van softwareontwikkeling en technologie. Leer de nieuwste programmeertalen en technieken. Bereid je voor op een succesvolle carrière in IT.</p>
                        <button className="cta">
                            <span className="hover-underline-animation">Schrijf je in!</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                <path d="m38 0-1.455 1.455 5.506 5.506H0v2.078h42.052l-5.507 5.506L38 16l8-8Z" data-name="Path 10"/>
                            </svg>
                        </button>
                    </div>
                    <div className="hero-images">
                        <img src={require('../assets/photo2.jpg')} alt='Photo1' className='img-1'/>
                        <img src={require('../assets/photo1.jpg')} alt='Photo2' className='img-2'/>
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
            <section className="blog-section">
                <h1>Blog</h1>
                <div className="blog">
                    {blogs.length > 0 && (
                        <div className="main-blog">
                            <img src={require(`../assets/${blogs[0].imageUrl}.webp`)} alt='Photo1' className='article-image'/>
                            <p>{blogs[0].date}</p>
                            <h2>{blogs[0].title}</h2>
                            <p>{blogs[0].excerpt}</p>
                            <Link to="/blog" state={{ blog: blogs[0] }} className="button">Lees Meer</Link>
                        </div>
                    )}
                    <div className="small-blogs">
                        {blogs.slice(1).map(blog => (
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
            </section>
        </div>
    );
};

export default Home;
