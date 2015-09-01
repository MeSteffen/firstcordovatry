angular.module('starter.services', [])

.factory('NewsData', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var news = [{
    id: 0,
    date: '20.07.15',
    headline: 'METAL  2015',
    text: '11. - 16. August 2015',
    thumbnail: 'csm_Logo_WSC2015_dcdf0c4883.jpg',
    picture: 'csm_Logo_WSC2015_f5c7917.jpg',
    paragraphs: [
        'Als ',
        'Der ',
        'Wir'
    ],
    linktext: 'Link: ',
    link: 'https://www.worldskills.org/'
  }];

  return {
    all: function() {
      return news;
    },
    remove: function(item) {
      news.splice(news.indexOf(item), 1);
    },
    get: function(newsId) {
      for (var i = 0; i < news.length; i++) {
        if (news[i].id === parseInt(newsId)) {
          return news[i];
        }
      }
      return null;
    }
  };
});
