###[Documentation](http://csshugs.github.io/genesis/)

#Getting started

###Installation

Cd into your projects folder and run:

- `npm install`
- `bower install`

Then genesis is set up for your project and you can start running `grunt init` to execute the default grunt-task which starts a local server, opens your site in the browser, watches its files for changes and reloads the page in case there were changes detected.

The entire development-code is stored in the **src** directory. When grunt detects changes of this code, it is copied into the **dist** directory where the compiled html/css/js lies, which is used for displaying the site in the browser. This code shall not be touched.

###Tasks

There are three different grunt tasks available:
- `grunt init` for the development. It watches your files for changes and reloads the site automatically.
- `grunt` does exactly the same as above but doesn't open a new broser tab.
- `grunt deploy` compiles compressed css, concatenates all js files into one and throws it into the **build** folder.

###Prerequisities

- Since we are using [sass-globbing](https://github.com/chriseppstein/sass-globbing), you'll need to install it.
- For letting grunt-notify work properly, you'll have to install a notification tool of your choice. [Read this](https://github.com/dylang/grunt-notify) for more information.
- For `grunt sprite` you must have [PhantomJS](http://phantomjs.org/) installed.

###Troubleshooting

####fatal error: spawn ENOENT

make sure, you have **phantomJS** installed, and that you installed the grunt-spritesmith plugin via `npm install grunt-spritesmith --save-dev`.
