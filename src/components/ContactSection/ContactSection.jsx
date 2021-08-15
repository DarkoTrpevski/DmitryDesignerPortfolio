import React, { useRef } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { Container } from '../../styles/globalStyles';
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext';


const ContactContainer = styled.section`
	min-height: 100vh;
	height: 100%!important;
	padding: 5rem 0;
  display: flex;
  font-size: 1.8rem;

`
const ContentTopPadding = styled.div`
  padding-top: 8rem;
  @media(min-width: 1120px) {
    padding-top: 20rem;
  }
`
const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-bottom: 20vh;

  .wrapper-inner {
    width: 100%;
    height: 100%!important;

    .inner-title {
      margin: 5rem 0;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      position: relative;
      padding-bottom: 15px;

      h1 {
        font-size: 1.4rem;
        font-weight: 800;
      }
    }
    .inner-body {
      letter-spacing: 0.1rem;
    }
    .back-btn {
      display: inline-block;
      margin: 1rem 0;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
    }
  }

`
const FormWrapper = styled.div`
  margin-top: 20vh;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .info-column, .form-column {
    width: 100%;

  }

  h1 {
    margin-bottom: 2.5rem;
    font-weight: 300;
  }
  .form {
    margin: 0;

    input, textarea {
      width: 100%;
      margin: 1rem 0;
      padding: 0.25rem;
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid #fff;
      color: #fff;
      resize: none;
    }
  }
  button {
    all:unset;
    display: flex;
    align-items: center;
    margin: 5rem 0;
    cursor: none;
    span {
      height: 40px;
      margin-left: 2rem;
      svg {
        width: 60px;
        height: 40px;
      }
    }
  }
`

const ContactSection = () => {

  const arrowRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
  }


  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <ContactContainer className="ContactSection">

      <Container fluid className="Container">

        <ContentTopPadding className="ContentTopPadding">

          <HeaderWrapper className="wrapper header-wrapper">
            <div className="wrapper-inner">
              <div className="inner-title">
                <h1 className="title">
                  CONTACT ME
              </h1>
              </div>
              <div className="inner-body">
                <p>
                  Do you have questions about how the process works or do you have a burning question about an ongoing project?
                Get in touch with me on the <span>form below</span>, it will be my pleasure to answer you!
              </p>
              </div>
              <div className="back-btn" onClick={() => navigate(-1)} onMouseEnter={() => onCursor('big-hovered')} onMouseLeave={() => onCursor('')}>⟵ Go Back</div>
            </div>
          </HeaderWrapper>

          <FormWrapper className="wrapper form-wrapper">
            <div className="info-column">
              <div className="header">
                <h1 className="title">
                  CONTACT INFORMATION
              </h1>
              </div>
              <div className="body">
                <p className="address">
                  1055, Avenue du Séminaire, Pavillon Louis-Jacques Casault local 4456 Quebec, Canada festivaldetheatre.ul@outlook.com
              </p>
              </div>
            </div>
            <div className="form-column">
              <form onSubmit={onSubmit} className="form">
                <h1 className="title">
                  CONTACT FORM
              </h1>
                <div className="form-row">
                  <div className="form-control">
                    <input type="text" placeholder="Your Full Name" autoComplete="off" />
                  </div>
                  <div className="form-control">
                    <input type="email" placeholder="Email" autoComplete="off" />
                  </div>
                  <div className="form-control">
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div className="form-control">
                    <textarea type="text" placeholder="Message" rows="5" />
                  </div>
                </div>
                <div className="form-row">
                  <button type="submit" onMouseEnter={() => onCursor('big-hovered')} onMouseLeave={() => onCursor('')}>
                    Send
                  <span>
                      <svg className="arrow-send"><path d="M41.6 0h-3c0 7.4 3.9 13.8 9.8 17.4H0v3h48.4c-5.9 3.6-9.8 10-9.8 17.4h3c0-9.6 7.8-17.4 17.4-17.4v-3c-9.6 0-17.4-7.8-17.4-17.4z" fill="#fff" /></svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </FormWrapper>

        </ContentTopPadding>

      </Container>

    </ContactContainer>
  )
}

export default ContactSection;