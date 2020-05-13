# csso Performance

Measure the time required to optimize a 61KB CSS file using [csso](https://github.com/css/csso):

    node minify.js 100

where `100` is the number of times to run the optimizer.

## Sample Report

Using `csso`:

    $ node minify.js
    Minifiying 61405 bytes of CSS 100 times.
    Minified 61405 bytes of CSS 100 times to 43728 bytes (-29%) in 3556ms or 35.56ms per run.

Using a simple string replace logic in `dummify.js`:

    $ node dummify.js
    Dummifying 61405 bytes of CSS 100 times.
    Dummified 61405 bytes of CSS 100 times to 46627 bytes (-24%) in 255ms or 2.55ms per run
