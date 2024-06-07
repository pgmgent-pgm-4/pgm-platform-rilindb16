import React from 'react';
import { Helmet } from 'react-helmet';

const Services = () => {

  const scrollToArticles = () => {
    const articlesContainer = document.querySelector('.articles-container');
    articlesContainer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="services-container">
      <Helmet>
        <title>Services - Graduaat Programmeren</title>
      </Helmet>
      <header className="jumbotron">
        <h1>Services</h1>
      </header>
      <section className="introduction">
      <div className="opleiding-container">
        <section className="opleiding-section">
          <div className="hero-content">
              <h1>Diensten</h1>
              <p>Een graduaat opleiding in programmeren aan Artevelde Hogeschool biedt een breed scala aan diensten die zijn ontworpen om studenten voor te bereiden op een succesvolle carrière in de IT-sector. Deze opleiding richt zich op zowel theoretische kennis als praktische vaardigheden en biedt onder andere de volgende diensten:</p>
              <button onClick={scrollToArticles}>Onze Diensten</button>
          </div>
          <div className="hero-image">
            <img src={require('../assets/service.webp')} alt='Photo2' className='img-2'/>
          </div>
        </section>
        <section className='brochure-section'>
            <div className='brochure'>
                <h1>Brochure aanvragen?</h1>
                <button>Via de post</button>
                <button>Via e-mail</button>
            </div>
          </section>
          <section>
            <div className="articles-container">
                <div className="left-column">
                    <div className="article">
                        <h2>Basiskennis en Geavanceerde Programmeerprincipes</h2>
                        <p>Studenten leren de fundamenten van diverse programmeertalen zoals Python, Java, en C#. Daarnaast worden geavanceerde concepten zoals object-georiënteerd programmeren en softwarearchitectuur behandeld.</p>
                    </div>
                    <div className="article">
                        <h2>Projectwerk en Praktijkervaring</h2>
                        <p>De opleiding bevat uitgebreide projectwerk en stages, waardoor studenten echte ervaring opdoen in de industrie. Dit helpt hen om theorie in praktijk om te zetten en waardevolle werkervaring op te bouwen.</p>
                    </div>
                    <div className="article">
                        <h2>Workshops en Gastcolleges</h2>
                        <p>Regelmatig worden er workshops en gastcolleges georganiseerd door experts uit de industrie. Dit biedt studenten inzicht in de laatste trends en ontwikkelingen binnen de programmeerwereld.</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="article">
                        <h2>Individuele Begeleiding en Coaching</h2>
                        <p>Studenten krijgen persoonlijke begeleiding en coaching om hun individuele leertrajecten te ondersteunen. Dit helpt hen om eventuele moeilijkheden te overwinnen en hun sterke punten te maximaliseren.</p>
                    </div>
                    <div className="article">
                        <h2>Netwerkmogelijkheden</h2>
                        <p>Door samenwerkingen met bedrijven en professionals uit de sector, biedt de opleiding talloze mogelijkheden voor studenten om te netwerken en contacten te leggen die waardevol kunnen zijn voor hun toekomstige carrière.</p>
                    </div>
                    <div className="article">
                        <h2>Toegang tot Moderne Technologie</h2>
                        <p>Studenten hebben toegang tot de nieuwste software en hardware, waardoor ze kunnen werken met tools en technologieën die momenteel in de industrie worden gebruikt.</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
      </section> 
    </div>
  );
};

export default Services;
