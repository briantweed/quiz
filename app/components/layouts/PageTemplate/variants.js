module.exports = {

    variants: {
        initial: {
            opacity: 0,
            x: -10
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    }

}
