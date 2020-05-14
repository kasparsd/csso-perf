# csso Performance

Measure the time required to minify a 198KB CSS file using [csso](https://github.com/css/csso):

    node minify.js 100

where `100` is the number of times to run the minifier.

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

## Minify and Compression

Most HTTP responses are compressed before transfer using GZIP. Notice how the extra 4% reduction in the minified file size (generated in 108ms) over the dummified version (generated in 6ms) practically doesn't impact the compressed file size: 

|           | Size         | Compressed  | Time  |
|-----------|--------------|-------------|-------|
| Original  | 198KB        | 26KB (-87%) |       |
| Minified  | 158KB (-20%) | 24KB (-88%) | 109ms |
| Dummified | 166KB (-16%) | 24KB (-88%) | 6ms   |


## Credits

Created by [Kaspars Dambis](https://kaspars.net).
