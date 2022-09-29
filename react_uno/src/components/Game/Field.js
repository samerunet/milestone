import React from "react";
import { motion} from "framer-motion";
export default function Field({ field, deg, rotateDeg }) {
	return (
		<>
			{field.map((item) => {
				deg();
				return (
					<motion.img
						initial={{ rotate: rotateDeg[0] }}
						className={`absolute inset-0 scale-50 z-10 rotate-${rotateDeg[0]}`}
						key={item.id}
						src={item.src}
						alt={item.value}
					/>
				);
			})}
		</>
	);
}
