import ga from '../ga'

/**
 * Use Google Analytics require key
 * @param  {any} value
 */
export default function gaRequire (value) {
  ga('require', value)
}
