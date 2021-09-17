// @ts-ignore
import local from '../../env/local.yaml'
// @ts-ignore
import test from '../../env/test.yaml'

type Environment = {
  hi: string
}

const profiles = {
  local,
  test,
}

export default profiles['process.env.NODE_ENV'] as Environment
