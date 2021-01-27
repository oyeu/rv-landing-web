import * as React from 'react'
import './index.scss'
import { StaticQuery, graphql } from 'gatsby'

const headerQuery = graphql`
  query headerData {
    allSanityHeader {
      edges {
        node {
          buttonText
          rvLogo {
            asset {
              url
            }
          }
        }
      }
    }
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <StaticQuery
        query={headerQuery}
        render={(data) => {
          const headerData = data.allSanityHeader.edges[0].node
          return (
            <header>
              <div>
                <img className="rv-logo" src={headerData.rvLogo.asset.url} />
              </div>
              <div>
                <button className="contact-mission-button">
                  {headerData.buttonText}
                </button>
              </div>
            </header>
          )
        }}
      />
      <main>{children}</main>
    </>
  )
}

export default Layout
