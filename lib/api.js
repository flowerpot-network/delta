import request from 'superagent'

export const get = async key => {
  const res = await request
    .post(
      'https://cors-anywhere.herokuapp.com/https://us-central1-tokentax-infra-209601.cloudfunctions.net/get'
    )
    .send({
      key
    })

  return res.text
}

export const set = async (key, value) => {
  console.log(key, value)
  const res = await request
    .post(
      'https://cors-anywhere.herokuapp.com/https://us-central1-tokentax-infra-209601.cloudfunctions.net/set'
    )
    .send({
      key,
      value
    })

  return true
}
