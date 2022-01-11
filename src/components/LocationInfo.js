import React from 'react'

const LocationInfo = ({ residents, name, type, dimension }) => {

    

    return (
        <>
        <div className='location'>
            <h2 className="text-center">{ name }</h2>
            <div className="row">
            <div className="col-sm-4 text-center">
                <b>Type: </b>
                { type }
            </div>
            <div className="col-sm-4 text-center">
                <b>Dimension: </b>
                { dimension }
            </div>
            <div className="col-sm-4 text-center">
                <b>Residents: </b>
                { residents?.length }
            </div>
            </div>
      </div>
        
    </>
    )
}

export default LocationInfo
