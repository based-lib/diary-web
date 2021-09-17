const ghpages = require('gh-pages')

ghpages.clean()
ghpages.publish('public', {}, (err) => err)
