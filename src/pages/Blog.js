import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import "./blogDetail.css";

const Blog = () => {
    const location = useLocation();
    const blog = location.state?.blog;

    return (
        <div>
            <Helmet>
                <title>Blog - Graduaat Programmeren</title>
            </Helmet>
            <header className="jumbotron">
                <h1>Blog</h1>
            </header>
            <div className="blog-detail">
                {blog ? (
                    <>
                        <div className="blog-content">
                            <h1>{blog.title}</h1>
                            <p>{blog.date}</p>
                            <p>{blog.excerpt}</p>
                        </div>
                        <img src={blog.image} alt="Blog" />
                    </>
                ) : (
                    <p>Select a blog to read more details.</p>
                )}
            </div>
            {blog && (
                <div className="additional-info">
                    <p>{blog.content}</p>
                </div>
            )}
        </div>
    );
};

export default Blog;
