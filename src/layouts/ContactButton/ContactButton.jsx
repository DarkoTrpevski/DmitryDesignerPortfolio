import React from 'react';
import styled from 'styled-components';
import { Plus } from 'react-feather';

const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 5vh;
  right: 10vw;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  padding: 1rem;
  background: #fff;
  border-radius: 0.4rem;
  z-index: 9999;
  color: #000;
`

const ContactButton = () => {
  return (
    <Button>
      <span>Contact Me</span>
      <Plus />
    </Button>
  )
}

export default ContactButton
