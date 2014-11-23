##Getting started

###Installation

Cd into your projects folder and run:

- `npm install`
- `bower install`
- `init`

Then genesis is set up for your project and you can start running `grunt` to execute the default grunt-task which starts a local server, watches its files for changes and reloads the page if there were changes detected.

The entire development code is stored in the **src** directory. When grunt detects changes of this code, it is copied into the **dist** directory where the compiled html/css/js lies, which is used for displaying the site in the browser. This code shall not be touched.

###Tasks

There are two grunt tasks available:
- `grunt` for development. It watches your files for changes and reloads the site automatically.
- `grunt deploy` compiles compressed css, autoprefixes appropriate css3 porperties, concatenates all js files together and throws it all into the **build** folder.

###Destination variables

At the top of the Gruntfile you'll find three variables indicating the destination paths for the compiled assets. The most important one is probably `cms`. Let's assume that you are on a WordPress project and your active theme is 'twentyfifteen'. Your cms variable will then look as follows: `'../wordpress/wp-content/themes/twentyfifteen'`.

###Prerequisities

- Since we are using [sass-globbing](https://github.com/chriseppstein/sass-globbing), you'll need to install it.
- For `grunt sprite` you must have [PhantomJS](http://phantomjs.org/) installed.

###Troubleshooting

####fatal error: spawn ENOENT

make sure, you have **phantomJS** installed, and that you installed the grunt-spritesmith plugin via `npm install grunt-spritesmith --save-dev`.
