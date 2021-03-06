import React from 'react';
import {Link} from 'react-router-dom';

class Hero extends React.Component {

    render() {
        
        return(
            <div className={`hero flex ${this.props.alignment}`} >
            <div className="container">
                <div class="text-area fade-in-left">
                    <h4 className="sub-title">Adam Watts Photography</h4>
                    <h1>{this.props.title}</h1>
                    <p className="text">{this.props.text}</p>

                        {this.props.buttontext &&
                        <Link to={this.props.buttonlink} className="button">{this.props.buttontext}</Link>
                        }
                        
                        {this.props.styledlinktext &&
                            <Link to={this.props.styledlink} className="styled-link" >
                            <span className="arrow before"></span>
                            {this.props.styledlinktext}
                            <span className="arrow after"></span>
                        </Link>
                        }
                </div>
            </div>
        </div>
        )
    }
  }
  export default Hero;