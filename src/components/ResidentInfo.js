import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ResidentInfo = ( {url} ) => {

    const [resident, setResident] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
            .catch(error => console.log(error))
    }, [url])
    
    // console.log(resident)

    return (
        <>  
            <div className="card">
                <img src={resident.image} alt=""/>
                <div className="info">
                    <p><b>{resident.name}</b></p>
                    <p className="description">origin</p>
                    <div className='status'>
                        <div className={resident?.status === "Alive" ? "btn-status2" : "btn-status1"}></div>
                        <h5>{resident?.status}</h5>
                    </div>
                    <p>{resident.origin?.name}</p>                        
                    <p className="description">Episodes where appear</p>
                    <p>{resident?.episode?.length}</p>
                </div>
            </div>        
        </>
    )
}

                

export default ResidentInfo
