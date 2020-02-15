import Box from '3box'

export default async (address, ethProvider) => {
  const box = await Box.openBox(address, ethProvider)
  await box.syncDone

  const space = await box.openSpace('delta')
  await space.syncDone

  return {
    box,
    space
  }
}

export const privateGet = async (space, key) => {
  return space.private.get(key)
}

export const privateSet = async (space, key, value) => {
  return space.private.set(key, value)
}
