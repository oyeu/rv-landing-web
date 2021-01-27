import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import './index.scss'
import { SECTIONS } from '../const/sections'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export const query = graphql`
  query landingData {
    allSanitySection {
      edges {
        node {
          _id
          sectionTitle {
            style
            children {
              _key
              _type
              marks
              text
            }
            _type
          }
          positionTag
          buttonText
          sectionText {
            style
            _type
            children {
              text
              marks
              _key
              _type
            }
          }
          sectionImage {
            asset {
              url
            }
            caption
          }
          sectionIcon {
            asset {
              url
            }
            caption
          }
          backgroundImage {
            asset {
              url
            }
            caption
          }
          cards {
            _key
            cardTitle
            cardText {
              style
              _type
              children {
                _key
                _type
                marks
                text
              }
            }
            cardNumber
            cardImage {
              asset {
                url
              }
              caption
            }
          }
        }
      }
    }
    allSanityFooter {
      edges {
        node {
          rvLogo {
            asset {
              url
            }
            caption
          }
          footerText
        }
      }
    }
    allSanityContactSection {
      edges {
        node {
          contactSectionForm {
            submitButtonText
            bPOSolutionList {
              bPOSolutionInputPlaceholder
              bPOSolutions
            }
            emailInputPlaceholder
            goalsInputPlaceholder
            nameInputPlaceholder
            companyNameInputPlaceholder
          }
          contactSectionText {
            children {
              marks
              _type
              text
              _key
            }
            _type
            style
            list
            _key
          }
          contactSectionTitle {
            _key
            _type
            children {
              text
              marks
              _type
              _key
            }
            list
            style
          }
        }
      }
    }
  }
`

const IndexPage = (props) => {
  const sections = props.data.allSanitySection.edges
  const contactSection = props.data.allSanityContactSection.edges[0].node
  const footer = props.data.allSanityFooter.edges[0].node

  return (
    <Layout>
      {sections
        .sort(function (a, b) {
          return a.node.positionTag - b.node.positionTag
        })
        .map((section) => {
          const RenderComponent = SECTIONS[section.node.positionTag]
          return (
            <RenderComponent
              data={section.node}
              key={section.node._id + section.node.sectionTitle}
            />
          )
        })}
     <ContactSection data={contactSection}/> 
     <Footer data={footer}/>
    </Layout>
  )
}

export default IndexPage
