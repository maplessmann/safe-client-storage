const isLocalStorageSupported = () => {
  try {
    const testKey = 'key'
    window.localStorage.setItem(testKey, testKey)
    window.localStorage.removeItem(testKey)

    return true
  } catch (e) {
    return false
  }
}

const safeStorage = (method) => (...args) => {
  if (isLocalStorageSupported()) {
    return window.localStorage[method](...args)
  }
}

export default {
  getItem: safeStorage('getItem'),
  setItem: safeStorage('setItem'),
  removeItem: safeStorage('removeItem'),
}
