# csso Performance

Measure the time required to optimize a 61KB CSS file using [csso](https://github.com/css/csso):

    node minify.js 100

where `100` is the number of times to run the optimizer.

## Sample Report

Using `csso`:

    $ node minify.js
    Minifiying 198313 bytes of CSS 100 times.
    Minified 198313 bytes of CSS 100 times to 158457 bytes (-20%) in 10857ms or 108.57ms per run.

Using a simple string replace logic in `dummify.js`:

    $ node dummify.js
    node dummify.js    
    Dummifying 198313 bytes of CSS 100 times.
    Dummified 198313 bytes of CSS 100 times to 165976 bytes (-16%) in 587ms or 5.87ms per run.
