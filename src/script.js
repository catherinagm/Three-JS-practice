import * as THREE from "three";
// import gsap from "gsap";

// Cursor
window.addEventListener("mousemove", (event) => {
  console.log(event.clientX);
});

// Scene
const scene = new THREE.Scene();

// Size
const sizes = {
  width: 800,
  height: 600,
};

// Time
let time = Date.now();

// Clock
const clock = new THREE.Clock();

// Objects

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

// Position
cube1.position.x = -2;
cube2.position.x = 2;
group.position.y = 1;
group.rotation.x = -2;

//Scale
// mesh.scale.x = 2;
// group.scale.set(2, 0.5, 0.5);

// Rotation
// group.rotation.y = Math.PI / 2;

// Camera

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  1000
);
camera.position.z = 3;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animations
const tick = () => {
  // Time
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // console.log(deltaTime);

  //Clock
  const elapsedTime = clock.getElapsedTime();

  // Update object
  // camera.position.z = Math.sin(elapsedTime);
  // camera.position.y = Math.cos(elapsedTime);
  // camera.lookAt(group.position);

  //Gsap
  // gsap.to(group.position, { duration: 1, delay: 1, x: 2 });

  // Renderer
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

// mesh.position.normalize();
// console.log(mesh.position.length());
// console.log(mesh.position.distanceTo(camera.position));
