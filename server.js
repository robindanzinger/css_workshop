const express = require('express')
const app = express()
const reloadserver = require('./reloadserver.js')
const port = 3000
const fs = require('fs')

app.use(express.static('src'))
app.use(express.static('dist'))

app.get("/image/:name", function (req, res) {
  const img = fs.readFileSync(`./src/image/${name}`, 'utf-8')
  res.send(img)
})

app.get("/page/", function (req, res) {
  const html = fs.readFileSync(`./src/Pages/index.html`, 'utf-8')
  res.send(renderPage(html))
})
app.get("/page/:filename", function (req, res) {
  const file = req.params.filename 
  const html = fs.readFileSync(`./src/Pages/${file}`, 'utf-8')
  res.send(renderPage(html))
})
app.get("/exercises/:name", function (req, res) {
  const name = req.params.name
  const html = fs.readFileSync(`./exercises/html/${name}.html`, 'utf-8')
  res.send(renderExercise(html, name))
})
app.get("/excss/:filename", function (req, res) {
  const cssfile = req.params.filename
  const css = fs.readFileSync(`./exercises/css/${cssfile}`, 'utf-8')
  res.setHeader('content-type', 'text/css')
  res.send(css)
})
function renderPage(html) {
  const prehtml = fs.readFileSync(`./pre.html`, 'utf-8')
  const posthtml = fs.readFileSync(`./post.html`, 'utf-8')
  return `${prehtml}
          ${html}
          <script src="/reloadpage.js"></script>
          ${posthtml}`
}
function renderExercise(html, name) {
  const prehtml = fs.readFileSync(`./pre.html`, 'utf-8')
  const posthtml = fs.readFileSync(`./post.html`, 'utf-8')
  return `${prehtml}
          <script src="/reloadpage.js"></script>
          <script>
           const link = document.createElement('link')
           link.rel = 'stylesheet'
           link.type = 'text/css'
           link.href = '/excss/${name}.css'
           document.head.appendChild(link)
          </script>
          ${html}
          ${posthtml}`
}
reloadserver.init()
app.listen(port, () => console.log(`Listening to port ${port}`))
