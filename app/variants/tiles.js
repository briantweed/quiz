module.exports = {

    container: {
        initial: { opacity: 1 },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 0.13,
                staggerChildren: 0.13,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: "easeOut"
            }
        }
    },

    item: {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: "easeOut"
            }
        }
    }

}