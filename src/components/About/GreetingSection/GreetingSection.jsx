import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import superb from 'superb';
import { weekday } from '../../../utils/weekday';

const GreetingPara = styled(motion.p)`
  width: 100%;
  position: absolute;
  top: 40%;
  left: 80%;
  transform: translate(-80%, -40%);
`

const GreetingSection = () => {

  const wordRef = useRef(null);
  const intervalRef = useRef();

  useEffect(() => {
    const newTimeOut = setInterval(typewriterInterval, 3500);
    intervalRef.current = newTimeOut;
    return () => clearInterval(intervalRef.current);
  }, [])

  const typewriterInterval = () => {
    wordRef.current.innerText = superb.prefix();
  }
  return (
    <div className="GreetingSection">
      <GreetingPara>
        Have <span ref={wordRef}>{superb.prefix()}</span> {weekday()}
      </GreetingPara>
    </div>
  )
}

export default GreetingSection;