import {motion} from "framer-motion";

const Transition = (OgComponent) =>
{
    return() =>
        (
            <>
            <OgComponent/>
            <motion.div 
                className="slide-in" 
                initial={{scaleY: 1}}
                animate={{scaleY: [0, 1, 0]}}
                exit={{scaleY:0}}
                transition={{delay: -0.2, duration: 2}}
                
                />


            </>
        );
};
export default Transition;