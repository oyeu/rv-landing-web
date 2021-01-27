import * as React from 'react'
import './index.scss'
import BlockContent from '@sanity/block-content-to-react'

const Section4 = (props) => {
  return (
    <section
      className="section-4"
      style={{
        backgroundImage: `url(${props.data.backgroundImage.asset.url})`,
      }}
    >
      <img src={props.data.backgroundImage.asset.url} alt="" />

      <div className='section-4-content'>
        <div className='section-4-content-wrapper'>
        <div className='section-4-title'>
          <BlockContent blocks={props.data.sectionTitle} />
        </div>
        <div className='section-4-text'>
          <BlockContent blocks={props.data.sectionText} />
        </div>

        </div>
      </div>
    </section>
  )
}

export default Section4
