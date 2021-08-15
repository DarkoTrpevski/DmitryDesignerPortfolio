import React from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { GlobalProvider } from "./src/context/globalContext";

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>
    {element}
  </GlobalProvider>
)
export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>
    <AnimateSharedLayout type="crossfade">
      {element}
    </AnimateSharedLayout>
  </AnimatePresence>
);

export const shouldUpdateScroll = ({ routerProps }) => {
  const isHash = routerProps.location.hash;
  const gatsbyWrapper = document.getElementById('gatsby-focus-wrapper');
  /* Do not scroll top if the route contain a hash */
  gatsbyWrapper && !isHash && (gatsbyWrapper.scrollTop = 0);
  return isHash && isHash.replace('#', '');
};