//---------------------------------------------------
//-------------------- Imports ----------------------
//---------------------------------------------------

import * as THREE from "../../build/three.module.js";
import mains_const from "./globales_const.js"

export {medieval as medieval};


//---------------------------------------------------
//---------- Declarations / Initialisation ----------
//---------------------------------------------------

const scene = mains_const.scene;
const loader = mains_const.loader;
let texture_x;
let windows = [];
let nwin = 25;


//---------------------------------------------------
//------------------- Functions ---------------------
//---------------------------------------------------

  //----------Texture----------
function f_texture(which_texture,Vert_repeat,Hori_repeat){
    if(which_texture==="crate"){
        texture_x = loader.load('./ressources/texture/crate.gif');
    } else if(which_texture==="fenetre"){
        texture_x = loader.load('./ressources/texture/fenetre.png');
    } else if(which_texture==="toit"){
        texture_x = loader.load('./ressources/texture/toit.png');
    } else if(which_texture==="stonewall"){
        texture_x = loader.load('./ressources/texture/stonewall.jpg');
    }

    texture_x.wrapS = THREE.RepeatWrapping;
    texture_x.wrapT = THREE.RepeatWrapping;

    texture_x.repeat.set(Vert_repeat, Hori_repeat);
    return new THREE.MeshStandardMaterial( {map: texture_x, side: THREE.DoubleSide});
}

//------- Shape cubic -----------
function cube(dim_x, dim_y, dim_z, texture, tex_horiz, tex_verti, pos_x, pos_y, pos_z){
 const geometry_cube = new THREE.Mesh(
     new THREE.BoxBufferGeometry(dim_x,dim_y,dim_z),
     f_texture(texture,tex_horiz,tex_verti)
 );
 geometry_cube.receiveShadow = true;
 geometry_cube.castShadow = true;
 geometry_cube.position.x = pos_x;
 geometry_cube.position.y = pos_y;
 geometry_cube.position.z = pos_z;

 scene.add(geometry_cube);
 return geometry_cube;
}

//------- Shape cylindric -----------
function cylindric(radiustop, radiusbottom, height, radialsegament, texture, tex_horiz, tex_verti, pos_x, pos_y, pos_z){
 const geometry_cylindric = new THREE.Mesh(
     new THREE.CylinderBufferGeometry(radiustop, radiusbottom, height, radialsegament),
      f_texture(texture,tex_horiz,tex_verti)
 );
 geometry_cylindric.receiveShadow = true;
 geometry_cylindric.castShadow = true;
 geometry_cylindric.position.x = pos_x;
 geometry_cylindric.position.y = pos_y;
 geometry_cylindric.position.z = pos_z;

 scene.add( geometry_cylindric);
 return geometry_cylindric;
}

//------- Shape cone -----------
function cone(x, y, z, texture, tex_horiz, tex_verti, pos_x, pos_y, pos_z){
 const geometry_cone = new THREE.Mesh(
     new THREE.ConeBufferGeometry(x,y,z),
      f_texture(texture,tex_horiz,tex_verti)
 );
 geometry_cone.receiveShadow = true;
 geometry_cone.castShadow = true;
 geometry_cone.position.set(pos_x, pos_y, pos_z);
 scene.add( geometry_cone);
 return geometry_cone;
}

//------- Shape sphere -----------
function sphere(x, y, z, texture, tex_horiz, tex_verti, pos_x, pos_y, pos_z){
   const geometry_sphere = new THREE.Mesh(
       new THREE.SphereBufferGeometry(x,y,z),
        f_texture(texture,tex_horiz,tex_verti)
   );
   geometry_sphere.receiveShadow = true;
   geometry_sphere.castShadow = true;
   geometry_sphere.position.set(pos_x, pos_y, pos_z);
   scene.add( geometry_sphere);
   return geometry_sphere;
}

//------- Shape roof (faces, vector) -----------
function roof(objet, pos_x, pos_y, pos_z, rot_y){
   const geometry_roof = new THREE.Mesh(
       objet,
       f_texture("toit", 0.01, 0.01)
   );
   geometry_roof.position.set(pos_x, pos_y, pos_z);
   geometry_roof.rotation.y =  rot_y;
   scene.add( geometry_roof);
  // assignUVs(geometry_roof);
   return geometry_roof;
}


//---------------------------------------------------
//------------------- Main functions ----------------
//---------------------------------------------------

function medieval(){

    const ground = cube(2000,10,2000,"crate", 10, 5);
    const batcours = cube(1200,150,100,"stonewall", 30, 3, 0, 75, 1350);
    const batcourne = cube(400,400,50,"stonewall", 10, 6, 400, 200, 625);
    const batcournw = cube(400,400,50,"stonewall", 10, 6, -400, 200, 625);
    const batcoure = cube(100,150,800,"stonewall", 30, 3, 550, 75, 1000);
    const batcourw = cube(100,150,800,"stonewall", 30, 3, -550, 75, 1000);
    const batmain = cube(400,400,400,"stonewall", 10, 6, 0, 200, 800);
    const bat_ce = cube(100,250,350,"stonewall", 10, 6, 550, 275, 800);
    const bat_cw = cube(100,250,350,"stonewall", 10, 6, -550, 275, 800);
    const tower_se = cylindric(125,125,150,64, "stonewall", 15,6, 600, 75, 1400);
    const tower_sw = cylindric(125,125,150,64, "stonewall", 15,6, -600, 75, 1400);
    const tower_nw = cylindric(125,125,400,64, "stonewall", 15,6, -650, 200, 550);
    const tower_ne = cylindric(125,125,400,64, "stonewall", 15,6, 650, 200, 550);
    const tower_ine = cylindric(100,100,400,64, "stonewall", 15,6, 225, 200, 600);
    const tower_inw = cylindric(100,100,400,64, "stonewall", 15,6, -225, 200, 600);
    const tower_ise = cylindric(100,100,400,64, "stonewall", 15,6, 225, 200, 1000);
    const tower_isw = cylindric(100,100,400,64, "stonewall", 15,6, -225, 200, 1000);
    const rooftowere =  cone(125,250,64, "toit", 1, 1, 650, 525, 550)
    const rooftowerw =  cone(125,250,64, "toit", 1, 1, -650, 525, 550)
    const rooftoweri_nw =  cone(125,250,64, "toit", 1, 1, 225, 525, 600)
    const rooftoweri_ne =  cone(125,250,64, "toit", 1, 1, -225, 525, 600)
    const rooftoweri_sw =  cone(125,250,64, "toit", 1, 1, 225, 525, 1000)
    const rooftoweri_se =  cone(125,250,64, "toit", 1, 1, -225, 525, 1000)
    const tunder_roof_nw = cylindric(75,75,25,64, "toit", 10,1, 225, 412.5, 600);
    const tunder_roof_ne = cylindric(75,75,25,64, "toit", 10,1, -225, 412.5, 600);
    const tunder_roof_sw = cylindric(75,75,25,64, "toit", 10,1, 225, 412.5, 1000);
    const tunder_roof_se = cylindric(75,75,25,64, "toit", 10,1, -225, 412.5, 1000);
    const rooftop_inw = cylindric(25,25,100,64, "toit", 1,1, -225, 600, 600);
    const rooftop_ine = cylindric(25,25,100,64, "toit", 1,1, 225, 600, 600);
    const rooftop_ise = cylindric(25,25,100,64, "toit", 1,1, 225, 600, 1000);
    const rooftop_isw = cylindric(25,25,100,64, "toit", 1,1, -225, 600, 1000);
    const rooftop_w = cylindric(25,25,100,64, "toit", 1,1, 650, 650, 550);
    const rooftop_e = cylindric(25,25,100,64, "toit", 1,1, -650, 650, 550);
    const s_rooftop_inw = sphere(25,64,64,"toit", 1,1, -225, 650, 600)
    const s_rooftop_ine = sphere(25,64,64,"toit", 1,1, 225, 650, 600)
    const s_rooftop_isw = sphere(25,64,64,"toit", 1,1, -225, 650, 1000)
    const s_rooftop_ise = sphere(25,64,64,"toit", 1,1, 225, 650, 1000)
    const s_rooftop_e = sphere(25,64,64,"toit", 1,1, 650, 700, 550)
    const s_rooftop_w = sphere(25,64,64,"toit", 1,1, -650, 700, 550)

    //Toit intérieur
    let geometryroofi = new THREE.Geometry();
    geometryroofi.vertices.push(
        new THREE.Vector3(-65,-75,65),
        new THREE.Vector3(65,-75,65),
        new THREE.Vector3(-50,75,0),
        new THREE.Vector3(50,75,0),
        new THREE.Vector3(-65,-75,-65),
        new THREE.Vector3(65,-75,-65)
    )
    geometryroofi.faces.push(
        //Front
        new THREE.Face3(0,3,2),
        new THREE.Face3(0,1,3),
        //Right
        new THREE.Face3(1,5,3),
        //Back
        new THREE.Face3(5,2,3),
        new THREE.Face3(5,4,2),
        //Left
        new THREE.Face3(4,0,2),
        //Bottom
        new THREE.Face3(4,1,0),
        new THREE.Face3(4,5,1)
    )

    const roof_nw = roof(geometryroofi, -85, 475, 675, Math.PI/2);
    const roof_ne = roof(geometryroofi, 85, 475, 675, Math.PI/2);
    const roof_sw = roof(geometryroofi, -85, 475, 925, Math.PI/2);
    const roof_se = roof(geometryroofi, 85, 475, 925, Math.PI/2);

    //Toit facade (nord)
    let geometryroofface = new THREE.Geometry();
    geometryroofface.vertices.push(
        new THREE.Vector3(-80,-25,25),
        new THREE.Vector3(80,-25,25),
        new THREE.Vector3(-60,25,0),
        new THREE.Vector3(60,25,0),
        new THREE.Vector3(-80,-25,-25),
        new THREE.Vector3(80,-25,-25)
    )
    geometryroofface.faces.push(
        //Front
        new THREE.Face3(0,3,2),
        new THREE.Face3(0,1,3),
        //Right
        new THREE.Face3(1,5,3),
        //Back
        new THREE.Face3(5,2,3),
        new THREE.Face3(5,4,2),
        //Left
        new THREE.Face3(4,0,2),
        //Bottom
        new THREE.Face3(4,1,0),
        new THREE.Face3(4,5,1)
    )

    const roof_facee = roof(geometryroofface, 395, 425, 625);
    const roof_facew = roof(geometryroofface, -395, 425, 625);


    //Toit coté
    let geometryroofc = new THREE.Geometry();
    geometryroofc.vertices.push(
        new THREE.Vector3(-50,-50,150),
        new THREE.Vector3(50,-50,150),
        new THREE.Vector3(0,50,150),
        new THREE.Vector3(0,50,-150),
        new THREE.Vector3(-50,-50,-150),
        new THREE.Vector3(50,-50,-150)
    );
    geometryroofc.faces.push(
        //Front
        new THREE.Face3(0,1,2),
        //Right
        new THREE.Face3(1,3,2),
        new THREE.Face3(1,5,3),
        //Back
        new THREE.Face3(5,4,3),
        //Left
        new THREE.Face3(4,0,2),
        new THREE.Face3(4,2,3),
        //Bottom
        new THREE.Face3(0,1,5),
        new THREE.Face3(0,5,4)
    );

    const roof_ce = roof(geometryroofc, 550, 450, 825);
    const roof_cw = roof(geometryroofc, -550, 450, 825);

    //Fenetre
    let texturefenetre = new THREE.TextureLoader().load("ressources/texture/fenetre.png");
    let materialwindow = new THREE.MeshStandardMaterial({map: texturefenetre});
    let geometrywindow = new THREE.BoxBufferGeometry(25,100,1);

    for(let i = 0; i < nwin; ++i){
            windows.push(new THREE.Mesh(geometrywindow,materialwindow));
            scene.add(windows[i]);
        }
}
/*
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
  } */
