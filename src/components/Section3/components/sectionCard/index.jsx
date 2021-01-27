import * as React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import './index.scss'

const SectionCard = (props) => {
  return (
    <div className="section-3-card-wrapper">
      <div className="section-3-card-number">
        <p>{'0' + props.data.cardNumber}</p>
      </div>
      <div className="section-3-card-title">
        <p>{props.data.cardTitle}</p>
      </div>
      <div className="section-3-card-text">
        <BlockContent blocks={props.data.cardText}/>
      </div>
    </div>
  )
}
export default SectionCard
