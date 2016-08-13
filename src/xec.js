const xecute = source => new Promise((resolve, reject) => {
  // create the script tag
  const tag = document.createElement('script')

  // remove event listeners, resolve or reject the Promise
  const done = func => {
    tag.onerror = null
    tag.onload = null
    func()
  }

  // add error and load event listeners
  tag.onerror = done(reject)
  tag.onload = done(resolve)

  // set async to true
  tag.async = true

  // set the source
  tag.src = source

  // append the script tag to the DOM
  document.body.appendChild(tag)
})

export default xecute
