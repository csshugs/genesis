#Getting started

###Installation

After cloning this project, you have to execute the following commands:

- `npm install`
- `bower install`

Then grunt is set up for the project and you can run just `grunt init` to execute the default grunt-task which opens the project on a local server, watches its files for changes and reloads the server in case there were changes detected.

The entire development-code is stored in the **app** folder. When grunt detects changes of this code, it is copied into the **dist** folder. This is where the compiled html/css/js lies, which is used for displaying the site in the browser. This code shall not be touched.

###Tasks

There are four different grunt tasks available:
- `grunt init` for the development. It watches your files for changes and reloads the site automatically.
- `grunt` does exactly the same as above but doesn't open a new broser tab, so that when you have the site open already, executing another task and then want to continue developing, you just can go on without closing a redundant browser tab.
- `grunt deploy` compiles compressed css, concatenates all js files into one and throws it into the **build** folder.
- `grunt sprite` takes all png-files form **app/assets/img/css/sprites/src** and generates the "**s.png**" sprite one folder above. Also it compiles a "**_sprites.scss**" file, which goes into **app/assets/css/ui/base**. Then you can include the mixin **@include sprite($sprite)** to an element, where **$sprite** is the name of the src-png file you wish to add to the element. This task is included in `grunt` and `grunt init` as a watch task, so that your sprite gets generated on the fly.

###Prerequisities

- For `grunt sprite` you must have [PhantomJS] (http://phantomjs.org/) installed.

###Troubleshooting

####fatal error: spawn ENOENT

make sure, you have **phantomJS** installed, and that you installed the grunt-spritesmith plugin via `npm install grunt-spritesmith --save-dev`.