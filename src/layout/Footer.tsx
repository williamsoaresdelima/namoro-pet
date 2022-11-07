import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'

interface IFooter {
  setLoading: (data: boolean) => void,
}

function Footer({ setLoading } : IFooter) {
  return (
  <ContactForm setLoading={setLoading}/>    
  )
}

export default Footer