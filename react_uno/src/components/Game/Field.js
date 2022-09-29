import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Player1.css";

export default function Field({ field, deg, rotateDeg, rem, remRandom }) {
	return (
		<>
			{field.map((item) => {
				deg();
				remRandom();
				return (
					<>
						<motion.img
							initial={{ rotate: rotateDeg[0], left: rem[0], top: "12rem" }}
							animate={{ scale: 1 }}
							transition={{ type: "spring", damping: 1 }}
							className={`absolute inset-0 scale-50 z-10  fieldCard`}
							key={item.id}
							src={item.src}
							alt={item.value}
						/>
					</>
				);
			})}
		</>
	);
}
