const fs = require('fs')
const path = require('path')

const runTimes = process.argv[2] || 100
const sourceCss = fs.readFileSync(path.join(__dirname, 'original.css'), 'utf8')
const timeStart = Date.now()

// Not verified to produce valid CSS!
const dummyOptimize = (css) => {
  return css
    .replace(/[\n\r\t]/gi, ' ') // Line breaks to spaces.
    .replace(/\s+/gi, ' ') // Multiple spaces to single spaces.
    .replace(/(\s+?)?([\(\):;}{>+])(\s+?)?/ig, '$2') // Remove spaces before and after :;{}()>+
}

console.log(`Dummifying ${sourceCss.length} bytes of CSS ${runTimes} times.`)

for (let step = 0; step < runTimes; step++) {
  var minifiedCss = dummyOptimize(sourceCss)
}

const timeUsed = Date.now() - timeStart

console.log(`Dummified ${sourceCss.length} bytes of CSS ${runTimes} times to ${minifiedCss.length} bytes (-${Math.round((1 - minifiedCss.length/sourceCss.length)*100)}%) in ${timeUsed}ms or ${timeUsed/runTimes}ms per run.`)

fs.writeFileSync(path.join(__dirname, 'original.dummify.css'), minifiedCss)