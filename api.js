const youdao = require('./youdao')

function addItem(arr, title, subTitle) {
  arr.push({
    title: title,
    subtitle: subTitle
  })
}
async function searchYoudao (word) {
  const res = await youdao.youdao.getDefinition(word)
  let result = []
  addItem(result, `英[${res.speech.usphone}] 美[${res.speech.ukphone}]`, '音标')
  for (let explanation of res.base) {
    addItem(result, explanation, '')
  }
  return result
}

module.exports = {
  searchYoudao
}