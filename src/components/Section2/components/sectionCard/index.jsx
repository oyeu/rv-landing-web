import * as React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import './index.scss'

const SectionCard = (props) => {
  return (
    <div className="section-2-card-wrapper">
      <img
        src={props.data.cardImage.asset.url}
        alt={props.data.cardImage.caption}
      />
      <div className="section-2-card-title">
        <p>{props.data.cardTitle}</p>
      </div>
      <div className="section-2-card-text">
        <BlockContent blocks={props.data.cardText} />
      </div>
    </div>
  )
}
export default SectionCard
