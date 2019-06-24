import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GLTFLoader from "three-gltf-loader";

const style = {
  height: 500
};

export default class ModelCard extends Component {
  state = { images: null };

  componentDidMount() {
    this.sceneSetup();
    this.addCustomSceneObjects();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWinndowResize);
  }

  sceneSetup = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("rgb(219, 219, 219)");
    this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    this.camera.position.z = 20;

    this.controls = new OrbitControls(this.camera, this.el);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.panSpeed = 0.8;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height, false);
    this.el.appendChild(this.renderer.domElement);
  };

  addCustomSceneObjects = () => {
    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    const Hlight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    this.scene.add(Hlight);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);

    const loader = new GLTFLoader();

    loader.load(
      "https://dl.dropboxusercontent.com/s/s6h7j11rukhzu76/hammer.glb?dl=0",
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
    return <div style={style} ref={ref => (this.el = ref)} />;
  }
}
