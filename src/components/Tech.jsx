import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../style";

const Tech = () => {
	return (
		<>
			<motion.dev variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>Introduction</p>
				<p className={`${styles.sectionHeadText} text-center`}>Technologies</p>
			</motion.dev>

			<div className="flex flex-wrap flex-row justify-center gap-10 mt-10">
				{technologies.map((technology) => (
					<div className="w-28 h-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, "tech");
