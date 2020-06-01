import { isObject } from './typeOf'
export default {
  set(key, val) {
    if (isObject(val)) {
      val = JSON.stringify(val)
    }
    localStorage.setItem(key, val)
  },
  get(key) {
    let val = localStorage.getItem(key)
    return val = isObject(val) ? JSON.parse(val) : val
  },
  remove(key) {
    localStorage.removeItem(key)
  } 
}