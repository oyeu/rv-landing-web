import * as React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import './index.scss'

const Section1 = (props) => {
  return (
    <section
      className="first-section"
      style={{
        backgroundImage: `url(${props.data.backgroundImage.asset.url})`,
      }}
    >
      <img src={props.data.backgroundImage.asset.url} alt="" />
      <div className="section-content">
        <div className="section-content-wrapper">
          <div className="section-title">
            <BlockContent blocks={props.data.sectionTitle} />
          </div>
          <div className="section-text">
            <BlockContent blocks={props.data.sectionText} />
          </div>
          <div className="section1-call-to-action">
            <button>{props.data.buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1
