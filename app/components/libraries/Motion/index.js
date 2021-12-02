import {motion} from "framer-motion";
import {variants} from "@libraries/Motion/variants";


export default function Content({ content }) {

    return (
        <motion.div
            layout
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
        >{ content }</motion.div>
    )

}
