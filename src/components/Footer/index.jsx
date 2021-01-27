import * as React from 'react'
import './index.scss'

const Section4 = props => {
    console.log(props);
  return (
    <footer>
      <img src={props.data.rvLogo.asset.url} alt={props.data.rvLogo.caption} className='footer-logo'/>
      <div className='footer-text'> 
        <p>{props.data.footerText}</p>
      </div>
    </footer>
  )
}

export default Section4