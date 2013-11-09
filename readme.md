#Getting started

After cloning this project, you have to execute the following command:

- `npm install`

Then grunt is set up for the project and you can run just `grunt init` to execute the default grunt-task which opens the project on a local server, watches its files for changes and reloads the server in case there were changes detected.

The entire development-code is stored in the **app** folder. When grunt detects changes of this code, it is copied into the **dist** folder. This is where the compiled html/css/js lies, which is used for displaying the site in the browser. This code shall not be touched.

###Tasks

There are four different grunt tasks available:
- `grunt init` for the development. It watches your files for changes and reloads the site automatically.