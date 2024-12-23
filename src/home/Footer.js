import React from 'react'
import './HomeStyle.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='homef'>
        <div className='footerdiv'>
            <div className='footerdiv1'>
                <p>
                    <span>400 University Drive Suite 200 Coral</span><br/>
                    <span>Gables,</span><br/>
                    <span>FL 33134 USA</span>
                </p>
            </div>
            <div className='footerdiv2'>
                <div>
                    <p>Links</p>
                    <ul class="footerList">
                        <li>
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/shop">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/blog">
                                Blog
                            </Link>     
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li> 
                    </ul>
                </div>
            </div>
            <div className='footerdiv3'>
            <div>
                    <p>Help</p>
                    <ul class="footerList">
                        <li>
                            <Link className="nav-link active">
                                Payment Options
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link">
                                Returns
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link">
                                Privacy Policies
                            </Link>     
                        </li> 
                    </ul>
                </div>
            </div>
            <div className='footerdiv4'>
                <div>
                    <p>Newsletter</p>
                    <div>
                        <input type="email" className="footerinput" placeholder='Enter Your Email Address'/>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className='footerdiv5'>
                
            </div>
        </div>
        <div className='footerLine'>
            <div></div>
        </div>
        <div className='footerText'>
            <div>
                <p>Copyright © 2024 Ibraam Magdy. All rights reverved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
