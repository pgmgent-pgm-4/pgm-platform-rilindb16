import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-left">
            <nav className="footer-nav">
            <NavLink to="/" className="footer-link" activeClassName="active-link" exact>
                Home
            </NavLink>
            <NavLink to="/opleiding" className="footer-link" activeClassName="active-link">
                Opleiding
            </NavLink>
            <NavLink to="/programma" className="footer-link" activeClassName="active-link">
                Programma
            </NavLink>
            <NavLink to="/portfolio" className="footer-link" activeClassName="active-link">
                Portfolio
            </NavLink>
            <NavLink to="/blog" className="footer-link" activeClassName="active-link">
                Blog
            </NavLink>
            <NavLink to="/services" className="footer-link" activeClassName="active-link">
                Services
            </NavLink>
            <NavLink to="/team" className="footer-link" activeClassName="active-link">
                Team
            </NavLink>
            <NavLink to="/search" className="footer-link" activeClassName="active-link">
                Search
            </NavLink>
            </nav>
        </div>
        <div className="footer-center">
            <p>Arteveldehogeschool Gent - 2024</p>
            <p>Cookiebeleid</p>
            <p>Verander je cookievoorkeuren</p>
            <p>Disclaimer</p>
            <p>Toegankelijkheid</p>
        </div>
        <div className="footer-right">
            <div class="site-logo">
            <a href='./'>
            <svg xmlns="http://www.w3.org/2000/svg" width="197" height="50"><g fill="none" fill-rule="evenodd"><path fill="#5AB031" d="M27.239 26.909h6.822v-6.823h-6.822zM27.239 13.297h6.822V6.473h-6.822z"/><path fill="#EF7D00" d="M13.611 20.101h-3.403a3.403 3.403 0 1 1 3.403-3.403v3.403ZM10.208 6.487C4.571 6.487 0 11.058 0 16.698c0 5.64 4.57 10.211 10.208 10.211h10.209V16.7c0-5.64-4.57-10.212-10.209-10.212Z"/><path fill="#009AD4" d="M51.333 21.965c-.834.415-1.805.764-2.848.764-1.461 0-2.19-.278-2.19-1.738v-.311c0-1.704.626-2.539 3.058-2.539h1.98v3.824ZM48.728 6.466c-2.292 0-4.725.415-6.013.728-.416.104-.66.385-.66.767v2.812c0 .453.278.628.627.628h.174c1.076-.104 3.543-.243 5.768-.243 1.634 0 2.605.416 2.605 2.397v1.25h-1.876c-5.942 0-8.55 1.808-8.55 5.875v.311c0 4.52 2.92 5.98 5.944 5.98 2.084 0 3.475-.592 4.832-1.566v.556c0 .382.311.695.695.695h3.891c.381 0 .695-.313.695-.695V13.555c0-5.074-3.127-7.089-8.132-7.089ZM61.772 26.656h4.206c.381 0 .694-.348.694-.73V12.338c1.286-.696 2.78-1.216 4.482-1.216h.28c.312 0 .52-.35.52-.66V7.159a.696.696 0 0 0-.696-.693c-1.668 0-3.405.589-4.692 1.667v-.696a.694.694 0 0 0-.694-.693h-4.135a.696.696 0 0 0-.696.693v18.489c0 .382.348.73.73.73M77.036 21.025c0 4.935 2.014 5.946 5.836 5.946 1.011 0 1.706-.105 2.747-.28.416-.068.659-.349.659-.693v-2.711c0-.382-.275-.592-.727-.592h-1.705c-1.043 0-1.147-.243-1.147-1.633V10.949h2.852c.38 0 .695-.314.695-.696V7.437a.696.696 0 0 0-.695-.694H82.7V3.06c0-.348-.277-.592-.624-.592h-.104l-4.24.73c-.382.07-.695.315-.695.697v2.848h-2.78a.759.759 0 0 0-.73.731v2.292c0 .382.348.662.73.73l2.78.453v10.076ZM94.488 14.84c0-2.536 1.286-3.857 3.197-3.857 1.947 0 3.13 1.287 3.13 3.857v.142h-6.327v-.142Zm3.161 12.13c3.025 0 4.903-.28 7.125-.834.592-.14.732-.382.732-.94v-2.64c0-.381-.28-.558-.661-.558h-.104c-1.39.14-4.485.314-6.672.314-2.746 0-3.58-1.807-3.58-3.789v-.068h11.085c.453 0 .73-.314.73-.835v-2.013c0-5.25-2.884-9.14-8.583-9.14-5.526 0-8.793 3.542-8.793 9.14v2.43c0 6.71 4.517 8.933 8.721 8.933ZM117.332 26.97c4.069 0 4.17-.557 5.04-3.65l4.378-15.779c.034-.068.034-.139.034-.207 0-.347-.279-.59-.59-.59h-4.589c-.347 0-.625.311-.728.73l-2.991 13.621c-.103.521-.311.73-.554.73-.245 0-.417-.209-.521-.73l-2.99-13.622c-.105-.418-.383-.73-.73-.73h-4.587c-.313 0-.557.244-.557.591 0 .068 0 .14.036.207l4.343 15.78c.868 3.092 1.097 3.65 5.006 3.65M133.955 14.84c0-2.536 1.286-3.857 3.197-3.857 1.946 0 3.13 1.287 3.13 3.857v.142h-6.327v-.142Zm3.16 12.13c3.024 0 4.904-.28 7.126-.834.591-.14.732-.382.732-.94v-2.64c0-.381-.28-.558-.661-.558h-.105c-1.39.14-4.484.314-6.673.314-2.745 0-3.58-1.807-3.58-3.789v-.068h11.087c.453 0 .73-.314.73-.835v-2.013c0-5.25-2.884-9.14-8.584-9.14-5.525 0-8.793 3.542-8.793 9.14v2.43c0 6.71 4.518 8.933 8.722 8.933ZM154.4 0h-4.239c-.383 0-.73.314-.73.696v25.23c0 .382.347.73.73.73h4.24c.381 0 .662-.348.662-.73V.697c0-.382-.28-.696-.663-.696M164.24 15.363c0-2.434.625-4.241 3.095-4.241.832 0 2.015.07 2.848.175v10.84c-.66.104-1.702.21-2.848.21-2.47 0-3.095-1.809-3.095-4.274v-2.71Zm3.095 11.607c2.673 0 5.42-.419 7.403-.905.936-.207 1.075-.45 1.075-1.007V.697c0-.382-.349-.696-.73-.696h-4.205a.698.698 0 0 0-.695.696v6.012c-1.006-.141-2.154-.243-2.848-.243-5.875 0-8.724 3.438-8.724 8.897v2.71c0 5.63 3.093 8.897 8.724 8.897ZM191.36 14.982h-6.327v-.142c0-2.536 1.287-3.857 3.198-3.857 1.946 0 3.13 1.288 3.13 3.857v.142Zm-3.094-8.516c-5.525 0-8.793 3.543-8.793 9.14v2.431c0 6.71 4.517 8.934 8.724 8.934 3.022 0 4.9-.281 7.125-.835.588-.14.73-.382.73-.94v-2.64c0-.381-.28-.558-.662-.558h-.103c-1.39.14-4.482.314-6.674.314-2.744 0-3.58-1.807-3.58-3.789v-.068h11.089c.45 0 .729-.314.729-.834v-2.014c0-5.25-2.885-9.14-8.585-9.14ZM117.66 37.252c-.724 0-1.766.167-2.574.522v-3.201c0-.186-.133-.336-.318-.336h-.842c-.184 0-.318.15-.318.336V46.28c0 .184.149.336.318.336h.824a.348.348 0 0 0 .336-.336v-7.263c.742-.336 1.8-.47 2.32-.47 1.093 0 1.8.52 1.8 2.202v5.53c0 .185.15.337.336.337h.808a.338.338 0 0 0 .336-.336v-5.53c0-2.473-1.246-3.498-3.026-3.498M128.738 42.631c0 1.732-.705 2.809-2.27 2.809-1.578 0-2.253-1.095-2.253-2.809v-1.278c0-1.731.69-2.806 2.254-2.806 1.58 0 2.27 1.091 2.27 2.806v1.278Zm-2.27-5.379c-2.47 0-3.731 1.63-3.731 4.101v1.278c0 2.472 1.261 4.102 3.732 4.102 2.47 0 3.749-1.63 3.749-4.102v-1.278c0-2.47-1.278-4.1-3.75-4.1ZM138.12 40.369c0 .974-.455 1.654-2.27 1.654-1.933 0-2.272-.94-2.272-1.654v-.13c0-.908.39-1.734 2.271-1.734 1.816 0 2.271.761 2.271 1.735v.129Zm-3.817 4.783 1.9.471c1.514.372 2.05.632 2.05 1.264v.13c0 .892-.437 1.41-2.354 1.41-1.864 0-2.42-.566-2.42-1.475v-.146c0-.843.336-1.248.824-1.654Zm5.228-7.782h-3.682c-2.893 0-3.73 1.427-3.73 2.87v.129c0 .828.251 1.411.77 1.882-.469.26-.688.729-.688 1.166v.016c0 .504.236 1.039.773 1.266l.12.05c-.557.403-1.063 1.15-1.063 2.057v.146c0 1.59 1.211 2.578 3.868 2.578 2.759 0 3.834-.957 3.834-2.513v-.13c0-1.524-1.58-1.976-3.227-2.383L134 43.888c-.386-.097-.52-.244-.52-.518 0-.244.134-.422.42-.552.488.194 1.06.325 1.95.325 2.59 0 3.732-.99 3.732-2.774v-.13c0-.876-.27-1.362-.57-1.67l.604-.114c.186-.032.304-.097.304-.307v-.422c0-.195-.186-.356-.388-.356ZM147.366 41.337h-4.455v-.15c0-1.817.807-2.64 2.252-2.64 1.48 0 2.203.738 2.203 2.64v.15Zm-2.203-4.085c-2.404 0-3.731 1.53-3.731 3.935v1.51c0 3.128 1.883 4.035 3.815 4.035 1.126 0 2.05-.1 3.01-.284.269-.052.336-.168.336-.386v-.573c0-.168-.136-.234-.27-.234h-.083c-.775.116-2.018.184-2.993.184-1.547 0-2.336-.74-2.336-2.741v-.234h5.632c.2 0 .318-.152.318-.372v-.905c0-2.388-1.243-3.935-3.698-3.935ZM156.797 44.296c0-.992-.453-1.714-1.85-2.539l-1.664-.991c-.774-.455-1.16-.774-1.16-1.277 0-.858.622-.978 1.564-.978.94 0 2.018.086 2.607.136h.05c.167 0 .283-.083.283-.286v-.555c0-.183-.1-.303-.32-.336a15.831 15.831 0 0 0-2.62-.217c-1.733 0-3.046.486-3.046 2.236 0 1.059.692 1.78 1.718 2.403l1.696 1.01c.96.57 1.263.889 1.263 1.394 0 .908-.574 1.195-1.666 1.195-.604 0-1.832-.087-2.637-.187h-.07c-.166 0-.304.1-.304.253v.588c0 .184.138.286.356.336.823.203 2.035.253 2.655.253 1.884 0 3.145-.724 3.145-2.438M164.563 46.18v-.606c0-.167-.133-.253-.286-.253h-.067c-.738.086-1.26.12-2.084.12-1.361 0-2.103-.909-2.103-2.792v-1.313c0-1.897.758-2.788 2.103-2.788.823 0 1.346.033 2.084.116h.067c.153 0 .286-.083.286-.251v-.606c0-.235-.066-.32-.336-.37a12.306 12.306 0 0 0-2.101-.184c-2.303 0-3.58 1.614-3.58 4.083v1.313c0 2.472 1.294 4.086 3.58 4.086.79 0 1.546-.086 2.101-.186.27-.05.336-.153.336-.37M170.565 37.252c-.722 0-1.765.167-2.572.522v-3.201c0-.186-.135-.336-.32-.336h-.84c-.186 0-.32.15-.32.336V46.28c0 .184.15.336.32.336h.824a.349.349 0 0 0 .336-.336v-7.263c.739-.336 1.8-.47 2.32-.47 1.09 0 1.8.52 1.8 2.202v5.53c0 .185.15.337.335.337h.807a.337.337 0 0 0 .336-.336v-5.53c0-2.473-1.244-3.498-3.026-3.498M181.644 42.632c0 1.73-.706 2.807-2.268 2.807-1.581 0-2.253-1.093-2.253-2.807v-1.278c0-1.732.689-2.807 2.253-2.807 1.579 0 2.268 1.092 2.268 2.807v1.278Zm1.479-1.278c0-2.47-1.277-4.101-3.747-4.101-2.473 0-3.734 1.63-3.734 4.101v1.278c0 2.47 1.261 4.101 3.734 4.101 2.47 0 3.747-1.63 3.747-4.101v-1.278ZM190.872 42.632c0 1.73-.705 2.807-2.268 2.807-1.58 0-2.253-1.093-2.253-2.807v-1.278c0-1.732.69-2.807 2.253-2.807 1.58 0 2.268 1.092 2.268 2.807v1.278Zm1.48-1.278c0-2.47-1.277-4.101-3.748-4.101-2.472 0-3.732 1.63-3.732 4.101v1.278c0 2.47 1.26 4.101 3.732 4.101 2.47 0 3.749-1.63 3.749-4.101v-1.278ZM195.75 34.236h-.877c-.183 0-.303.15-.303.32v11.723c0 .186.138.336.303.336h.876c.187 0 .303-.166.303-.336V34.556c0-.187-.137-.32-.303-.32"/></g></svg>
            </a>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
