import React, {useState} from "react";
import { motion } from "framer-motion";
import Animated from "react-mount-animation";
export default function Field({ field, deg, rotateDeg, rem, remRandom }) {
    const [isMounted, setIsMounted] = useState(false);

	return (
		<>
			{field.map((item) => {
				deg();
				remRandom();
				return (
                    <Animated.div show={isMounted}
                    mountAnim={` 
                        0% {opacity: 0}
                        100% {opacity: 1}
                    `} >
					<motion.img
						initial={{ rotate: rotateDeg[0], left: rem[0], top: "12rem" }}
						animate={{ scale: 1 }}
						transition={{ type: "spring", damping: 1 }}
						className={`absolute inset-0 scale-50 z-10 `}
						key={item.id}
						src={item.src}
						alt={item.value}
                        />
                     </Animated.div>
				);
			})}
		</>
	);
}
