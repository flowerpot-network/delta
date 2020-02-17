const nextRuntimeDotenv = require('next-runtime-dotenv')

const withConfig = nextRuntimeDotenv({
  // path: '.env',
  public: ['GITHUB_CLIENT_ID', 'REDIS_URL', 'ETHERSCAN_API_KEY'],
  server: ['GITHUB_CLIENT_SECRET']
})

module.exports = withConfig({})
