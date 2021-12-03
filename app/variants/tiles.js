module.exports = {

    container: {
        initial: { opacity: 1 },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 0.15,
                staggerChildren: 0.1,
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