const api = require('./api')
async function search(query) {
  const res = await api.searchYoudao(query)
  return res
}

search('good')