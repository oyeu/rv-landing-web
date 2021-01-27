import * as React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import './index.scss'

const SectionCard = (props) => {
  return (
    <div className="section-5-card-wrapper">
      <img
        src={props.data.cardImage.asset.url}
        alt={props.data.cardImage.caption}
      />
    </div>
  )
}
export default SectionCard