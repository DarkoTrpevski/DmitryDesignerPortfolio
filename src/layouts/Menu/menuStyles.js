import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: none;
  width: 120px;
  height: 100%!important;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #fff;
  @media (min-width: 980px) {
    display: block;
  }
`

export const MenuButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  z-index: 999;

  @media(min-width: 1120px) {
    margin-left: 5px;
  }

  button {
    all: unset;
    cursor: pointer;
    width: 48px;
    height: 48px;

    span {
      &::before, &::after {
        content: '';
        display: block;
        width: 2px;
        height: 48px;
        position: absolute;
        background: #fff;
        left: 50%;
        top: 50%;
        will-change: transform;
        transition: all 1s cubic-bezier(0.645,  0.045,0.355, 1);
      }

      &::before {
        transform: translate(5px, -50%) scale(0.7) rotate(0);
      }
      &::after {
        transform: translate(-5px, -50%) scale(0.7) rotate(180deg);
      }
    }
  }
`

export const MenuContentHolder = styled.div`
`

export const MenuManagerWrapper = styled.div`
`