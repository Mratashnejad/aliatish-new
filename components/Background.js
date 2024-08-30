'use client';
import { useEffect } from 'react';
import * as THREE from 'three';

const Background = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('bgCanvas').appendChild(renderer.domElement);

        // Lighting for a better visual effect
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Create neurons with wider distribution
        const neuronCount = 100; // Increase the number of neurons
        const neurons = [];
        const connections = [];

        const colors = [0xff5733, 0xffbd33, 0x33ffbd, 0x335bff, 0xff33a8]; // Color palette for neurons and connections

        for (let i = 0; i < neuronCount; i++) {
            const neuronGeometry = new THREE.SphereGeometry(0.15, 16, 16);
            const neuronMaterial = new THREE.MeshPhongMaterial({
                color: colors[i % colors.length],
            });
            const neuron = new THREE.Mesh(neuronGeometry, neuronMaterial);

            // Wider distribution and specific corner placement
            neuron.position.set(
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 30
            );

            scene.add(neuron);
            neurons.push(neuron);
        }

        // Create connections between neurons with random colors
        for (let i = 0; i < neuronCount; i++) {
            for (let j = i + 1; j < neuronCount; j++) {
                if (Math.random() < 0.05) {
                    // Randomly create fewer connections
                    const material = new THREE.LineBasicMaterial({
                        color: colors[
                            Math.floor(Math.random() * colors.length)
                        ],
                    });
                    const points = [];
                    points.push(neurons[i].position);
                    points.push(neurons[j].position);

                    const geometry = new THREE.BufferGeometry().setFromPoints(
                        points
                    );
                    const line = new THREE.Line(geometry, material);

                    scene.add(line);
                    connections.push(line);
                }
            }
        }

        camera.position.z = 40; // Move the camera back for a wider view

        const animate = () => {
            requestAnimationFrame(animate);

            // Slow rotation for dynamic effect
            scene.rotation.x += 0.0005;
            scene.rotation.y += 0.001;

            renderer.render(scene, camera);
        };

        const onMouseMove = (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            neurons.forEach((neuron) => {
                neuron.position.x += mouseX * 0.05;
                neuron.position.y += mouseY * 0.05;
            });

            connections.forEach((connection) => {
                connection.geometry.attributes.position.needsUpdate = true;
            });
        };

        window.addEventListener('mousemove', onMouseMove);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            document
                .getElementById('bgCanvas')
                .removeChild(renderer.domElement);
        };
    }, []);

    return null;
};

export default Background;
