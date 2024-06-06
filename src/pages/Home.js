// src/pages/Home.js

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
    const blogs = [
        {
            id: 1,
            title: "Gentse horecazaken kunnen gratis 'food waste monitor' testen dankzij onderzoek van Arteveldehogeschool",
            date: "12/02/2024",
            excerpt: "Voedselverspilling monitoren met slimme camera's en een weegschaal, dat is wat ze in sociaal restaurant Parnassus, personeelsrestaurant De Stroom van de Stad Gent en bij Teamleader het afgelopen half jaar hebben gedaan. Zo kregen ze inzicht in wat mensen weggooien en hoeveel. Gentse horeca-ondernemers kunnen nu gratis zo'n 'food waste monitor' testen dankzij een samenwerking van de Stad Gent en Arteveldehogeschool.",
            content: `In de strijd tegen voedselverspilling stond er de afgelopen zes maanden een 'food waste monitor' in sociaal restaurant Parnassus en de bedrijfsrestaurants van Stad Gent en Teamleader. Die bestaat uit een slimme camera en weegschaal en registreert welk voedsel medewerkers en klanten weggooien en hoeveel. Het gaat bijvoorbeeld om keukenafval, maar ook om voedselresten op de borden. Via een dashboard krijgen de restaurants een overzicht. Het gaat om een onderzoek van Arteveldehogeschool waaraan Stad Gent meewerkt.`,
            image: require('../assets/GeentseFeesten.png')
        },
        {
            id: 2,
            title: "Randstad test VR-ervaring rond diversiteit en inclusie op de werkvloer",
            date: "12/02/2024",
            excerpt: "Om een inclusieve werkomgeving te bouwen, is het cruciaal om bewustwording te creëren op alle niveaus. HR-dienstverlener Randstad geeft alvast het goede voorbeeld en werkt samen met Arteveldehogeschool aan het onderzoeksproject Inclusion through immersion. In de kantoren in Melle dompelden enkele Randstad-medewerkers zich onder in de VR-ervaring.",
            content:`In de VR-filmpjes, die ontwikkeld zijn door onderzoekers van het expertisenetwerk Business en Management, ondervinden leidinggevenden realistische situaties van exclusie, vooroordelen en micro-agressies op de werkvloer. "Nadat ze een bepaalde situatie ervaren hebben, volgt een individuele reflectie en gaan deelnemers een groepsdiscussie aan", zegt onderzoeker Ilse Lievens. "Deze VR-simulatie is voorlopig de enige van haar soort in Vlaanderen."

            "Klassieke trainingen om het bewustzijn rond diversity, equity & inclusion (DEI) op de werkvloer te verhogen, werken niet op lange termijn", zegt Wim Van der Linden van HR-dienstverlener Randstad. "Managers onderdompelen in een VR-setting waarin ze discriminatie ervaren, is een beloftevolle methode om wel op lange termijn te sensibiliseren. VR-simulaties spelen in op de persoonlijke aansprakelijkheid van deelnemers."`,
            image: require('../assets/GeentseFeesten.png')
        },
        {
            id: 3,
            title: "Artevelde Academy stimuleert levenslang leren op VOV-beurs",
            date: "12/02/2024",
            excerpt: "Artevelde Academy staat op dinsdag 4 juni op de VOV-vakbeurs in het Gentse ICC. Het evenement brengt iedereen samen die bezig is met leren en ontwikkeling van individuen, teams en organisaties. Met een beursstand over vormingen voor professionals, een presentatie over leiderschapscompetenties bij zorgverleners en een lezing over intervisie en supervisie stimuleert Arteveldehogeschool het levenslang leren bij medewerkers in Learning & Development.",
            content: `Op de beursstand etaleert Artevelde Academy zijn aanbod voor professionals in drie thema’s: HR en leiderschap, coachen en begeleiden, en marketing en contentcreatie met AI. 

            "Arteveldehogeschool bundelt met Artevelde Academy bijscholingen voor professionals in de socialprofitsector, gezondheid en zorg, onderwijs en profitorganisaties", zegt Bart Haegens, hoofd levenslang leren aan Arteveldehogeschool. "Vormingen op lange termijn kunnen een tweede bachelordiploma, postgraduaat of bachelor-na-bachelor opleveren. Daarnaast zijn er kortlopende vormingen, studiedagen en samenwerkingen, zoals dienstverleningstrajecten, onderzoek, stages en bachelorproefprojecten`,
            image: require('../assets/GeentseFeesten.png')
        }
    ];

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
                        <article className="article">
                            <img src={require('../assets/Lightopia.png')} alt='Photo2' className='article-image'/>
                            <h2 className="article-title">Lightopia</h2>
                            <p className="article-description">In ons recente project hebben wij als studenten een meeslepende website ontworpen voor Lightopia, een fictief bedrijf gespecialiseerd in moderne verlichtingsoplossingen. Ons doel was om een frisse online ervaring te creëren die de kernwaarden van Lightopia weerspiegelt en bezoekers uitnodigt om de wereld van verlichting te verkennen.</p>
                            <a href="./portfolio" className="article-link">Lees meer</a>
                        </article>
                        <article className="article">
                            <img src={require('../assets/GeentseFeesten.png')} alt='Photo2' className='article-image'/>
                            <h2 className="article-title">Geentse Feesten</h2>
                            <p className="article-description">Ons project omvatte de ontwikkeling van een uitnodigende website voor de Gentse Feesten, een van de meest bruisende evenementen in België. Als studenten hebben we gestreefd naar een website die de unieke sfeer van het festival vastlegt en bezoekers aanmoedigt om deel te nemen aan de festiviteiten.</p>
                            <a href="./portfolio" className="article-link">Lees meer</a>
                        </article>
                        <article className="article">
                            <img src={require('../assets/GeentseFeesten.png')} alt='Photo2' className='article-image'/>
                            <h2 className="article-title">Studio Clean</h2>
                            <p className="article-description">Als onderdeel van onze opleiding hebben de studenten de Studio Clean-website ontwikkeld, gericht op front-end webontwikkeling met behulp van Nunjucks als template engine. Studio Clean is een fictief designbureau dat gespecialiseerd is in minimalistische ontwerpen en moderne esthetiek. Het doel van dit project was om een strakke, responsieve website te creëren die de kernwaarden van Studio Clean weerspiegelt.</p>
                            <a href="portfolio" className="article-link">Lees meer</a>
                        </article>
                    </div>
                </div>
            </section>
            <section className="blog-section">
                <h1>Blog</h1>
                <div className="blog">
                    <div className="main-blog">
                        <img src={blogs[0].image} alt='Photo1' className='article-image'/>
                        <p>{blogs[0].date}</p>
                        <h2>{blogs[0].title}</h2>
                        <p>{blogs[0].excerpt}</p>
                        <Link to="/blog" state={{ blog: blogs[0] }} className="button">Lees Meer</Link>
                    </div>
                    <div className="small-blogs">
                        {blogs.slice(1).map(blog => (
                            <div key={blog.id} className="small-blog">
                                <img src={blog.image} alt={`Photo${blog.id}`} className='article-image'/>
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
