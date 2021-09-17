// @ts-ignore
import local from '../../env/local.yaml'
// @ts-ignore
import pages from '../../env/pages.yaml'
// @ts-ignore
import test from '../../env/test.yaml'

type Environment = {
  hi: string
  baseUrl: string
}

const profiles = {
  local,
  test,
  pages,
}

export default profiles['process.env.NODE_ENV'] as Environment
