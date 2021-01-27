import * as React from 'react'
import './index.scss'
import BlockContent from '@sanity/block-content-to-react'
import Form from './components/Form'

const ContactSection = props => {
  return (
    <section className='contact-section'>
      <div className='contact-section-title'>
        <BlockContent blocks={props.data.contactSectionTitle}/>
      </div>
      <div className='contact-section-text'>
        <BlockContent blocks={props.data.contactSectionText}/>
      </div>
      <Form data={props.data.contactSectionForm}/>
    </section>
  )
}

export default ContactSection