const updateFiles = () => {
  const names =
    preval`module.exports = require("fs").readdirSync("./pages/updates")` || []
  return Promise.resolve(names)
}

const getUpdates = async () => {
  const names = await updateFiles()
  const updates = names.reduce((collection, name) => {
    collection.push({
      meta: require(`../pages/updates/${name}`).meta,
      id: name.replace(/\.[^/.]+$/, '')
    })

    return collection
  }, [])

  return updates
}

export { getUpdates }
