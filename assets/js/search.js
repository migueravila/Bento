const search = CONFIG.searchEngine;

const searchForm = document.searchForm

switch (search) {
    case 'Bing':
        searchForm.action = 'https://www.bing.com/search'
        break;
    case 'Brave':
        searchForm.action = 'https://search.brave.com/search'
        break;
        case 'DuckDuckGo':
            searchForm.action = 'https://duckduckgo.com/'
            break;
    default:
    case 'Google':
        searchForm.action = 'https://google.com/search'
        break;
}
document.getElementById('searchField').placeholder = 'Search with ' + search + '...'