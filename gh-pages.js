const ghpages = require('gh-pages')

const token = process.env.GIT_TOKEN
if (!token) {
  throw new Error('required "GIT_TOKEN" value')
}

ghpages.clean()
ghpages.publish(
  'public',
  {
    repo: `https://iinow:${token}@github.com/iinow/iinow.github.io.git`,
    branch: 'gh-pages',
  },
  (err) => {
    console.log(err)
    return err
  }
)
