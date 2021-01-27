import * as React from 'react'
import './index.scss'
import BlockContent from '@sanity/block-content-to-react'
import SectionCard from './components/sectionCard'

const Section3 = (props) => {
  return (
    <section className="section-3">
      <img
        src={props.data.sectionIcon.asset.url}
        alt={props.data.sectionIcon.caption}
        className="section-3-icon"
      />
      <div className="section-3-title">
        <BlockContent blocks={props.data.sectionTitle} />
      </div>
      <div className="section-3-text">
        <BlockContent blocks={props.data.sectionText} />
      </div>
      <div className="section-3-image-and-card-wrapper">
        <img
          src={props.data.sectionImage.asset.url}
          alt={props.data.sectionImage.caption}
          className="section-3-image"
        />
        <div className="section-3-cards">
          <div>
            {props.data.cards.slice(0, 2).map((card) => {
              return (
                <SectionCard data={card} key={card.cardTitle + card._key} />
              )
            })}
          </div>
          <div>
            {props.data.cards.slice(2, 4).map((card) => {
              return (
                <SectionCard data={card} key={card.cardTitle + card._key} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
