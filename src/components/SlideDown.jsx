import React, { useState, useRef, useEffect } from "react";

const SlideDown = ({ isOpen, children }) => {
	const [height, setHeight] = useState(0);
	const ref = useRef(null);

	useEffect(() => {
		if (isOpen) {
			setHeight(ref.current.scrollHeight);
		} else {
			setHeight(0);
		}
	}, [isOpen]);

	return (
		<div
			style={{
				height: `${height}px`,
				overflow: "hidden",
				transition: "height 0.3s ease",
			}}
		>
			<div ref={ref}>{children}</div>
		</div>
	);
};

export default SlideDown;
