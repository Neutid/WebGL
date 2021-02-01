const mains_const = {
  scene : new THREE.Scene(),
  camera : new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000 ),
  loader : new THREE.TextureLoader(),
  renderer : new THREE.WebGLRenderer(),

}

export default mains_const
