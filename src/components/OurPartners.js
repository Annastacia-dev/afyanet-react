import React from 'react'
import { Link } from 'react-router-dom'

const OurPartners = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
            <h1>Our Partners</h1>
            <p>
            We are honored to have the following partners in our operations.
            </p>
        </div>
      </div>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <Link>
                <div className="card">
                    <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default OurPartners
