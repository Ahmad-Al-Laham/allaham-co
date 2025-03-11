import React from 'react'
import ContactHeader from './components/contactHeader'
import ContactMap from './components/ContactMap'
import ErrorBoundary from './components/ErrorBoundary'
import ContactForm from './components/ContactForm'
const index = () => {
  return (
    <div>
      <ContactHeader/>
      <ContactMap/>
      <ContactForm/>

    </div>
  )
}

export default index
