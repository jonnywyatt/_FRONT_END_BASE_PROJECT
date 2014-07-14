requirejs.config({
  baseUrl: './',
  paths: {
    jquery: 'bower_components/jquery/dist/jquery',
    DropdownPanel: 'assets/javascripts/modules/DropdownPanel'
  }
});

requirejs(['DropdownPanel'], function(Mod) {
  'use strict';
  var mod = new Mod();
});