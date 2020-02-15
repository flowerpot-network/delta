require("dotenv").config();

exports.default = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  }
};
