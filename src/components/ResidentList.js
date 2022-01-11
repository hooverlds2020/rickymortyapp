import React from 'react'
import ResidentInfo from './ResidentInfo'
import '../styles.css'

const ResidentList = ( {residents, pageZero, pageTen, setPageZero, setPageTen} ) => {

// console.log(residents)
    const pagination = (index) =>{
        setPageZero(0 + (10 * index))
        setPageTen(10 + (10 * index))
    }

    let page = residents?.slice(pageZero, pageTen)

    let amountPage = (Math.ceil(residents?.length / 10))

    let array = []

    for (let index = 0; index < amountPage; index++) {
        array.push(index)       
    }

    return (
        <>
            <hr/>
            <h2 className='title-residents'>Residents</h2>
            
            <div className='container-card'>            
                {
                    page?.map( resident =>
                        <ResidentInfo url={ resident } key={ resident }/>
                        )
                }
            </div>
            <div class="pagination">
                {
                    array?.map((value, index) =>
                        <button className='pages' onClick={() => pagination(index)} key={value}>{index + 1}</button>
                    )

                }
            </div>
        </>
    )
}

export default ResidentList
