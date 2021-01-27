import * as React from 'react'
import './index.scss'
import BlockContent from '@sanity/block-content-to-react'
import SectionCard from './components/sectionCard'

const Section5 = (props) => {
  return (
    <section className="section-5">
      
      <div className="section-5-title">
        <BlockContent blocks={props.data.sectionTitle} />
      </div>
      <div className="section-5-text">
        <BlockContent blocks={props.data.sectionText} />
      </div>
      <div className="section-5-cards">
        <div>
        {props.data.cards.slice(0,4).map((card) => {
          return <SectionCard data={card} key={card.cardTitle + card._key} />
        })}
        </div> 
        <div>
        {props.data.cards.slice(4,8).map((card) => {
          return <SectionCard data={card} key={card.cardTitle + card._key} />
        })}
        </div> 
      </div>
      <img src={props.data.sectionImage.asset.url} alt={props.data.sectionImage.caption} className='section-5-image'/>
    </section>
  )
}

export default Section5
