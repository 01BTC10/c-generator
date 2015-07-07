# c-generator
> Simple [Yeoman](http://yeoman.io) generator for C boilerplate with livereload style build scripts.

## Dependencies
* [Node.js](https://nodejs.org/)
* [nodemon](http://nodemon.io/)
* [emcc](https://github.com/kripken/emscripten) if you want to target js

## Getting Started
Not in npm, you will have to clone and npm link to use it.

```bash
npm install -g yo

git clone [this repo]

cd [newly created folder]

npm link
```
Once that is done you can use it
```bash
yo c-generator
```

Native build with "livereload"
```bash
make watch
```
emcc build to js with "livereload"
```bash
make watchjs
```

## License

MIT
