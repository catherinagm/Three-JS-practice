import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import gsap from "gsap";

// Size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

// Scene
const scene = new THREE.Scene();

// Time
// let time = Date.now();

// Clock
const clock = new THREE.Clock();

// Cursor
const cursor = {
  x: 0,
  y: 0,
};

// Cursor Event Listener
window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;
});

// Create Objects
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xffff00 })
);

group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);

group.add(cube3);

// Position Objects
cube1.position.x = -2;
cube2.position.x = 2;
group.position.y = 1;
group.rotation.x = -2;

//Resize
window.addEventListener("resize", () => {
  //Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix;

  //Update renderer
  renderer.setSize(sizes.width, sizes.height);

  // Update Pixel Ratio
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Create Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  1000
);
camera.position.z = 3;
scene.add(camera);

// Create Controls
const controls = new OrbitControls(camera, canvas);
controls.target.y = 1;

controls.enableDamping = true;

// Animations
const tick = () => {
  // Alternativa con Time
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // console.log(deltaTime);

  //Clock
  const elapsedTime = clock.getElapsedTime();

  // Update camera
  // camera.position.z = Math.sin(elapsedTime);
  // camera.position.y = Math.cos(elapsedTime);

  // camera.position.x = cursor.x * 10;
  // camera.position.y = cursor.y * -10;

  // camera.position.x = Math.sin(cursor.x * Math.PI) * 3;
  // camera.position.z = Math.cos(cursor.x * Math.PI) * 3;

  // camera.lookAt(group.position);

  //Gsap
  // gsap.to(group.position, { duration: 1, delay: 1, x: 2 });

  //Update controls
  controls.update();

  // Renderer
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

// mesh.position.normalize();
