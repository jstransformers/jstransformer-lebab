// Let/const
var name = 'Bob', time = 'yesterday';
time = 'today';

// Template string
console.log('Hello ' + name + ', how are you ' + time + '?');

var bob = {
  // Object shorthand
  name,
  // Object method
  sayMyName() {
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
  set(geometry) {
    this.geometry = geometry;
  },
  get() {
    return this.geometry;
  }
});

// Commonjs
import lebab from 'lebab';

export default SkinnedMesh;

// Arrow functions
var render = () => {
  // ...
  requestAnimationFrame(render);
};
