//---------------------------------------------------
//-------------------- Imports ----------------------
//---------------------------------------------------

  import * as THREE from '../../build/three.module.js';
  import Stats from '../../examples/jsm/libs/stats.module.js';
  import { FBXLoader } from "../../examples/jsm/loaders/FBXLoader.js";
  import { AudioListener } from "../../src/audio/AudioListener.js"
  import { disney as new_disney  } from "./castel_disney.js"
  import { medieval as new_medieval  } from "./castel_medieval.js"
  import mains_const from "./globales_const.js"


//---------------------------------------------------
//---------- Declarations / Initialisation ----------
//---------------------------------------------------

    const scene = mains_const.scene;
    const camera = mains_const.camera;
    const loader = mains_const.loader;
    const renderer = mains_const.renderer;

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    //fisrt personne control
    let keyboard = {};
    let player = { height:20, speed:1.5, turnSpeed:Math.PI*0.02 };

    //animations
    let mixer;
    const clock = new THREE.Clock();


    //Stats FPS
    let stats, container


//---------------------------------------------------
//------------------- Functions ---------------------
//---------------------------------------------------

      //--------- Init -----------
        function init(){
          new_disney();
          new_medieval();
        }

      //----------- Resize windows -------
        function onWindowResize() {

          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize( window.innerWidth, window.innerHeight );

        }


      //---------- Lights ----------
        function assignUVs(geometry) {
            geometry.faceVertexUvs[0] = [];
            geometry.faces.forEach(function(face) {
                let components = ['x', 'y', 'z'].sort(function(a, b) {
                    return Math.abs(face.normal[a]) > Math.abs(face.normal[b]);
                });
                let v1 = geometry.vertices[face.a];
                let v2 = geometry.vertices[face.b];
                let v3 = geometry.vertices[face.c];
                geometry.faceVertexUvs[0].push([
                    new THREE.Vector2(v1[components[0]], v1[components[1]]),
                    new THREE.Vector2(v2[components[0]], v2[components[1]]),
                    new THREE.Vector2(v3[components[0]], v3[components[1]])
                ]);
            });
            geometry.uvsNeedUpdate = true;
        }

      //----- SoundControls for GUI ------
      const SoundControls = function () {
        this.master = listener.getMasterVolume();
        this.Ambient = soundAmbient.getVolume();
      };

      //---------- Animations ----------
        function animate() {

          requestAnimationFrame( animate );
          const delta = clock.getDelta();
          if ( mixer ) mixer.update( delta );
          //----------Draw the Scene----------
          renderer.render( scene, camera );
          stats.update();
          first_p_control();
        }

      //---------- Player ----------
        function first_p_control(){

    	if(keyboard[87]){ // W
    		camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
    		camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
    	}
    	if(keyboard[83]){ // S
    		camera.position.x += Math.sin(camera.rotation.y) * player.speed;
    		camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
    	}
    	if(keyboard[65]){ // A
    		// Redirect motion by 90 degrees
    		camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
    		camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
    	}
    	if(keyboard[68]){ // D
    		camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
    		camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
    	}
    	// Keyboard turn inputs (rotation player)
    	if(keyboard[37]){ // left arrow
    		camera.rotation.y -= player.turnSpeed;
    	}
    	if(keyboard[39]){ // right arrow
    		camera.rotation.y += player.turnSpeed;
    	}
      if(keyboard[38]){ // bottom arrow
        camera.rotation.x -= player.turnSpeed;
      }
      if(keyboard[40]){ // top arrow
        camera.rotation.x += player.turnSpeed;
      }
    }
        function keyDown(event){
            keyboard[event.keyCode] = true;
        }
        function keyUp(event){
            keyboard[event.keyCode] = false;
        }


//---------------------------------------------------
//-------------------- Main code --------------------
//---------------------------------------------------

    //----------- Floor -----------
    const floor = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(4000,4000,32),
        new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide, wireframe: true})
    );
    scene.add(floor);
    floor.rotation.x +=Math.PI/2;
    floor.position.y =0;

    //---------- Stats FPS-----------
    container = document.createElement( 'div' );
    document.body.appendChild( container );

    stats = new Stats();
    container.appendChild( stats.dom );

    //----------Events List----------
      //For fisrt personne control
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);
      //resize the window
    window.addEventListener( 'resize', onWindowResize, false );

    //---------- Light ----------
      //const light = new THREE.AmbientLight();
      const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
      scene.add( light );

    //---------- Camera ----------
      camera.position.set(0, player.height, -500);
      camera.lookAt(new THREE.Vector3(0,player.height,0));

    //---------- Music----------
      // create an AudioListener and add it to the camera
      const listener = new THREE.AudioListener();
      camera.add(listener);
      const audioLoader = new THREE.AudioLoader();

      const soundAmbient = new THREE.Audio(listener);
      audioLoader.load("./ressources/sound/le-roi-lion-hakuna-matata-i-disney.mp3", function( buffer ) {
        soundAmbient.setBuffer(buffer);
        soundAmbient.setLoop(true);
        soundAmbient.setVolume(0.3);

      });

    //---------- GUI -----------
      var options = {
      //button: function {},

        reset: function() {
          camera.position.z = 0;
          camera.position.x = 0;
          camera.position.y = 20;
        }
      };
      const gui = new dat.GUI();
      const soundControls = new SoundControls();

      const volumeFolder = gui.addFolder('sound volume');
      volumeFolder.add(soundControls, 'master').min( 0.0 ).max( 1.0 ).step( 0.1 ).onChange(function () {
        listener.setMasterVolume( soundControls.master );
      });
      volumeFolder.add(soundControls, 'Ambient').min( 0.0 ).max( 1.0 ).step( 0.1 ).onChange(function () {
        soundAmbient.setVolume(soundControls.Ambient);
      });
      volumeFolder.open();

      gui.add(options, 'reset');


//---------------------------------------------------
//----------------- Applications --------------------
//---------------------------------------------------

      // addObj();
      /*var loader2 = new FBXLoader;
      loader2.load('./ressources/models/Defeated.fbx', function(obj){
          scene.add(obj);
      });*/

      init();
      animate();













    /*  function music(){
      // create an AudioListener and add it to the camera
      const listener = new THREE.AudioListener();
      camera.add(listener);
      // create a global audio source
      const sound = new THREE.Audio( listener );
      // load a sound and set it as the Audio object's buffer
      const audioLoader = new THREE.AudioLoader();
      audioLoader.load("./ressources/sound/le-roi-lion-hakuna-matata-i-disney.mp3", function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop(true);
        sound.setVolume(0.3);
        sound.play();
      });
    } */
