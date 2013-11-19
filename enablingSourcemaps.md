#Enabling sourcemaps in Chrome Canary

- Enable the developers experiments by typing `chrome://flags/#enable-devtools-experiments` into the addressbar
- Go to the Sources section in the General settings in the DevTools settings and enable 'CSS source maps' and 'Auto-reload generated CSS'
- Add the Project-Folder (in this case 'genesis') as a Workspace
- Go to the Sources tab in the DevTools and choose the css file which the Browser takes for displaying the styles (find it at 'localhost:8000/dist/assets/css/style.css'). Rightclick it and map it to file system resource. Choose the css file of your Project-Folder (in this case 'genesis/app/assets/css/style.css'), **NOT** the one, which is copied in the dist-Folder.
- Voilá

###Prerequisities

- [Chrome Canary] (https://www.google.com/intl/de/chrome/browser/canary.html)
- Just works with the Sass pre-release version. Install it with `gem install sass -v 3.3.0.alpha.256 --pre`