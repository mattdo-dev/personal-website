import { Component, OnInit } from '@angular/core';

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import { PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.sass']
})
export class ThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
    );
    camera.position.setX(-20.161)
    camera.position.setY(-40.46388)
    camera.position.setZ(10.904044)

    camera.rotateX(1.533)
    camera.rotateY(0)
    camera.rotateZ(2.6035)

    const loader = new GLTFLoader();

    loader.load(
      'http://localhost:8080/scene.gltf',
      function ( gltf ) {

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene.position.set(0 ,0 ,0); // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

        scene.add( gltf.scene );
      },
      // called while loading is progressing
      function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

      },
      // called when loading has errors
      function ( error ) {

        console.log( error );

      }
    );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add( light );

    const renderer = new WebGLRenderer();
    renderer.setClearColor(0x123456);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    function render() {
      renderer.render(scene, camera);
    }

    render();
  }

}
