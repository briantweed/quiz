import {motion} from "framer-motion";
import {variants} from "@variants/page";


export default function Motion({ children }) {

    return (
        <motion.div
            layout
            key={"pageContent"}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            onAnimationStart={() => document.body.classList.add("overflow-hidden")}
            onAnimationComplete={() => document.body.classList.remove("overflow-hidden")}
        >{ children }</motion.div>
    )

}