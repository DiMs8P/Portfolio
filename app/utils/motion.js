export const fadeIn = (direction, type, delay, duration = 1) => {
    return {
        hidden: {
            x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
            y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};
