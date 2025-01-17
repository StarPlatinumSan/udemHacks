/* npm install @react-three/fiber @react-three/drei three */
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useState } from "react";

const StarsEffect = () => {
	const [mouse, setMouse] = useState({ x: 0, y: 0 });
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMouse({
				x: (event.clientX / window.innerWidth) * 2 - 1,
				y: -(event.clientY / window.innerHeight) * 2 + 1,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const CameraParallax = () => {
		useFrame(({ camera }) => {
			camera.position.x += (mouse.x * 0.1 - camera.position.x) * 0.05;
			camera.position.y += (mouse.y * 0.1 - camera.position.y) * 0.05;
			camera.lookAt(0, 0, 0);
		});
		return null;
	};

	useEffect(() => {
		const handleScroll = () => {
			setOffset(window.scrollY * 0.25);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div style={{ position: "absolute", top: `${offset}px`, left: 0, width: "100vw", height: "120vh", overflow: "hidden" }}>
			<Canvas
				style={{
					width: "100vw",
					height: "120vh",
				}}
				camera={{ position: [0, 0, 1] }}
			>
				<Stars radius={200} depth={50} count={5000} factor={4} fade />
				<CameraParallax />
			</Canvas>
		</div>
	);
};
export default StarsEffect;
