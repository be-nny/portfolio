import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {EffectComposer, RenderPass, UnrealBloomPass} from "three/addons";

let scene;
let camera;
let renderer;
let controls;
let renderScene;
let composer;
let bloom;

const initiate = () => {
    scene = new THREE.Scene();
    scene.background = null;

    camera = new THREE.PerspectiveCamera( 60, (window.document.getElementById("canvas1").offsetWidth) / (window.document.getElementById("canvas1").offsetHeight), 0.1, 10000 );
    camera.position.z = 10;
    camera.position.y = 10;
    camera.position.x = 5;

    renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize( window.document.getElementById("canvas1").offsetWidth, window.document.getElementById("canvas1").offsetHeight);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.panSpeed = 1;
    controls.enableDamping = true;
    controls.maxZoom = 3000;
    controls.enablePan = false;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        controls.enableZoom = false
        camera.position.set(-4,10,10);
    }else{
        controls.enableZoom = true
        camera.position.z = 10;
        camera.position.y = 10;
        camera.position.x = 5;
    }
    const light = new THREE.AmbientLight(0xEBE1CD, 3);
    light.position.set(10, 2, 10);
    light.castShadow = true;

    scene.add( light );
    document.getElementById("canvas1").appendChild( renderer.domElement );

}

let loadedModel;
const loader = new GLTFLoader();
loader.load( '/3d/planet_earth/scene.gltf', function ( gltf ) {
        loadedModel = gltf;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // loadedModel.scene.position.x = 4;
        }
        loadedModel.scene.position.y = 0;
        scene.add(loadedModel.scene);
    }, function ( xhr ) {
        console.log(  xhr.loaded + ' loaded' );
    }, function ( error ) {
        console.error( error );
    }
);

const animate = () => {
    if(loadedModel){
        composer.render( scene,  camera );
        controls.update();
    }
    requestAnimationFrame( animate );
}
initiate();
animate();

// applying bloom
scene.background = null;
renderScene = new RenderPass(scene, camera);
composer = new EffectComposer(renderer)

bloom = new UnrealBloomPass(
    new THREE.Vector2(camera.getFilmWidth(), camera.getFilmHeight()),
    1.5,
    0.5,
    0.05
);
composer.addPass(renderScene);
composer.addPass(bloom);

renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 1;