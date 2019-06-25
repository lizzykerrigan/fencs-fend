import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GLTFLoader from "three-gltf-loader";
import "./3dModelCard.css";

const style = {
  height: 500
};

export default class ModelCard extends Component {
  state = { images: null };

  componentDidMount() {
    this.sceneSetup();
    this.addCustomSceneObjects();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWinndowResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWinndowResize, false);
  }

  sceneSetup = () => {
    const { title } = this.props.image;
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;
    this.scene = new THREE.Scene();
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-x.jpg',
      'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-x.jpg',
      'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-y.jpg',
      'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-y.jpg',
      'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-z.jpg',
      'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-z.jpg',
    ]);
    this.scene.background = texture;
    // this.scene.background = new THREE.Color("rgb(120, 120, 120)");
    this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);

    this.camera.position.z = 100;
    this.camera.position.x = 50;
    this.camera.position.y = 50;

    if (title === "Toilet") {
      this.camera.position.z = 2;
      this.camera.position.x = 2;
      this.camera.position.y = 2;
    }
    if (title === "Safe") {
      this.camera.position.z = 17;
      this.camera.position.x = 10;
      this.camera.position.y = 6;
    }
    if (title === "Skull") {
      this.camera.position.z = 2;
      this.camera.position.x = 1;
      this.camera.position.y = 0;
    }
    if (title === "Donut") {
      this.camera.position.z = 2;
      this.camera.position.x = 2;
      this.camera.position.y = 2;
    }
    if (title === "Hammer") {
      this.camera.position.z = 3;
      this.camera.position.x = 25;
      this.camera.position.y = 2;
    }
    if (title === "Penguin") {
      this.camera.position.z = 500;
      this.camera.position.x = 250;
      this.camera.position.y = 650;
    }
    if (title === "Smoking man") {
      this.camera.position.z = 100;
      this.camera.position.x = 200;
      this.camera.position.y = 250;
    }
    if (title === "Pi") {
      this.camera.position.z = 220;
      this.camera.position.x = 520;
      this.camera.position.y = 520;
    }

    this.controls = new OrbitControls(this.camera, this.el);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 0.5;
    this.controls.panSpeed = 0.8;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height, false);
    this.el.appendChild(this.renderer.domElement);
  };

  addCustomSceneObjects = () => {
    const { obj_image_url } = this.props.image;
    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[3] = new THREE.PointLight(0xffffff, 1, 0);
    lights[4] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 100, 0);
    lights[1].position.set(50, 100, 50);
    lights[2].position.set(-50, -10, -50);
    lights[3].position.set(-15, 10, 15);
    lights[4].position.set(15, 10, 15);

    const Hlight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
    this.scene.add(lights[3]);
    this.scene.add(lights[4]);
    this.scene.add(Hlight);

    const loader = new GLTFLoader();

    loader.load(
      obj_image_url,
      object => {
        const root = object.scene;
        this.scene.add(root);
      },
      xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      err => {
        console.log(err, "an error has occured");
      }
    );
  };

  startAnimationLoop = () => {
    this.renderer.render(this.scene, this.camera);

    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWinndowResize = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    this.camera.updateProjectionMatrix();
  };

  render() {
    return (
      <div className="single-image-container">
        <div style={style} ref={ref => (this.el = ref)} />
      </div>
    );
  }
}
