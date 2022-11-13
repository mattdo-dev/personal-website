import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";
import * as THREE from "three";
import ThreeGlobe from "three-globe";

@Injectable()
export class HomeCanvas {
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription | undefined

  constructor() {
    this.resizeObservable$ = fromEvent(window, 'resize')
  }

  displayBackground() {
    const N = 75;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: "#535ef3"
    }));

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("bg") as HTMLCanvasElement,
      antialias: true,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    const countriesData = require('./globe-data-min.json')
    const globe = new ThreeGlobe({
      waitForGlobeReady: true,
      animateIn: false,
    })
      .showGlobe(false)
      .hexPolygonsData(countriesData.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.3)
      .hexPolygonColor(() => 'rgb(21, 32, 43)')
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(() => Math.random() * 0.9 + 0.5)
      .arcDashGap(() => Math.random() * 15 + 8)
      .arcDashAnimateTime(225)
      .showAtmosphere(false)

    globe.rotateX(Math.PI / 5)
    globe.rotateZ(Math.PI / 12)
    scene.add(globe);
    scene.add(new THREE.AmbientLight(0xf6f9fc, 0.2))

    const mainLight = new THREE.DirectionalLight(0x101010, 150)
    mainLight.position.set(-800, 2000, 500);
    scene.add(mainLight)

    scene.fog = new THREE.Fog(0x535ef3, 400, 600);

    const animate = function() {
      requestAnimationFrame(animate)
      globe.rotateY(-Math.PI * (1/8196))
      renderer.render(scene, camera)
    };

    camera.position.z = 625;
    renderer.render(scene, camera);
    animate();

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    })
  }
}
