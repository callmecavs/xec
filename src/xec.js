const xec = () => {
  // cache for loaded script sources
  // object lookup is faster than array.includes or array.indexOf
  const loaded = {}

  // load and execute one source
  const one = source => new Promise((resolve, reject) => {
    // if previously loaded, resolve and exit early
    if (loaded[source]) {
      return resolve()
    }

    // cache it
    loaded[source] = true

    // create the script tag
    const tag = document.createElement('script')

    // add error and load event listeners
    tag.onerror = reject
    tag.onload = resolve

    // set async to true
    tag.async = true

    // set the source
    tag.src = source

    // append the script tag to the DOM
    document.body.appendChild(tag)
  })

  // load and execute multiple sources
  const many = sources => Promise.all(sources.map(source => one(source)))

  return {
    one,
    many
  }
}

// epxort a singleton

const singleton = xec()

export default singleton
