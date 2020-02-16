require('dotenv').config()

exports.default = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    REDIS_URL: process.env.REDIS_URL,
    ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY
  }
}
