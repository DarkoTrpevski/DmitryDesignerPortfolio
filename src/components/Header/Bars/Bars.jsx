import React from 'react';
import { useGlobalDispatchContext, useGlobalStateContext } from '../../../context/globalContext';
import { BarsContainer, BarsWrapper, Bar } from './barStyles';

const Bars = ({ onClick, navState }) => {

  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }


  const mouseEntered = () => {
    onCursor('hovered');
  }
  const mouseLeft = () => {
    onCursor('');
  }

  return (
    <BarsContainer onClick={onClick} onMouseEnter={mouseEntered} onMouseLeave={mouseLeft} className={`Bars ${navState && navState.clicked ? "clicked" : ""}`}>
      <BarsWrapper className="bars-wrapper">
        <Bar className="Bar Bar-1"></Bar>
        <Bar className="Bar Bar-2"></Bar>
        <Bar className="Bar Bar-3"></Bar>
      </BarsWrapper>
    </BarsContainer>
  )
}

export default Bars