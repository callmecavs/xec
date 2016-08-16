const one = source => new Promise((resolve, reject) => {
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

const many = sources => Promise.all(sources.map(source => one(source)))

export default {
  one,
  many
}
