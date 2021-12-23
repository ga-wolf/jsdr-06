// Import all of the necessary dependencies
import * as THREE from "three";
import orbit from "three-orbit-controls";

let orbitControls = orbit(THREE);

function getRandomColor() {
  let colors = [
    "dodgerblue",
    "tomato",
    "limegreen",
    "rebeccapurple",
    "gold",
    "lavender",
    "lightcoral",
    "papayawhip",
  ];
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function createRenderer() {
  let renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("white"); // Background Colour
  renderer.setPixelRatio(window.devicePixelRatio);
  let output = document.querySelector("#output");
  output.appendChild(renderer.domElement);
  return renderer;
}

function createScene() {
  return new THREE.Scene();
}

function createCamera() {
  let camera = new THREE.PerspectiveCamera(
    45, // Field of View
    window.innerWidth / window.innerHeight, // Ratio
    0.1, // Near (Macro)
    1000, // Far
  );
  camera.position.set(-30, 40, 30); // X, Y, Z
  camera.lookAt(0, 0, 0);
  return camera;
}

function createCube() {
  let geometry = new THREE.BoxGeometry(4, 4, 4);
  let material = new THREE.MeshLambertMaterial({
    color: getRandomColor(),
  });
  let mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

function createSphere() {
  let geo = new THREE.SphereGeometry(4, 30, 30);
  let mat = new THREE.MeshLambertMaterial({
    color: "tomato",
  });
  let mesh = new THREE.Mesh(geo, mat);
  return mesh;
}

function createLight() {
  let light = new THREE.PointLight("white");
  return light;
}

let renderer = createRenderer();
let scene = createScene();
let camera = createCamera();
let cube = createCube();
let sphere = createSphere();
let light = createLight();

new orbitControls(camera);

sphere.position.x = 10;

light.position.set(5, 10, 10); // X, Y, Z

scene.add(cube, sphere, light);

let cubes = [];
let cubeCount = 2000;

for (let i = 1; i <= cubeCount; i += 1) {
  let newCube = createCube();

  newCube.position.x = Math.random() * 500 - 250;
  newCube.position.y = Math.random() * 500 - 250;
  newCube.position.z = Math.random() * 500 - 250;

  cubes.push(newCube);
}

scene.add(...cubes); // Spread Operator

function animate() {
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  cube.rotation.z += 0.05;

  cubes.forEach(function (c) {
    c.rotation.x += Math.random() / 10;
    c.rotation.y += Math.random() / 10;
    c.rotation.z += Math.random() / 10;
  });

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
