import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [expandedArticle, setExpandedArticle] = useState(null);

    const articles = [
        {
            id: 'Lightopia',
            title: 'Lightopia',
            description: 'In ons recente project hebben wij als studenten een meeslepende website ontworpen voor Lightopia, een fictief bedrijf gespecialiseerd in moderne verlichtingsoplossingen. Ons doel was om een frisse online ervaring te creëren die de kernwaarden van Lightopia weerspiegelt en bezoekers uitnodigt om de wereld van verlichting te verkennen.',
            extra: 'Bij het ontwikkelen van de website hebben we gebruik gemaakt van de nieuwste webtechnologieën om een dynamische en visueel aantrekkelijke gebruikerservaring te bieden. Het ontwerp is geïnspireerd op de elegante en functionele aard van Lightopia\'s producten, met een focus op heldere, strakke lijnen en een intuïtieve navigatie. We hebben een responsieve lay-out geïmplementeerd om ervoor te zorgen dat de website op alle apparaten, van desktops tot smartphones, uitstekend functioneert. Een belangrijk aspect van de website was het presenteren van Lightopia\'s uitgebreide productportfolio. Hiervoor hebben we interactieve productgalerijen en gedetailleerde productpagina\'s gemaakt die gebruikers in staat stellen om alle kenmerken en voordelen van de verlichtingsoplossingen van Lightopia te ontdekken. Bovendien hebben we videodemonstraties en 360-graden productweergaven geïntegreerd om een diepere betrokkenheid te stimuleren. Om de website levendig en informatief te maken, hebben we ook contentsecties toegevoegd die de expertise van Lightopia op het gebied van innovatieve verlichting benadrukken. Dit omvat blogartikelen, case studies, en klantgetuigenissen, die allemaal bijdragen aan het opbouwen van vertrouwen en geloofwaardigheid bij bezoekers. Daarnaast hebben we een gebruiksvriendelijke contactpagina ontworpen met geïntegreerde formulieren en interactieve kaarten, zodat potentiële klanten gemakkelijk contact kunnen opnemen met Lightopia voor vragen of offertes. De website is ook geoptimaliseerd voor zoekmachines (SEO) om de online zichtbaarheid van Lightopia te verbeteren en meer organisch verkeer aan te trekken. Onze aanpak combineerde creatief ontwerp met technische precisie, waarbij we voortdurend feedback verzamelden en iteratief verbeterden om een eindproduct te leveren dat zowel esthetisch aantrekkelijk als functioneel effectief is. Het resultaat is een meeslepende website die de merkidentiteit van Lightopia versterkt en een naadloze gebruikerservaring biedt.',
            category: 'Back-End'
        },
        {
            id: 'GeentseFeesten',
            title: 'Geentse Feesten',
            description: 'Ons project omvatte de ontwikkeling van een uitnodigende website voor de Gentse Feesten, een van de meest bruisende evenementen in België. Als studenten hebben we gestreefd naar een website die de unieke sfeer van het festival vastlegt en bezoekers aanmoedigt om deel te nemen aan de festiviteiten.',
            extra: 'Bij het ontwerpen van de website hebben we veel aandacht besteed aan gebruiksvriendelijkheid en toegankelijkheid, zodat bezoekers gemakkelijk informatie kunnen vinden over het programma, locaties, en ticketverkoop. De website bevatte ook interactieve elementen zoals een festivalmap, een agenda met filteropties, en een sectie voor het delen van foto\'s en ervaringen op sociale media. Daarnaast hebben we een mobiele versie ontwikkeld om ervoor te zorgen dat de site op alle apparaten goed functioneert. Om de sfeer van de Gentse Feesten te weerspiegelen, hebben we gekozen voor een levendig kleurenschema en dynamische visuals. De site bevatte ook video’s en getuigenissen van vorige edities, om nieuwe bezoekers een voorproefje te geven van wat ze kunnen verwachten. Onze aanpak omvatte een grondige analyse van de doelgroep en hun behoeften, regelmatige feedbacksessies met gebruikers, en een nauwe samenwerking met organisatoren van het festival. Dit zorgde ervoor dat de uiteindelijke website niet alleen esthetisch aantrekkelijk was, maar ook praktisch en informatief, wat bijdroeg aan de algehele beleving van de Gentse Feesten.',
            category: 'Back-End'
        },
        {
            id: 'StudioClean',
            title: 'Studio Clean',
            description: 'Als onderdeel van onze opleiding hebben de studenten de Studio Clean-website ontwikkeld, gericht op front-end webontwikkeling met behulp van Nunjucks als template engine. Studio Clean is een fictief designbureau dat gespecialiseerd is in minimalistische ontwerpen en moderne esthetiek. Het doel van dit project was om een strakke, responsieve website te creëren die de kernwaarden van Studio Clean weerspiegelt.',
            extra: 'Bij het ontwerpen van de website lag de focus op eenvoud en functionaliteit. We hebben gekozen voor een helder kleurenschema en een intuïtieve lay-out die bezoekers direct naar de belangrijkste informatie leidt. De website is volledig responsief, wat betekent dat deze even goed werkt op mobiele apparaten als op desktops, waardoor gebruikers altijd en overal een optimale ervaring hebben. Nunjucks, de gekozen template engine, bood ons de flexibiliteit om herbruikbare componenten te creëren en de website efficiënt te ontwikkelen. Dit zorgde voor een consistente stijl en snelle laadtijden, wat cruciaal is voor het leveren van een hoogwaardige gebruikerservaring. We hebben ook gebruik gemaakt van moderne CSS-technieken en JavaScript om interactieve elementen toe te voegen, zoals geanimeerde menu\'s en hover-effecten, die de gebruikerservaring verrijken zonder de eenvoud van het ontwerp te compromitteren. Het project omvatte verschillende fases, waaronder wireframing, prototyping, en het iteratief testen van de website om ervoor te zorgen dat deze voldeed aan de hoge standaard van Studio Clean. We hebben nauw samengewerkt met fictieve klanten om feedback te integreren en het eindproduct af te stemmen op hun verwachtingen. Daarnaast hebben we content ontwikkeld die de expertise van Studio Clean benadrukt, met secties die de diverse diensten, portfolio, en klantgetuigenissen bevatten. Door een strakke, minimalistische esthetiek te combineren met geavanceerde webtechnologieën, hebben we een website gecreëerd die niet alleen visueel aantrekkelijk is, maar ook functioneel en gemakkelijk te navigeren.',
            category: 'Front-End'
        }
    ];

    const handleReadMore = (article) => {
        setExpandedArticle(expandedArticle === article ? null : article);
        setTimeout(() => {
            document.getElementById(article).scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const filteredArticles = articles.filter(article => {
        const matchesSearchTerm = article.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === '' || article.category === filter;
        return matchesSearchTerm && matchesFilter;
    });

    const images = [
        'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1568333261345-0918efdce2d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1612066473428-fb6833a0d855?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

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
                        <p>Ontdek het studentenwerk van het graduaat Programmeren! Benieuwd wat onze programmeurs uitspoken in de cloud? Of wat ze kunnen maken met HTML, CSS, JavaScript Node.js, PHP en veel meer? Je vindt het allemaal op dit portfolio platform.</p>
                    </div>
                </div>
                <div className="image-grid">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Placeholder ${index + 1}`} className="image" />
                    ))}
                </div>
            </section>
            <div className="container-section">
                <h1>Projecten</h1>
                <div className="search-filter-container">
                    <input
                        type="text"
                        placeholder="Zoeken..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-bar"
                    />
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
                        <option value="">Alles</option>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                    </select>
                </div>
                <div className="container">
                    {filteredArticles.map(article => (
                        <Article 
                            key={article.id}
                            title={article.title} 
                            description={article.description}
                            expandedArticle={expandedArticle}
                            handleReadMore={handleReadMore}
                            id={article.id}
                            extra={article.extra}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Article = ({ title, description, expandedArticle, handleReadMore, id, extra }) => {
    return (
        <article className="article" id={id}>
            <img src={require(`../assets/${id}.png`)} alt={title} className='article-image'/>
            <h2 className="article-title">{title}</h2>
            <p className="article-description">{description}</p>
            <a href="#" className="article-link" onClick={() => handleReadMore(id)}>Lees meer</a>
            {expandedArticle === id && (
                <div className="expanded-content">
                    <p>{extra}</p>
                </div>
            )}
        </article>
    );
};

export default Portfolio;
