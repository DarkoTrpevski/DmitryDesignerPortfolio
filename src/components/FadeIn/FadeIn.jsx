import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const TestContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const FadeIn = ({ children, shouldRepeat=false }) => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(shouldRepeat) {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    } else {
      if (inView) {
        controls.start("visible");
      }
    }

  }, [controls, inView]);


  return (
    <TestContainer
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
        hidden: { opacity: 0, transition: { duration: 1 } }
      }}
     className="FadeIn">
      {children}
    </TestContainer>
  );
}
export default FadeIn;