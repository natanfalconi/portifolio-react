import React from 'react'

const Pagination = (props) => {
    return (
        <>
            {Array.from(Array(props.pages), (item, index) => {
                return (
                    <button value={index} onClick={(e) => props.setCurrentPage(Number((e.target.value)))}>{index + 1}</button>
                )
            })}
        </>
    )
}

export default Pagination;