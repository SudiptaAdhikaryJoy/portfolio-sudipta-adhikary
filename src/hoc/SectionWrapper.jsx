import { motion } from "framer-motion";
import { styles } from "../style";
import { straggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
	function HOC() {
		return (
			<motion.section
				variants={straggerContainer()}
				initial="hidden"
				whileInView="show"
				// whileInHover={true}
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>

				<Component />
			</motion.section>
		);
	};

export default SectionWrapper;
