"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedShaderBackgroundProps {
  className?: string;
}

const AnimatedShaderBackground = ({ className }: AnimatedShaderBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;

    let THREE: typeof import("three");
    let frameId: number;
    let renderer: import("three").WebGLRenderer;

    import("three").then((mod) => {
      THREE = mod;

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

      const w = container.offsetWidth || window.innerWidth;
      const h = container.offsetHeight || window.innerHeight;
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const material = new THREE.ShaderMaterial({
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new THREE.Vector2(w, h) },
        },
        vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
        fragmentShader: `
          uniform float iTime;
          uniform vec2 iResolution;

          #define NUM_OCTAVES 3

          float rand(vec2 n) {
            return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
          }

          float noise(vec2 p) {
            vec2 ip = floor(p);
            vec2 u = fract(p);
            u = u*u*(3.0-2.0*u);
            return mix(
              mix(rand(ip), rand(ip+vec2(1.,0.)), u.x),
              mix(rand(ip+vec2(0.,1.)), rand(ip+vec2(1.,1.)), u.x), u.y
            );
          }

          float fbm(vec2 x) {
            float v = 0.0; float a = 0.3;
            vec2 shift = vec2(100);
            mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
            for (int i = 0; i < NUM_OCTAVES; ++i) {
              v += a * noise(x);
              x = rot * x * 2.0 + shift;
              a *= 0.4;
            }
            return v;
          }

          void main() {
            vec2 shake = vec2(sin(iTime*1.2)*0.005, cos(iTime*2.1)*0.005);
            vec2 p = ((gl_FragCoord.xy + shake*iResolution.xy) - iResolution.xy*0.5) / iResolution.y
                     * mat2(6.,-4.,4.,6.);
            vec2 v;
            vec4 o = vec4(0.);

            float f = 2.0 + fbm(p + vec2(iTime*5., 0.)) * 0.5;

            for (float i = 0.; i < 35.; i++) {
              v = p + cos(i*i + (iTime + p.x*0.08)*0.025 + i*vec2(13.,11.))*3.5
                    + vec2(sin(iTime*3.+i)*0.003, cos(iTime*3.5-i)*0.003);
              float tailNoise = fbm(v + vec2(iTime*0.5, i)) * 0.3 * (1.-(i/35.));
              vec4 colors = vec4(
                0.1 + 0.3*sin(i*0.2 + iTime*0.4),
                0.3 + 0.5*cos(i*0.3 + iTime*0.5),
                0.7 + 0.3*sin(i*0.4 + iTime*0.3),
                1.0
              );
              float thin = smoothstep(0., 1., i/35.) * 0.6;
              o += colors * exp(sin(i*i + iTime*0.8)) / length(max(v, vec2(v.x*f*0.015, v.y*1.5)))
                   * (1. + tailNoise*0.8) * thin;
            }

            o = tanh(pow(o/100., vec4(1.6)));
            gl_FragColor = o * 1.5;
          }
        `,
        transparent: true,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const animate = () => {
        material.uniforms.iTime.value += 0.016;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };
      animate();

      const handleResize = () => {
        if (!container) return;
        const nw = container.offsetWidth || window.innerWidth;
        const nh = container.offsetHeight || window.innerHeight;
        renderer.setSize(nw, nh);
        material.uniforms.iResolution.value.set(nw, nh);
      };
      window.addEventListener("resize", handleResize, { passive: true });

      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("resize", handleResize);
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (renderer && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className={cn("overflow-hidden", className)} />;
};

export default AnimatedShaderBackground;
