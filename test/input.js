'use strict';

// Let/const
var name = 'Bob', time = 'yesterday';
time = 'today';

// Template string
console.log('Hello ' + name + ', how are you ' + time + '?');

var bob = {
  // Object shorthand
  name: name,
  // Object method
  sayMyName: function () {
    console.log(this.name);
  }
};

// Classes
var SkinnedMesh = function SkinnedMesh() {
};

SkinnedMesh.prototype.update = function (camera) {
  camera = camera || createCamera();
  this.camera = camera;
};

Object.defineProperty(SkinnedMesh.prototype, 'name', {
  set: function (geometry) {
    this.geometry = geometry;
  },
  get: function () {
    return this.geometry;
  }
});

// Commonjs
var lebab = require('lebab');
module.exports = SkinnedMesh;

// Arrow functions
var render = function () {
  // ...
  requestAnimationFrame(render);
};
