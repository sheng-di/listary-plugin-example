const api = require('./api')

async function search(query) {
  return await api.searchYoudao(query)
}
module.exports = {
  search: search,
}
