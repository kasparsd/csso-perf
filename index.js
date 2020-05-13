const csso = require('csso')
const fs = require('fs')
const path = require('path')

const runTimes = process.argv[2] || 100
const sourceCss = fs.readFileSync(path.join(__dirname, 'original.css'), 'utf8')
const timeStart = Date.now()

console.log(`Minifiying ${sourceCss.length} bytes of CSS ${runTimes} times.`)

for (let step = 0; step < runTimes; step++) {
  var minifiedCss = csso.minify(sourceCss).css
}

const timeUsed = Date.now() - timeStart

console.log(`Minified ${sourceCss.length} bytes of CSS ${runTimes} times to ${minifiedCss.length} bytes (-${Math.round((1 - minifiedCss.length/sourceCss.length)*100)}%) in ${timeUsed}ms or ${timeUsed/runTimes}ms per run.`)
