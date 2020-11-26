const axios = require("axios")

async function getDefinition(word) {
  const le = "en"
  const res = await axios({
    url: "https://dict.youdao.com/jsonapi",
    method: "post",
    params: {
      le: le,
      q: word,
      keyfrom: "dataserver",
      doctype: "json",
      jsonversion: "2",
    },
  })
  let definition = res.data
  // 基本释义
  let s = definition
    ? definition.ec ||
      definition.ce ||
      definition.fc ||
      definition.cf ||
      definition.jc ||
      definition.cj ||
      definition.kc ||
      definition.ck ||
      definition.multle
    : ""
  if (s && s === definition.ce) {
    // 汉英翻译
  }
  // 日汉翻译
  if (s && s === definition.jc) {
    this.handleJCData(s)
  }
  // 发音
  const speech = definition.simple ? definition.simple.word[0] : ""
  definition = {
    ...definition,
    base: s !== definition.jc ? s.word[0].trs : [],
    baseJc: s && s == definition.jc ? s.word[0].trs[0].basejc : [],
    fanyi: definition.fanyi ? definition.fanyi : [],
    speech,
  }
  // 基本的界面显示
  const baseString =
    definition.base && definition.base.length > 0
      ? definition.base[0].tr[0].l.i[0]
      : definition.fanyi
      ? definition.fanyi.tran
      : ""
  definition.baseString = baseString
  const { base } = definition
  // 带有超链接的显示
  definition.hyperExplain =
    base &&
    base.length > 0 &&
    base[0].tr &&
    base[0].tr.length > 0 &&
    base[0].tr[0].l.i.find((ff) => {
      return ff["@action"] === "link"
    })
      ? true
      : false
  definition.baseHyperExplain = definition.hyperExplain
    ? this.getBaseHyperExplain(base)
    : []
  // 处理 base 层数过深
  definition.base = definition.base.map((v) => v.tr[0].l.i[0])

  return definition
}

exports.youdao = {
  getDefinition: getDefinition,
}
