//---------------------------------------------------
//-------------------- Imports ----------------------
//---------------------------------------------------

import * as THREE from '../../build/three.module.js';
import mains_const from "./globales_const.js"

export {disney as disney};
export{cube, cylindric, cone};

//---------------------------------------------------
//---------- Declarations / Initialisation ----------
//---------------------------------------------------

const scene = mains_const.scene;
const loader = mains_const.loader;
let texture_x;


//---------------------------------------------------
//------------------- Functions ---------------------
//---------------------------------------------------

  //----------Texture----------
function f_texture(which_texture,Vert_repeat,Hori_repeat){
    if(which_texture==="bricks"){
        texture_x = loader.load('./ressources/texture/material_1.jpg');
    } else if(which_texture==="roof"){
        texture_x = loader.load('./ressources/texture/GAF_Marquis_.jpg');
    } else if(which_texture==="vitreau"){
        texture_x = loader.load('./ressources/texture/vitreau.png');
    } else if(which_texture==="gate"){
        texture_x = loader.load('./ressources/texture/wood_gate.jpg');
    } else if(which_texture==="ciment"){
        texture_x = loader.load('./ressources/texture/ciment_1.png');
    } else if(which_texture==="gold"){
        texture_x = loader.load('./ressources/texture/gold_2.png');
    }

    texture_x.wrapS = THREE.RepeatWrapping;
    texture_x.wrapT = THREE.RepeatWrapping;

    texture_x.repeat.set(Vert_repeat, Hori_repeat);
    return new THREE.MeshStandardMaterial( {map: texture_x, side: THREE.DoubleSide});
}

  //------- Shape cubic (+rotation)-----------
function cube(dim_x, dim_y, dim_z, texture, tex_horiz, tex_verti, pos_x, pos_y, pos_z, axe_rotat_1, axe_rotat_2, axe_rotat_3, rotation_1, rotation_2, rotation_3){
   const geometry_cube = new THREE.Mesh(
       new THREE.BoxBufferGeometry(dim_x,dim_y,dim_z),
       f_texture(texture,tex_horiz,tex_verti)
   );
   geometry_cube.receiveShadow = true;
   geometry_cube.castShadow = true;
   geometry_cube.position.x = pos_x;
   geometry_cube.position.y = pos_y;
   geometry_cube.position.z = pos_z;
   if (axe_rotat_1 === "x"){
       geometry_cube.rotation.x = rotation_1;
   }
   if (axe_rotat_2 === "y"){
       geometry_cube.rotation.y = rotation_2;
   }
   if (axe_rotat_3 === "z"){
       geometry_cube.rotation.z = rotation_3;
   }
   scene.add(geometry_cube);
   return geometry_cube;
}

  //------- Shape circle -----------
function circle(r, s, a, t, texture, tex_horiz, tex_verti, pos_x, pos_y, pos_z){
   const geometry_circle = new THREE.Mesh(
       new THREE.CircleBufferGeometry(r, s, a, t),
        f_texture(texture,tex_horiz,tex_verti)
   );
   geometry_circle.position.set(pos_x, pos_y, pos_z);
   scene.add(geometry_circle);
   return geometry_circle;
}

  //------- Shape cylindric (+rotation) -----------
function cylindric(radiustop, radiusbottom, height, radialsegament, texture, tex_horiz, tex_verti, pos_x, pos_y, pos_z, axe_rotat_1, axe_rotat_2, axe_rotat_3, rotation_1, rotation_2, rotation_3){
   const geometry_cylindric = new THREE.Mesh(
       new THREE.CylinderBufferGeometry(radiustop, radiusbottom, height, radialsegament),
        f_texture(texture,tex_horiz,tex_verti)
   );
   geometry_cylindric.receiveShadow = true;
   geometry_cylindric.castShadow = true;
   geometry_cylindric.position.x = pos_x;
   geometry_cylindric.position.y = pos_y;
   geometry_cylindric.position.z = pos_z;
   if (axe_rotat_1 === "x"){
       geometry_cylindric.rotation.x = rotation_1;
   }
   if (axe_rotat_2 === "y"){
       geometry_cylindric.rotation.y = rotation_2;
   }
   if (axe_rotat_3 === "z"){
       geometry_cylindric.rotation.z = rotation_3;
   }
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



//---------------------------------------------------
//------------------- Main functions ----------------
//---------------------------------------------------

function disney(){
  //---------- create the first castel ----------

      //----------------gate right wall 1------------------

      const gate_right_wall_1 = cube(50, 120, 10,"bricks", 1, 3, 150.5, 60, 0);
      const gate_right_wall_1_block_2 = cube(36, 17, 10, "ciment", 1, 1, 143.5, 129, 4, "x", 0, 0, 0.5);
      const gate_right_wall_1_block_3 = cube( 37, 3, 10,"ciment", 1, 1, 143.5, 135, 13);
      const gate_right_wall_1_block_4 = cube( 37, 23, 10, "bricks",0.65,0.65, 143.5, 147, 10);
      const gate_right_wall_1_block_5 = cube( 37,4, 10,"ciment", 1, 1, 143.5, 160, 13);
      const gate_right_wall_1_block_6 = cube( 37, 21, 2, "roof", 2, 2, 143.5, 170, 12, "x", 0, 0, -0.4);
      const gate_right_wall_1_block_7 = cube( 37,6, 5 , "bricks",0.7,0.2, 143, 183, 6);

      //----------------gate right wall 2------------------
      const gate_right_wall_2 = cube(65,120, 10, "bricks",1,3, 230, 60, -55, 0, "y", 0, 0, 1.2);
      const gate_right_wall_2_block_2 = cube(60,17, 10, "ciment", 1, 1, 234, 129, -55, "x", "y", "z", 1, 0.95, -0.9);
      const gate_right_wall_2_block_3 = cube(60, 3, 10, "ciment", 1, 1, 240, 135, -51, 0, "y", 0, 0, 1.2);
      const gate_right_wall_2_block_4 = cube(60, 15, 10, "bricks", 1, 0.4, 237, 144, -51, 0, "y", 0, 0, 1.2);


      //----------------gate right wall 3------------------
      const gate_right_wall_3 = cube(120,120, 10, "bricks",2,4, 280, 60, -210, 0, "y", 0, 0, 1.4);
      const gate_right_wall_3_block_2 = cube(120,17, 10, "ciment", 1, 1, 283, 129, -210, "x", "y", "z", 1.01, 1.3, -1);
      const gate_right_wall_3_block_3 = cube(120, 3, 10, "ciment", 1, 1, 290, 137, -210, 0, "y", 0, 0, 1.4);
      const gate_right_wall_3_block_4 = cube(120, 15, 10, "bricks", 2.2, 0.6, 286, 146, -210, 0, "y", 0, 0, 1.4);

      //----------------gate right wall 4------------------

     const gate_right_wall_4 = cube(90,120, 10, "bricks",2,3, 290, 60, -387, 0, "y", 0, 0, 1.6);
     const gate_right_wall_4_block_2 = cube(90,17, 10, "ciment", 1, 1, 290, 129, -387, "x", "y", "z", 1.7, 1.4, -1.7);
     const gate_right_wall_4_block_3 = cube(90, 3, 10, "ciment", 1, 1, 297, 138, -389, 0, "y", 0, 0, 1.6);
     const gate_right_wall_4_block_4 = cube(90, 15, 10, "bricks", 2, 0.5, 293, 146, -387, 0, "y", 0, 0, 1.6);

      //----------------gate right wall 5------------------
     const gate_right_wall_5 = cube(60,120, 10, "bricks",1,3, 260, 60, -530, 0, "y", 0, 0, 2);
     const gate_right_wall_5_block_2 = cube(60, 17, 10, "ciment", 1, 1, 266, 126, -530, "x", "y", "z", -4.1, 0.9, 0.8);
     const gate_right_wall_5_block_3 = cube(63, 3, 10, "ciment", 1, 1, 276, 130, -530, 0, "y", 0, 0, 2);
     const gate_right_wall_5_block_4 = cube(90, 15, 10, "bricks", 2, 0.5, 272, 140, -530, 0, "y", 0, 0, 2);


      //----------------gate left wall 1------------------

      const gate_left_wall_1 = cube(50, 120, 10, "bricks", 1, 3, -30, 61,0);
      const gate_left_wall_1_block_2 = cube(35, 17, 10, "ciment", 1, 1, -22.5, 129, 4, "x", 0, 0, 0.5);
      const gate_left_wall_1_block_3 = cube(38, 3, 10, "ciment", 1, 1, -24, 135, 13);
      const gate_left_wall_1_block_4 = cube(38, 23, 10, "bricks", 0.65, 0.65, -24, 147, 10);
      const gate_left_wall_1_block_5 = cube(38, 4, 10, "ciment", 1, 1, -24, 160, 13);
      const gate_left_wall_1_block_6 = cube(38, 21, 2, "roof", 2, 2, -24, 170, 12, "x", 0, 0, -0.4);
      const gate_left_wall_1_block_7 = cube(38, 6, 5, "bricks", 0.7, 0.2, -24, 183, 6);

      //----------------gate left wall 2------------------

      const gate_left_wall_2 = cube(120, 130, 10, "bricks", 2, 3, -145, 61, -74, 0, "y", 0, 0, -0.95);
      const gate_left_wall_2_block_2 = cube(130, 17, 10, "ciment", 1, 1, -148, 129, -70, "x", "y", "z", 0.9, -0.7, 0.7);
      const gate_left_wall_2_block_3 = cube(130, 3, 15, "ciment", 1, 1, -154, 134, -66, 0, "y", 0, 0, -0.95);
      const gate_left_wall_2_block_4 = cube(130, 23, 10, "bricks", 2.5, 0.75, -152, 147, -66, 0, "y", 0, 0, -0.95);
      const gate_left_wall_2_block_5 = cube(138, 4, 15, "ciment", 1, 1, -154, 160, -66, 0, "y", 0, 0, -0.95);
      const gate_left_wall_2_block_6 = cube(138, 21, 2, "roof", 8, 1.75, -154, 170, -66, "x", "y", "z", -0.925, -0.7, -0.7);
      const gate_left_wall_2_block_7 = cube(138, 6, 5, "bricks", 1, 1, -153, 181, -74, 0, "y", 0, 0, -0.95);


      //----------------gate left wall 3------------------

     const gate_left_wall_3 = cube(120, 120, 10, "bricks", 2, 3, -225.5, 61, -245, 0, "y", 0, 0, -1.4);
     const gate_left_wall_3_block_2 = cube(120, 17, 10, "ciment", 1, 1, -229, 129, -242, "x", "y", "z", 1.2, 2, -1.17);
     const gate_left_wall_3_block_3 = cube(130, 3, 15, "ciment", 1, 1, -232, 134, -244, 0, "y", 0, 0, -1.42);
     const gate_left_wall_3_block_4 = cube(130, 23, 10, "bricks", 2.5, 0.75, -232, 147, -244, 0, "y", 0, 0, -1.42);


      //----------------gate left wall 4------------------

     const gate_left_wall_4 = cube(136, 120, 10, "bricks",2,3, -218, 61, -465, 0, "y", 0, 0, -1.8);
     const gate_left_wall_4_block_2 = cube(136, 17, 10, "ciment", 1, 1, -222, 129, -466, "x", "y", "z", 2, 2.1, -2.04);
     const gate_left_wall_4_block_3 = cube(139, 3, 15, "ciment", 1, 1, -226, 134, -467, 0, "y", 0, 0, -1.80);
     const gate_left_wall_4_block_4 = cube(138, 23, 10, "bricks", 2.5, 0.75, -226, 147, -467, 0, "y", 0, 0, -1.8);

      //corridor pillard left
      const corridor_pillard_left_1 = cube(12, 70, 25, "ciment", 1, 1, -10, 22.5, 5);
      const corridor_pillard_left_2 = cube(12, 60, 20, "ciment", 1, 1, -10, 62.5, 2.5);
      const corridor_pillard_left_3 = cube(8, 50, 15, "ciment", 1, 1, -8.5, 92.5, 0);
      //corridor pillard right
      const corridor_pillard_right_1 = cube(12, 70, 25, "ciment", 1, 1, 130, 22.5, 5);
      const corridor_pillard_right_2 = cube(12, 60, 20, "ciment", 1, 1, 130, 62.5, 2.5);
      const corridor_pillard_right_3 = cube(8, 50, 15, "ciment", 1, 1, 128.5, 92.5, 0);

      //corridor walls beside pillard
      const corridor_wall_beside_pillard_left = cube(3, 70, 34, "bricks", 1, 1, 123, 35, 0);
      const corridor_wall_beside_pillard_right = cube(3, 70, 34, "bricks", 1, 1, -3, 35, 0);

      //corridor wall front top pillard
      const corridor_wall_front_top_pillard = cube(130, 50, 10, "bricks", 3, 1.3, 60, 95, 12);

      //corridor glass front top pillard
      const corridor_glass_front_top_pillard = circle(40, 32, 0, 3.14159265359, "vitreau", 3, 3, 60, 70, 18);

      //balcony base
      const balcony_base = cube(130, 5, 50, "ciment", 1, 1, 60, 120, 10);

      //balcony back plan
      const balcony_back_plan = cube(130, 80, 150, "ciment", 1, 1, 60, 160, -65);

      //---------------------------------------right tower---------------------------------------
      //Gate-R-Tower
      const gate_right_tower = cylindric(40,40,160,32, "bricks", 4, 4, 200, 80, 0);
      const gate_right_2_tower = cylindric(48, 48, 12, 32, "ciment", 1, 1, 200, 166, 0);
      const gate_right_3_tower = cylindric(46, 48, 30, 32, "bricks", 5, 1, 200, 187, 0);
      const gate_right_roof_1_tower = cylindric(30, 55, 30, 32, "roof", 14, 3, 200, 207, 0);
      const gate_right_4_tower = cylindric(28, 30, 22, 32, "bricks", 4, 1, 200, 233, 0);
      const gate_right_roof_2_tower = cylindric(20, 37, 25, 32, "roof", 14, 3, 200, 250, 0);
      const gate_right_roof_3_tower = cylindric(1, 20, 80, 32, "roof", 14, 8, 200, 303, 0);
      const gate_right_roof_tower_1_base_spike = cylindric(3, 3, 3, 32, "gold", 1, 1, 200, 345);
      const gate_right_roof_tower_2_base_spike = cylindric( 0.1, 3, 28, 32, "gold", 1, 1, 200, 359);

      //---------------------------------------right tower 2---------------------------------------
      //Gate-R-Tower-2
      const gate_right_tower_2 = cylindric(55, 55, 110, 4, "bricks", 5, 3.5, 255, 55, -120, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_2 = cylindric(58, 58, 5, 4, "ciment", 1, 1, 255, 112, -120, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_3 = cylindric(61, 61, 5, 4, "ciment", 1, 1, 255, 117, -120, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_4 = cylindric(63, 63, 2.5, 4, "ciment", 1, 1, 255, 119.5, -120, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_5 = cylindric(60, 60, 1, 4, "ciment", 1, 1, 255, 121, -120, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_6 = cylindric(61, 61, 1, 4, "ciment", 1, 1, 255, 122, -120, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_7 = cylindric(62, 62, 1, 4, "ciment", 1, 1, 255, 123, -120, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_8 = cylindric(63, 63, 1, 4, "ciment", 1, 1, 255, 124, -120, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_9 = cylindric(67, 67, 4, 4, "ciment", 1, 1, 255, 126.5, -120, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_10 = cylindric(64, 64, 35, 4, "bricks", 6, 1.3, 255, 145, -120, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_11 = cylindric(15, 15, 70, 36, "bricks", 2, 2, 290, 144, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_12 = cylindric(17, 17, 3, 36, "ciment", 1, 1, 290, 108, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_13 = cylindric(16, 16, 1, 36, "ciment", 1, 1, 290, 106, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_14 = cylindric(15, 15, 1, 36, "ciment", 1, 1, 290, 105, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_15 = cylindric(14, 14, 1, 36, "ciment", 1, 1, 290, 104, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_16 = cylindric(13, 13, 1, 36, "ciment", 1, 1, 290, 103, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_17 = cylindric(12, 12, 1, 36, "ciment", 1, 1, 290, 102, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_18 = cylindric(11, 11, 1, 36, "ciment", 1, 1, 290, 101, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_19 = cylindric(13, 13, 4, 36, "ciment", 1, 1, 290, 99, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_20 = cylindric(11, 11, 4, 36, "ciment", 1, 1, 290, 95, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_21 = cylindric(9, 9, 4, 36, "ciment", 1, 1, 290, 91, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_22 = cylindric(7, 7, 4, 36, "ciment", 1, 1, 290, 87, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_23 = cylindric(5, 5, 4, 36, "ciment", 1, 1, 290, 83, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_24 = cylindric(3, 3, 85, 36, "ciment", 1, 1, 290, 42, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_25 = cylindric(14.5, 20, 15, 36, "roof", 10, 2, 290, 186, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_26 = cylindric(2, 15, 40, 36, "roof", 10, 4, 290, 213, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_27 = cylindric(3, 3, 3, 32, "gold", 1, 1, 290, 234, -100, 0, "y", 0, 0, 0.4);
      const gate_right_tower_2_block_28 = cylindric(0.1, 3, 28, 32, "gold", 1, 1, 290, 249, -100, 0, "y", 0, 0, 0.4);


      //---------------------------------------right tower 3---------------------------------------
      //Gate-R-Tower-3
      const gate_right_tower_3 = cylindric(60, 60, 140, 4, "bricks", 4, 4, 290, 70, -300, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_2 = cylindric(70, 60, 13, 4, "ciment", 1, 1, 290, 146, -300, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_3 = cylindric(73, 73, 2, 4, "ciment", 1, 1, 290, 153, -300, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_4 = cylindric(70, 70, 15, 4, "bricks", 6, 0.5, 290, 160, -300, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_5 = cylindric(40, 40, 40, 4, "bricks", 3, 1.25, 290, 187, -300, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_6 = cylindric(45, 40, 3, 4, "ciment", 1, 1, 290, 208, -300, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_7 = cylindric(46, 46, 2, 4, "ciment", 1, 1, 290, 210, -300, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_8 = cylindric(43, 43, 15, 4, "bricks", 4, 0.5, 290, 218, -300, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_9 = cylindric(13, 13, 78, 36, "bricks", 1.5, 2.5, 260, 205, -330, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_10 = cylindric(15, 15, 3, 36, "ciment", 1, 1, 260, 245, -330, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_11 = cylindric(15, 15, 12, 36, "ciment", 1, 1, 260, 252, -330, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_12 = cylindric(3, 3, 21, 36, "ciment", 1, 1, 260, 269, -330, 0, "y", 0, 0, 0.8);
      const gate_right_tower_3_block_13 = cylindric(2, 5, 6, 36, "ciment", 1, 1, 260, 279, -330, 0, "y", 0, 0, 0.8);


      //-------------------- tower right 4-------------------------

      const gate_right_tower_4 = cylindric(40,40,160,32, "bricks", 4, 4, 290, 80, -470);
      const gate_right_2_tower_4 = cylindric(48, 48, 12, 32, "ciment", 1, 1, 290, 166, -470);
      const gate_right_3_tower_4 = cylindric(46, 48, 30, 32, "bricks", 5, 1, 290, 187, -470);
      const gate_right_roof_1_tower_4 = cylindric(30, 55, 30, 32, "roof", 14, 3, 290, 207, -470);
      const gate_right_4_tower_4 = cylindric(28, 30, 22, 32, "bricks", 4, 1, 290, 233, -470);
      const gate_right_roof_2_tower_4 = cylindric(20, 37, 25, 32, "roof", 14, 3, 290, 250, -470);
      const gate_right_roof_3_tower_4 = cylindric(1, 20, 80, 32, "roof", 14, 8, 290, 303, -470);
      const gate_right_roof_tower_1_base_spike_4 = cylindric(3, 3, 3, 32, "gold", 1, 1, 290, 345, -470);
      const gate_right_roof_tower_1_point_spike_4 = cylindric( 0.1, 3, 28, 32, "gold", 1, 1, 290, 359, -470);


      //---------------------------------------right tower 5---------------------------------------
      //Gate-R-Tower-5
      const gate_right_tower_5 = cylindric(60,60,140,6, "bricks", 4, 4, 220, 70, -600, 0, "y", 0, 0, 0.2);
      const gate_right_tower_5_block_2 = cylindric(70,60, 13, 6, "ciment", 1, 1, 220, 146, -600, 0, "y", 0, 0, 0.2);
      const gate_right_tower_5_block_3 = cylindric(73, 73, 2, 6, "ciment", 1, 1, 220, 153, -600, 0, "y", 0, 0, 0.2);
      const gate_right_tower_5_block_4 = cylindric(70, 70, 15, 6, "bricks", 9, 0.5, 220, 160, -600, 0, "y", 0, 0, 0.2);
      const gate_right_tower_5_block_5 = cylindric(40, 40, 40, 6, "ciment", 1, 1, 220, 187, -600, 0, "y", 0, 0, 0.2);
      const gate_right_tower_5_block_6 = cylindric(45, 40, 3, 6 , "ciment", 1, 1, 220, 208, -600, 0, "y", 0, 0, 0.2);
      const gate_right_tower_5_block_7 = cylindric(46, 46, 2, 6, "ciment", 1, 1, 220, 210, -600, 0, "y", 0, 0, 0.2);
      const gate_right_tower_5_block_8 = cylindric(43, 43, 15, 6, "bricks", 5, 0.5, 220, 218, -600, 0, "y", 0, 0, 0.2);

      //---------------------------------------left tower---------------------------------------
      const gate_left_tower = cylindric(40,40,160,32, "bricks", 4, 4, -80, 80, 0);
      const gate_left_2_tower = cylindric(48, 48, 12, 32, "ciment", 1, 1, -80, 166, 0);
      const gate_left_3_tower = cylindric(46, 48, 30, 32, "bricks", 5, 1, -80, 187, 0);
      const gate_left_roof_1_tower = cylindric(30, 55, 30, 32, "roof", 14, 3, -80, 207,0);
      const gate_left_4_tower = cylindric(28, 30, 22, 32, "bricks", 4, 1, -80, 233, 0);
      const gate_left_roof_2_tower = cylindric(20, 37, 25, 32, "roof", 14, 3, -80, 250, 0);
      const gate_left_roof_3_tower = cylindric(1, 20, 80, 32, "roof", 14, 8, -80, 303, 0);
      const gate_left_roof_tower_1_base_spike = cylindric(3, 3, 3, 32, "gold", 1, 1, -80, 345, 0);
      const gate_left_roof_tower_1_point_spike = cylindric( 0.1, 3, 28, 32, "gold", 1, 1, -80, 359, 0);


      //---------------------------------------left tower 2---------------------------------------
      const gate_left_tower_2 = cylindric(40, 40, 160, 32, "bricks", 4, 4, -200, 80, -155);
      const gate_left_2_tower_2 = cylindric(48, 40, 12, 32, "ciment", 1, 1, -200, 166, -155);
      const gate_left_3_tower_2 = cylindric(46, 48, 30, 32, "bricks", 5, 1, -200, 187, -155);
      const gate_left_roof_1_tower_2 = cylindric(30, 55, 30, 32, "roof", 14, 3, -200, 207, -155);
      const gate_left_4_tower_2 = cylindric(28, 30, 22, 32, "bricks", 4, 1, -200, 233, -155);
      const gate_left_roof_2_tower_2 = cylindric(20, 37, 25, 32, "roof", 14, 3, -200, 250, -155);
      const gate_left_roof_3_tower_2 = cylindric(1, 20, 80, 32, "roof", 14, 8, -200, 303, -155);
      const gate_left_roof_tower_1_base_spike_2 = cylindric(3, 3, 3, 32, "gold", 1, 1, -200, 345, -155);
      const gate_left_roof_tower_1_point_spike_2 = cylindric(0.1, 3, 28, 32, "gold", 1, 1, -200, 359, -155);
      const gate_left_tower_2_base_front_tiny_towyer = cylindric(13, 13, 30, 6, "bricks", 1.5, 1, -150, 190, -135);
      const gate_left_tower_2_base_2_front_tiny_towyer = cylindric(15, 15, 3, 6, "ciment", 1, 1, -150, 204, -135);
      const gate_left_tower_2_corp_front_tiny_towyer = cylindric(13, 13, 34, 6, "bricks", 1.1, 1.25, -150, 220, -135);
      const gate_left_tower_2_roof_front_tiny_towyer = cylindric(7, 13, 13, 6, "roof", 5, 1.25, -150, 243, -135);
      const gate_left_tower_2_roof_top_front_tiny_towyer = cylindric(1, 7, 27, 6, "roof", 3, 3, -150, 262, -135);
      const gate_left_tower_2_base_spike_front_tiny_towyer = cylindric(3, 3, 3, 36, "gold", 1, 1, -150, 277, -135);
      const gate_left_tower_2_top_spike_front_tiny_towyer = cylindric(0.1, 3, 28, 36, "gold", 1, 1, -150, 292, -135);
      const gate_left_tower_2_base_back_tiny_towyer = cylindric(13, 13, 30, 6, "bricks", 1.5, 1, -185, 190, -210);
      const gate_left_tower_2_base_2_back_tiny_towyer = cylindric(15, 15, 3, 6, "ciment", 1, 1, -185, 204, -210);
      const gate_left_tower_2_corp_back_tiny_towyer = cylindric(13, 13, 34, 6, "bricks", 1.1, 1.25, -185, 220, -210);
      const gate_left_tower_2_roof_back_tiny_towyer = cylindric(7, 13, 13, 6, "roof", 5, 1.25, -185, 243, -210);
      const gate_left_tower_2_roof_top_back_tiny_towyer = cylindric(1, 7, 27, 6, "roof", 3, 3, -185, 262, -210);
      const gate_left_tower_2_base_spike_back_tiny_towyer = cylindric(3, 3, 3, 36, "gold", 1, 1, -185, 277, -210);
      const gate_left_tower_2_top_spike_back_tiny_towyer = cylindric(0.1, 3, 28, 36, "gold", 1, 1, -185, 292, -210);

      //---------------------------------------left tower 3---------------------------------------
      const gate_left_tower_3 = cylindric(50, 50, 160, 6, "bricks", 5, 4, -235, 80, -350);
      const gate_left_2_tower_3 = cylindric(58, 50, 16, 6, "ciment", 1, 1, -235, 166, -350);
      const gate_left_3_tower_3 = cylindric(58, 58, 14, 6, "bricks", 5, 0.4, -235, 181, -350);
      const gate_left_roof_1_tower_3 = cylindric(30, 30, 30, 6, "bricks", 2.5, 1, -235, 202, -350);
      const gate_left_4_tower_3 = cylindric(35, 35, 7, 6, "bricks", 3, 0.2, -235, 221, -350);

      //---------------------------------------left tower 4---------------------------------------
      const gate_left_tower_4 = cylindric(40, 40, 160, 32, "bricks", 4, 4, -200, 80, -570);
      const gate_left_2_tower_4 = cylindric(48, 40, 12, 32, "ciment", 1, 1, -200, 166, -570);
      const gate_left_3_tower_4 = cylindric(46, 48, 30, 32, "bricks", 5, 1, -200, 187, -570);
      const gate_left_roof_1_tower_4 = cylindric(30, 55, 30, 32, "roof", 14, 3, -200, 207, -570);
      const gate_left_4_tower_4 = cylindric(28, 30, 22, 32, "bricks", 4, 1, -200, 233, -570);
      const gate_left_roof_2_tower_4 = cylindric(20, 37, 25, 32, "roof", 14, 3, -200, 250, -570);
      const gate_left_roof_3_tower_4 = cylindric(1, 20, 80, 32, "roof", 14, 8, -200, 303, -570);
      const gate_left_roof_tower_1_base_spike_4 = cylindric(3, 3, 3, 32, "gold", 1, 1, -200, 345, -570);
      const gate_left_roof_tower_1_point_spike_4 = cylindric(0.1, 3, 28, 32, "gold", 1, 1, -200, 359, -570);


      //---------------------------------------main/center---------------------------------------
      //new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide, wireframe: true})
      //main block
      const main_block = cube(190, 280, 280, "ciment", 1, 1, 90, 290, -280);
      const base_tower_right_center = cylindric(40, 40, 100, 7, "ciment", 1, 1, 160, 198, -150);
      const block_1_tower_right_center = cylindric(30, 40, 15, 7, "ciment", 1, 1, 160, 256, -150);
      const block_2_tower_right_center = cylindric(30, 30, 120, 7, "ciment", 1, 1, 160, 325, -150);
      const block_3_tower_right_center = cylindric(42, 30, 10, 7, "ciment", 1, 1, 160, 380, -150);
      const block_4_tower_right_center = cylindric(42, 42, 6, 7, "ciment", 1, 1, 160, 388, -150);
      const block_5_tower_right_center = cylindric(35, 35, 40, 7, "ciment", 1, 1, 160, 400, -150);
      const block_6_tower_right_center = cylindric(25, 25, 70, 9, "ciment", 1, 1, 160, 455, -150);
      const block_7_tower_right_center = cylindric(30, 25, 5, 7, "ciment", 1, 1, 160, 492, -150);
      const block_8_tower_right_center = cylindric(30, 30, 5, 7, "ciment", 1, 1, 160, 497, -150);
      const block_9_tower_right_center = cylindric(20, 20, 30, 7, "ciment", 1, 1, 160, 515, -150);
      const block_10_tower_right_center = cylindric(9, 9, 30, 7, "ciment", 1, 1, 185, 515, -140);
      const block_11_tower_right_center = cone(20, 120, 7, "gold", 1, 1, 160, 590, -150);
      const tower_right_center_base_spike = cylindric(3, 3, 3, 32, "gold", 1, 1, 160, 648, -150);
      const tower_right_center_point_spike = cylindric(0.1, 3, 7, 32, "gold", 1, 1, 160, 653, -150);
      const block_12_tower_right_center = cone(9, 70, 7, "gold", 1, 1, 185, 564, -140);
      const spike_tower_right_center = cylindric(3, 3, 3, 32, "gold", 1, 1, 185, 597, -140);
      const spike_point_tower_right_center = cylindric(0.1, 3, 7, 32, "gold", 1, 1, 185, 602, -140);
      const base_tower_left_center = cylindric(20, 20, 16, 7, "ciment", 1, 1, 0, 365, -140);
      const base_1_tower_left_center = cylindric(22, 22, 4, 7, "ciment", 1, 1, 0, 355, -140);
      const base_2_tower_left_center = cylindric(18, 18, 4, 7, "ciment", 1, 1, 0, 351, -140);
      const base_3_tower_left_center = cylindric(14, 14, 4, 7, "ciment", 1, 1, 0, 347, -140);
      const base_4_tower_left_center = cylindric(10, 10, 4, 7, "ciment", 1, 1, 0, 343, -140);
      const base_5_tower_left_center = cylindric(6, 6, 4, 7, "ciment", 1, 1, 0, 339, -140);
      const block_2_tower_left_center = cylindric(18, 20, 25, 7, "ciment", 1, 1, 0, 384, -140);
      const block_3_tower_left_center = cylindric(10, 25, 22, 5, "roof", 8, 3, 0, 403, -140);
      const block_4_tower_left_center = cylindric(0.1, 10, 60, 5, "roof", 4, 6, 0, 444, -140);
      const int_base_spike = cylindric(3, 3, 3, 32, "gold", 1, 1, 0, 472, -140);
      const int_point_spike = cylindric(0.1, 3, 28, 32, "gold", 1, 1, 0, 485, -140);
      const block_left_main_principal = cube(100, 20, 195, "ciment", 1, 1, -55, 190, -237);
      const block_back_left_main_principal = cube(125, 20, 220, "ciment", 1, 1, -67.5, 190, -443);

      //------------------back left tower block-------------------
      const body_tower_main_block_left = cylindric(30, 30, 172, 7, "ciment", 1, 1, -10, 285, -320);
      const body_tower_main_block_2_left = cylindric(40, 30, 10, 7, "ciment", 1, 1, -10, 376, -320);
      const body_tower_main_block_3_left = cylindric(40, 40, 15, 7, "ciment", 1, 1, -10, 388, -320);
      const body_tower_main_block_4_left= cylindric(28, 28, 15, 7, "ciment", 1, 1, -10, 402, -320);
      const body_tower_main_block_5_left = cylindric(30, 30, 2, 7, "ciment", 1, 1, -10, 410, -320);
      const body_tower_main_block_6_left = cylindric(32, 32, 2, 7, "ciment", 1, 1, -10, 410, -320);
      const body_tower_main_block_7_left = cylindric(28, 28, 6, 7, "ciment", 1, 1, -10, 415, -320);
      const body_tower_main_block_8_left = cylindric(20, 20, 30, 7, "ciment", 1, 1, -10, 433, -320);
      const body_tower_main_block_9_left = cylindric(1, 20, 100, 7, "gold", 1, 1, -10, 498, -320);
      const body_tower_base_spike = cylindric(3, 3, 3, 32, "gold", 1, 1, -10, 550, -320);
      const body_tower_point_spike = cylindric(0.1, 3, 7, 32, "gold", 1, 1, -10, 554, -320);


      //------------------behind left tower block-------------------
      const body_tower_main_block_behind_left = cube(8, 163, 15, "ciment", 1, 1, -6, 280, -419, 0, "y", 0, 0, 0.9);
      const body_tower_main_block_2_behind_left = cylindric(8, 8, 3, 7, "ciment", 1, 1, -8, 362, -419);
      const body_tower_main_block_3_behind_left = cylindric(10, 10, 3, 7, "ciment", 1, 1, -8, 365, -419);
      const body_tower_main_block_4_behind_left= cylindric(12, 12, 3, 7, "ciment", 1, 1, -8, 368, -419);
      const body_tower_main_block_5_behind_left = cylindric(14, 14, 3, 7, "ciment", 1, 1, -8, 371, -419);
      const body_tower_main_block_6_behind_left = cylindric(16, 16, 3, 7, "ciment", 1, 1, -8, 373, -419);
      const body_tower_main_block_7_behind_left = cylindric(18, 18, 3, 7, "ciment", 1, 1, -8, 375, -419);
      const body_tower_main_block_8_behind_left = cylindric(14, 14, 26, 7, "ciment", 1, 1, -8, 389, -419);
      const body_tower_main_block_9_behind_left = cylindric(16, 16, 3, 7, "ciment", 1, 1, -8, 403, -419);
      const body_tower_main_block_10_behind_left = cylindric(8, 18, 15, 7, "roof", 14, 8, -8, 410, -419);
      const body_tower_main_block_11_behind_left = cylindric(1, 8, 50, 7, "roof", 14, 8, -8, 440, -419);
      const tower_main_block_11_behind_left_base_spike = cylindric(3, 3, 3, 32, "gold", 1, 1, -8, 465, -419);
      const tower_main_block_11_behind_left_point_spike = cylindric(0.1, 3, 28, 32, "gold", 1, 1, -8, 480, -419);

      //------------------behind middle tower block-------------------
      const body_tower_behind_main_block_1 = cylindric(40, 40, 180, 10, "ciment", 1, 1, 60, 290, -405);
      const body_tower_behind_main_block_2 = cylindric(47, 40, 8, 10, "ciment", 1, 1, 60, 384, -405);
      const body_tower_behind_main_block_3 = cylindric(49, 49, 3, 10, "ciment", 1, 1, 60, 389, -405);
      const body_tower_behind_main_block_4= cylindric(47, 47, 10, 10, "ciment", 1, 1, 60, 395, -405);
      const body_tower_behind_main_block_5 = cylindric(20, 20, 30, 4, "ciment", 1, 1, 50, 410, -422, 0, "y", 0, 0, 0.75);
      const body_tower_behind_main_block_6 = cylindric(25, 20, 4, 4, "ciment", 1, 1, 50, 426, -422);
      const body_tower_behind_main_block_7 = cylindric(25, 25, 6, 4, "ciment", 1, 1, 50, 430, -422);
      const body_tower_behind_main_block_8 = cylindric(16, 16, 15, 4, "ciment", 1, 1, 50, 440, -422);
      const body_tower_behind_main_block_9 = cylindric(18, 18, 2, 4, "ciment", 1, 1, 50, 448, -422);
      const body_tower_behind_main_block_10 = cylindric(12, 12, 40, 7, "ciment", 1, 1, 50, 468, -422, 0, "y", 0, 0, 0.75);
      const body_tower_behind_main_block_11 = cylindric(14, 14, 2, 7, "ciment", 1, 1, 50, 488, -422, 0, "y", 0, 0, 0.75);
      const body_tower_behind_main_block_12 = cylindric(12, 12, 6, 7, "ciment", 1, 1, 50, 492, -422, 0, "y", 0, 0, 0.75);
      const body_tower_behind_main_block_13 = cylindric(14, 14, 2, 7, "ciment", 1, 1, 50, 495, -422, 0, "y", 0, 0, 0.75);
      const body_tower_behind_main_block_14 = cylindric(12, 12, 6, 7, "ciment", 1, 1, 50, 497, -422, 0, "y", 0, 0, 0.75);
      const body_tower_behind_main_block_15 = cylindric(14, 14, 2, 7, "ciment", 1, 1, 50, 500, -422, 0, "y", 0, 0, 0.75);
      const body_tower_behind_main_block_16 = cylindric(8, 16, 15, 7, "ciment", 1, 1, 50, 508, -422, 0, "y", 0, 0, 0.75);
      const body_tower_behind_main_block_17 = cylindric(1, 8, 40, 7, "roof", 14, 18, 50, 535, -422, 0, "y", 0, 0, 0.75);
      const tower_behind_main_block_base_spike = cylindric(3, 3, 3, 32, "gold", 1, 1, 50, 554, -422);
      const tower_behind_main_block_point_spike = cylindric(0.1, 3, 28, 32, "gold", 1, 1, 50, 569, -422);


      //------------------behind middle right tower block-------------------
      const body_tower_behind_right_main_block_1 = cylindric(40, 40, 180, 4, "ciment", 1, 1, 195, 290, -392, 0, "y", 0, 0, 0.8);
      const body_tower_behind_right_main_block_2 = cylindric(45, 40, 6, 4, "ciment", 1, 1, 195, 382, -392, 0, "y", 0, 0, 0.8);
      const body_tower_behind_right_main_block_3 = cylindric(45, 45, 8, 4, "ciment", 1, 1, 195, 388, -392, 0, "y", 0, 0, 0.8);
      const body_tower_behind_right_main_block_4= cylindric(24, 18, 45, 7, "ciment", 1, 1, 195, 410, -392);
      const body_tower_behind_right_main_block_5 = cylindric(24, 24, 8, 7, "ciment", 1, 1, 195, 432, -392);
      const body_tower_behind_right_main_block_6 = cylindric(16, 16, 40, 7, "ciment", 1, 1, 195, 438, -392);
      const body_tower_behind_right_main_block_7 = cylindric(18, 18, 3, 7, "ciment", 1, 1, 195, 460, -392);
      const body_tower_behind_right_main_block_8 = cylindric(19, 17, 3, 7, "ciment", 1, 1, 195, 480, -392);
      const body_tower_behind_right_main_block_9 = cylindric(16, 16, 12, 7, "ciment", 1, 1, 195, 487, -392);
      const body_tower_behind_right_main_block_10 = cylindric(9, 18, 16, 7, "roof", 14, 8, 195, 500, -392);
      const body_tower_behind_right_main_block_11 = cylindric(1, 9, 40, 7, "roof", 14, 8, 195, 528, -392);
      const tower_behind_right_main_block_base_spike = cylindric(3, 3, 3, 32, "gold", 1, 1, 195, 550, -392);
      const tower_behind_right_main_block_point_spike = cylindric(0.1, 3, 28, 32, "gold", 1, 1, 195, 565, -392);

      //----------------gate behind wall ------------------
     const gate_behind_wall_ = cube(350, 120, 10, "bricks", 4, 3, 0, 60, -605, 0, "y", 0, 0, 0.07);
     const gate_behind_wall_block_2 = cube(350, 17, 10, "ciment", 5, 0.5, 0, 129, -606, "x", "y", "z", -0.2, 0.068, 0.009);
     const gate_behind_wall_block_3 = cube(350, 3, 15, "ciment", 3, 1, 0, 134, -608, 0, "y", 0, 0, 0.07);
     const gate_behind_wall_block_4 = cube(350, 23, 10, "bricks", 4, 0.75, 0, 147, -608, 0, "y", 0, 0, 0.07);

      //------------------ wall right main block-------------------
      //----main block 1
      const wall_right_main_block_1 = cube(35, 150, 230, "ciment", 1, 1, 200, 230, -250);
     //const wall_right_main_block_2 = cylindric(70, 70, 10, 4, "ciment", 1, 1, 260, 310, -185, 0, "y", 0, 0, 0.8);

      //-----------collaps

      const collaps_1 = cube(170, 20, 100, "ciment", 1, 1, -50, 170,-100);
      const collaps_2 = cube(165, 20, 50, "ciment", 1, 1, -40, 170,-25);
      const collaps_3 = cube(15, 20, 15, "ciment", 1, 1, -125, 170,-50);
      const collaps_4 = cube(75, 20, 250, "ciment", 1, 1, -140, 170,-250);
      const collaps_5 = cube(40, 20, 120, "ciment", 1, 1, -135, 170,-90, 0, "y", 0, 0, 0.6);
      const collaps_6 = cube(60, 20, 120, "ciment", 1, 1, -195, 160,-260, 0, "y", 0, 0, 0.15);
      const collaps_7 = cube(120, 20, 250, "ciment", 1, 1, -160, 170,-440, 0, "y", 0, 0, -0.25);
      const collaps_8 = cube(120, 20, 250, "ciment", 1, 1, -130, 160,-440, 0, "y", 0, 0, -0.25);
      const collaps_9 = cube(100, 20, 200, "ciment", 1, 1, 175, 140,-75);
      const collaps_10 = cube(80, 20, 200, "ciment", 1, 1, 250, 140,-370);
      const collaps_11 = cube(80, 20, 100, "ciment", 1, 1, 247, 140,-220, 0, "y", 0, 0, -0.15);
      const collaps_12 = cube(80, 20, 100, "ciment", 1, 1, 220, 140, -220, 0, "y", 0, 0, -0.15);

      //Door
      const door_left = cube(70, 70, 5, "gate", 7, 7, 25, 35, 18);
      const door_right = cube(70, 70, 5, "gate", 7, 7, 95, 35, 18);

}
