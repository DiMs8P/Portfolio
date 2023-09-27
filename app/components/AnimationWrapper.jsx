import React from 'react'
import {useIsMobile} from "../../app/utils/mobileDetection";
import {motion} from "framer-motion";

const AnimationWrapper = ({children, className, variants, initial, whileInView, viewport}) => {
    const isMobile = useIsMobile();
    if (isMobile){
        return <div className={className}>{children}</div>
    }
    else{
        return <motion.div
            className = {className}
            variants={variants}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
        >
            {children}
        </motion.div>
    }
}

export default AnimationWrapper