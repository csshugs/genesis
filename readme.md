##Getting started

###Installation

Cd into your projects folder and run:

```
$ npm install
```

```
$ bower install
```

```
$ sh init
```

Then genesis is set up for your project and you can run:
```
$ grunt dev
```

and go to: [localhost:8000](http://localhost:8000/).

The entire development code is stored in the `/src` directory. When grunt detects changes of this code, it is copied into the `/dist` directory where the compiled html/css/js lies, which is used for displaying the site in the browser. This code shall not be touched.
