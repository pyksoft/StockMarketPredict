/**
 * @file Manages the news sources for the application
 * @author Matthew Elphick
 */
module.exports = [
	{
		name: 'The Guardian',
		feed: 'http://www.theguardian.com/world/rss',
		type: 'world',
		enabled: true
	}, {
		name: 'BBC',
		feed: 'http://feeds.bbci.co.uk/news/world/rss.xml',
		type: 'world',
		enabled: true
	}, {
		name: 'The Telegraph',
		feed: 'http://www.telegraph.co.uk/news/worldnews/rss',
		type: 'world',
		enabled: true
	}, {
		name: 'Financial Times',
		feed: 'http://www.ft.com/rss/world',
		type: 'world',
		enabled: false
	}, {
		name: 'Sky',
		feed: 'http://feeds.skynews.com/feeds/rss/world.xml',
		type: 'world',
		enabled: true
	}, {
		name: 'Yahoo',
		feed: 'https://uk.news.yahoo.com/rss/world',
		type: 'world',
		enabled: false
	}, {
		name: 'The Huffington Post',
		feed: 'http://www.huffingtonpost.co.uk/feeds/verticals/world/index.xml',
		type: 'world',
		enabled: false
	}, {
		name: 'Reddit World News',
		feed: 'http://www.reddit.com/r/worldnews/.rss',
		type: 'world',
		enabled: false
	}, {
		name: 'The New York Times',
		feed: 'http://rss.nytimes.com/services/xml/rss/nyt/World.xml',
		type: 'world',
		enabled: true
	}, {
		name: 'Reuters',
		feed: 'http://feeds.reuters.com/Reuters/worldNews?format=xml',
		type: 'world',
		enabled: true
	}, {
		name: 'The Independent',
		feed: 'http://rss.feedsportal.com/c/266/f/3503/index.rss',
		type: 'world',
		enabled: true
	}
];