/**
 * Loads news via a request to the API
 * @requires module:clientAPI
 */
get(window.location.origin + '/api/news', function(response) {
    var news = JSON.parse(response),
        newsElement = document.getElementsByClassName('news')[0],
        loadingElement = document.getElementById('loading');
    /**
     * Construct and fill a div element from a news article model instance
     * @param {object} article - news article to create element for
     * @returns {object} DOMElement - filled out DOMElement structure for news article
     */
    function makeArticle(article) {
        var articleDiv = document.createElement('div'),
            dateDiv = document.createElement('div'),
            dateIcon = document.createElement('i'),
            dateText = document.createTextNode(article.date),
            titleDiv = document.createElement('div'),
            titleText = document.createTextNode(article.title),
            descDiv = document.createElement('div'),
            descContainer = document.createElement('div'),
            linkDiv = document.createElement('div'),
            linkA = document.createElement('a'),
            linkText = document.createTextNode('Read More'),
            linkIcon = document.createElement('i');

        linkIcon.className = 'icon-link-ext';
        linkDiv.className = 'link';
        descContainer.className = 'description-container';
        descDiv.className = 'description';
        titleDiv.className = 'title';
        dateDiv.className = 'date';
        dateIcon.className = 'icon-clock';
        articleDiv.className = 'article';

        linkA.href = article.link;
        linkA.appendChild(linkText);
        linkA.appendChild(linkIcon);
        linkDiv.appendChild(linkA);

        descContainer.innerHTML = article.description;
        descDiv.appendChild(descContainer);

        titleDiv.appendChild(titleText);

        dateDiv.appendChild(dateIcon);
        dateDiv.appendChild(dateText);

        articleDiv.appendChild(dateDiv);
        articleDiv.appendChild(titleDiv);
        articleDiv.appendChild(descDiv);
        articleDiv.appendChild(linkDiv);
        
        return articleDiv;   
    }
    /**
     * Construct an error element
     * @param {string} error - error text to display
     * @returns {object} DOMElement - filled out DOMElement structure for error
     */
    function makeError(error) {
        var errorDiv = document.createElement('div'),
            errorIcon = document.createElement('i'),
            errorText = document.createTextNode('An error occured!');

        errorDiv.className = 'error';
        errorIcon.className = 'icon-warning';

        errorDiv.appendChild(errorIcon);
        errorDiv.appendChild(errorText);

        return errorDiv;
    }
    if(!news.hasOwnProperty('error')) {
        for(var i = 0; i < news.length; i++) {
            var article = news[i];
            if((typeof(loadingElement) !== 'undefined') && (i == 0)) {
                newsElement.removeChild(loadingElement);
            }
            newsElement.appendChild(makeArticle(article));
        }
    } else {
        newsElement.removeChild(loadingElement);
        newsElement.appendChild(makeError(response.err));
    }
});
/**
 * API request to get newsWatcher process information, and display it on the page
 */
get(window.location.origin + '/api/process?name=newsWatcher', function(response) {
    var process = JSON.parse(response);
    if(!process.hasOwnProperty('error')) {
        document.getElementById('newsLastUpdated').innerHTML = moment(process.lastRun).fromNow();
    } else {
        // process query failed
    }
});
