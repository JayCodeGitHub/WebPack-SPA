import renderHomePage from './pages/home';
import renderAboutPage from './pages/about';

const handleRouteChange = () => {
    const currentPath = window.location.pathname;

    switch (currentPath) {
        case '/':
            renderHomePage();
            break;
        case '/about':
            renderAboutPage();
            break;
        default:
            // 404
            break;
  }
};

document.addEventListener('click', function (e) {
    if (e.target instanceof HTMLAnchorElement) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        if (href) {
            window.history.pushState(null, '', href);
            handleRouteChange();
        }
    }
});


window.addEventListener('popstate', handleRouteChange);

handleRouteChange();