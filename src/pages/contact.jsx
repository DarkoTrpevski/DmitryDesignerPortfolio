import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from "../layouts/Layout";
import ContactSection from '../components/ContactSection/ContactSection';

const ContactPage = () => {
  return (
    <AnimatePresence>
      <Layout>
        <ContactSection />
      </Layout>
    </AnimatePresence>
  )
}

export default ContactPage;