import Box from '3box'
let box
export default async (address, ethProvider) => {
  if (box) {
    return {
      box
    }
  }

  box = await Box.openBox(address, ethProvider)
  await box.syncDone

  // const space = await box.openSpace('delta')
  // console.log({ space })
  // await space.syncDone

  return {
    box
  }
}

export const privateGet = async (box, key) => {
  return box.private.get(key)
}

export const privateSet = async (box, key, value) => {
  return box.private.set(key, value)
}

export const publicGet = async (box, key) => {
  return box.public.get(key)
}

export const publicSet = async (box, key, value) => {
  return box.public.set(key, value)
}
