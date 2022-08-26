const fs = require('fs')
const path = require('path')
const showdown = require('showdown')

const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8')
generate('index.txt', 'index.html', 'Church of Singulatarianism')
generate(
  'new-unified-text.txt',
  'new-unified-text.html',
  'New Unified Text - Church of Singulatarianism'
)

function generate(src, dst, title) {
  const nutRaw = fs.readFileSync(path.join(__dirname, src), 'utf8')
  const converter = new showdown.Converter()
  const nutHtml = converter.makeHtml(nutRaw)
  writePage(dst, title, nutHtml)
}

function writePage(name, title, content) {
  fs.writeFileSync(
    path.join(__dirname, 'singulatary.church', name),
    template.replace('$TITLE', title).replace('$CONTENT', content)
  )
}
