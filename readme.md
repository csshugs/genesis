#Getting started

After cloning this project, you have to execute the following command:

- `npm install`

Then grunt is set up for the project and you can run just `grunt init` to execute the default grunt-task which opens the project on a local server, watches its files for changes and reloads the server in case there were changes detected.

The entire development-code is stored in the **app** folder. When grunt detects changes of this code, it is copied into the **dist** folder. This is where the compiled html/css/js lies, which is used for displaying the site in the browser. This code shall not be touched.

###Tasks

There are four different grunt tasks available:
- `grunt init` for the development. It watches your files for changes and reloads the site automatically.
- `grunt` does exactly the same as above but doesn't open a new broser tab, so that when you have the site open already, executing another task and then want to continue developing, you just can go on without closing a redundant browser tab.
- `grunt deploy` compiles compressed css, throws the needless scss files out of the dist folder and concatenates all js files into one.
- `grunt shot` creates a **test** folder in which it throws some screenshots of the site in diffenrent viewport sizes. These can be adjusted in the Gruntfile.

###Troubleshooting

In case you get a sourcemap-error, try installing the Sass pre-release version with `gem install sass -v 3.3.0.alpha.2 --pre`.

Alternatively you can just delete this line out of the Gruntfile.js in the sass section:
`sourcemap: true`