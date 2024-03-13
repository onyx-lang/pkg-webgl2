# WebGL 2 Bindings

This package provides simple WebGL 2 bindings to be used from an Onyx program.

## Using this package

This package should be install through the Onyx package manager, simply by running the following.

```sh
$ onyx package add webgl2
$ onyx package sync
```

From there, you can use the `webgl2` package in your code.

This short README is not going to cover the details of WebGL 2, but if you would like to see an example,
you can simply run the following commands from within a cloned version of this package.

```sh
$ onyx package build example
$ cd example
$ python -m http.server
```

This code uses Python to host a local web server, but any static web server will do. Simply run it from within the `example/` directory.
