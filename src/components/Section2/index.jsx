import * as React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import './index.scss'
import SectionCard from './components/sectionCard'

const Section2 = (props) => {
  return (
    <section className="section-2">
      <div className="section-2-title">
        <BlockContent blocks={props.data.sectionTitle} />
      </div>
      <div className="section-2-text">
        <BlockContent blocks={props.data.sectionText} />
      </div>
      <div className="section-2-cards">
        {props.data.cards.map((card) => {
          return <SectionCard data={card} key={card.cardTitle + card._key} />
        })}
      </div>
    </section>
  )
}
export default Section2
