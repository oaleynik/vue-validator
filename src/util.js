/**
 * Utilties
 */

// export default for holding the Vue reference
const exports = {}
export default exports


/**
 * warn
 *
 * @param {String} msg
 * @param {Error} [err]
 *
 */

export function warn (msg, err) {
  if (window.console) {
    console.warn('[vue-validator] ' + msg)
    if (err) {
      console.warn(err.stack)
    }
  }
}

/**
 * each
 *
 * @param {Array|Object} target
 * @param {Function} iterator
 * @param {Object} [context]
 */

export function each (target, iterator, context) {
  if (Array.isArray(target)) {
    for (let i = 0; i < target.length; i++) {
      iterator.call(context || target[i], target[i], i)
    }
  } else if (exports.Vue.util.isPlainObject(target)) {
    for (let key in target) {
      if (key in target) {
        iterator.call(context || target[key], target[key], key)
      }
    }
  }
}

/**
 * pull
 *
 * @param {Array} arr
 * @param {Object} item
 * @return {Object|null}
 */

export function pull (arr, item) {
  let index = exports.Vue.util.indexOf(arr, item)
  return ~index ? arr.splice(index, 1) : null
}

/**
 * attr
 *
 * @param {Element} el
 * @param {String} name
 * @return {String|null}
 */

export function attr (el, name) {
  return el ? el.getAttribute(name) : null
}

/**
 * trigger
 *
 * @param {Element} el
 * @param {String} event
 */

export function trigger (el, event) {
  let e = document.createEvent('HTMLEvents')
  e.initEvent(event, true, false)
  el.dispatchEvent(e)
}
