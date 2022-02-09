import React from 'react';

class Quote extends React.Component {


    render() {
        return(
        <div className="quote">
        <div className="container">
            <div className="quote-content">
                <p>{this.props.quote}</p>
                
                <a href="https://www.facebook.com/adamwattsphoto/reviews?ref=page_internal" target="_blank" className="styled-link">
                    <span className="arrow before"></span>
                    See what everyone is say
                    <span className="arrow after"></span>
                </a>
            </div>
        </div>
    </div>
        )
    }
  }
  export default Quote;