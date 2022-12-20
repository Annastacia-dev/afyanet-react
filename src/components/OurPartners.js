import React from 'react'
import { Link } from 'react-router-dom'
import bolt from '../assets/images/our partners/bolt-pharma.webp'

const OurPartners = () => {
  return (
    <div className='container fluid'>
      <div className="row">
        <div className="col-12">
            <h1>Our Partners</h1>
            <p>
            We are honored to have the following partners in our operations.
            </p>
        </div>
      </div>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-2">
                <Link>
                <div className="partner card">
                    <img src={bolt} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bolt Pharma</h5>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default OurPartners
