'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

interface BodyMetrics {
  bodyFat: number;
  muscleMass: number;
  bodyWater: number;
  visceralFat: number;
  biologicalAge?: number;
}

export type BiaSceneMode = 'reveal' | 'composition' | 'hydration' | 'risk' | 'progress';

interface Canvas3DRendererProps {
  metrics: BodyMetrics;
  activeScene?: BiaSceneMode;
}

const BRAND_YELLOW = 0xfac934;
const BRAND_GOLD = 0xeba730;
const WARM_SKIN = 0xd89738;
const LOW_GOLD = 0x3d2603;

const sceneCameraPositions: Record<BiaSceneMode, THREE.Vector3> = {
  reveal: new THREE.Vector3(0, 0.92, 5.45),
  composition: new THREE.Vector3(-1.02, 0.78, 4.95),
  hydration: new THREE.Vector3(1.08, 0.92, 4.95),
  risk: new THREE.Vector3(0.58, 0.62, 4.65),
  progress: new THREE.Vector3(0, 1.08, 5.4),
};

const sceneBodyAngles: Record<BiaSceneMode, number> = {
  reveal: 0,
  composition: -Math.PI / 9,
  hydration: Math.PI / 7,
  risk: Math.PI,
  progress: Math.PI * 2,
};

const sceneTargets: Record<BiaSceneMode, THREE.Vector3> = {
  reveal: new THREE.Vector3(0, 1.02, 0),
  composition: new THREE.Vector3(0, 1.02, 0),
  hydration: new THREE.Vector3(0, 1.08, 0),
  risk: new THREE.Vector3(0, 0.94, 0),
  progress: new THREE.Vector3(0, 1.04, 0),
};

const sceneLightColors: Record<BiaSceneMode, number> = {
  reveal: BRAND_YELLOW,
  composition: BRAND_GOLD,
  hydration: 0xf6d76b,
  risk: 0xffb02e,
  progress: 0xffe071,
};

const createBodyMaterial = () =>
  new THREE.MeshPhysicalMaterial({
    color: WARM_SKIN,
    emissive: LOW_GOLD,
    emissiveIntensity: 0.24,
    metalness: 0.03,
    roughness: 0.48,
    clearcoat: 0.28,
    clearcoatRoughness: 0.34,
  });

const createShadowTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');

  if (context) {
    const gradient = context.createRadialGradient(128, 128, 12, 128, 128, 128);
    gradient.addColorStop(0, 'rgba(250, 201, 52, 0.28)');
    gradient.addColorStop(0.42, 'rgba(235, 167, 48, 0.12)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
};

export const Canvas3DRenderer: React.FC<Canvas3DRendererProps> = ({
  metrics,
  activeScene = 'reveal',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef(metrics);
  const activeSceneRef = useRef<BiaSceneMode>(activeScene);
  const modelRef = useRef<THREE.Group | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    metricsRef.current = metrics;
  }, [metrics]);

  useEffect(() => {
    activeSceneRef.current = activeScene;
  }, [activeScene]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);
    scene.fog = new THREE.FogExp2(0x050505, 0.045);

    const camera = new THREE.PerspectiveCamera(
      39,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.copy(sceneCameraPositions.reveal);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.42);
    scene.add(ambientLight);

    const keyLight = new THREE.SpotLight(BRAND_YELLOW, 8.4, 13, Math.PI / 5.8, 0.48, 1);
    keyLight.position.set(-2.4, 4.5, 4.3);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const softFill = new THREE.PointLight(0xffffff, 1.8, 8);
    softFill.position.set(2.2, 1.8, 3.1);
    scene.add(softFill);

    const rimLight = new THREE.PointLight(BRAND_GOLD, 3.2, 7);
    rimLight.position.set(2.8, 0.4, -2.5);
    scene.add(rimLight);

    const bodyGroup = new THREE.Group();
    bodyGroup.scale.setScalar(0.001);
    scene.add(bodyGroup);

    const modelShell = new THREE.Group();
    bodyGroup.add(modelShell);

    const bodyMaterial = createBodyMaterial();
    const loader = new OBJLoader();

    loader.load(
      '/Male.OBJ',
      (object) => {
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.computeVertexNormals();
            child.material = bodyMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        const box = new THREE.Box3().setFromObject(object);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        object.position.sub(center);
        object.scale.setScalar(3.72 / Math.max(size.y, 0.001));
        object.rotation.y = Math.PI;
        object.position.y = 1.28;

        modelShell.add(object);
        modelRef.current = object;
        setIsModelLoaded(true);
      },
      undefined,
      () => {
        setIsModelLoaded(false);
      }
    );

    const shadowTexture = createShadowTexture();
    const floorGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(3.6, 3.6),
      new THREE.MeshBasicMaterial({
        map: shadowTexture,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
      })
    );
    floorGlow.rotation.x = -Math.PI / 2;
    floorGlow.position.y = -0.86;
    scene.add(floorGlow);

    const clock = new THREE.Clock();
    const lookAtTarget = new THREE.Vector3();

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      const currentScene = activeSceneRef.current;
      const entrance = modelRef.current ? THREE.MathUtils.clamp(elapsed / 2.1, 0, 1) : 0.12;
      const entranceEase = 1 - Math.pow(1 - entrance, 3);

      bodyGroup.scale.setScalar(THREE.MathUtils.lerp(bodyGroup.scale.x, entranceEase, 0.04));
      bodyGroup.position.y = Math.sin(elapsed * 0.9) * 0.025;

      const desiredAngle =
        currentScene === 'progress'
          ? elapsed * 0.23
          : sceneBodyAngles[currentScene] + Math.sin(elapsed * 0.36) * 0.026;
      bodyGroup.rotation.y = THREE.MathUtils.lerp(bodyGroup.rotation.y, desiredAngle, 0.035);

      camera.position.lerp(sceneCameraPositions[currentScene], 0.034);
      lookAtTarget.lerp(sceneTargets[currentScene], 0.06);
      camera.lookAt(lookAtTarget);

      const sceneColor = sceneLightColors[currentScene];
      keyLight.color.setHex(sceneColor);
      rimLight.color.setHex(sceneColor);
      keyLight.intensity = 7.1 + Math.sin(elapsed * 1.7) * 0.35;
      rimLight.intensity = currentScene === 'risk' ? 4.2 : 3.1;

      const waterLift = THREE.MathUtils.clamp(metricsRef.current.bodyWater / 65, 0.82, 1.12);
      floorGlow.scale.setScalar(0.92 + Math.sin(elapsed * 1.15) * 0.025 + (waterLift - 1) * 0.12);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry?.dispose();
          const material = object.material;

          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material?.dispose();
          }
        }
      });

      shadowTexture.dispose();
      renderer.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full" aria-hidden="true">
      {!isModelLoaded && (
        <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-black/20">
          <div className="rounded-lg border border-[#fac934]/20 bg-black/70 px-5 py-4 text-center backdrop-blur-md">
            <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-[#fac934]/20 border-t-[#fac934]" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#fac934]">
              Carregando modelo 3D
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
