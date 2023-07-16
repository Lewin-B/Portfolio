import {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion';

interface Props {
    children: JSX.Element;
}

export const Reveal = ({children}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            //Fire the animation
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView])
    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden"} }>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: .25}}
            >
                {children}
            </motion.div>
            <motion.div 
                variants= {{
                    hidden: { left: 0},
                    visible: { left: '100%' }
                }}
                initial="hidden"
                animate={ slideControls }
                transition= {{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: 'absolute',
                    top: '4',
                    bottom: '4',
                    left: '0',
                    right: '0',
                    zIndex: '20'
                }}
            />
        </div>
    )
}