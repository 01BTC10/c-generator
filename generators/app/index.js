'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the glorious ' + chalk.red('C') + ' generator!'
    ));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('Main.c'),
        this.destinationPath('Main.c')
      );

    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('makefile'),
        this.destinationPath('makefile')
      );
      this.fs.copy(
        this.templatePath('watch.sh'),
        this.destinationPath('watch.sh')
      );
      this.fs.copy(
        this.templatePath('bin/a'),
        this.destinationPath('bin/program.js')
      );
    }
  },

  install: function () {
  }
});
