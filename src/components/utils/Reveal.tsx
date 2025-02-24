import { JSX, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
	children: JSX.Element;
	width?: "fit-content" | "100%";
	isSlide?: boolean;
}

export const Reveal = ({ children, width = "fit-content", isSlide = true }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		} else {
			mainControls.start("hidden");
			slideControls.start("hidden");
		}
	}, [isInView]);

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className="rounded-md">
			{/* Appear motion */}
			<motion.div
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0, y: 0 },
				}}
				initial="hidden"
				animate={mainControls} 
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
			>
				{children}
			</motion.div>
			{/* Slide motion */}
			<motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial={isSlide ? "hidden" : "visible"}
				animate={slideControls}
				transition={{ duration: 0.5, ease: "easeOut" }}
				style={{
					position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          width: "100%",
          background: "var(--primary-pink)",
					zIndex: 10,
				}}
			/>
		</div>
	);
};