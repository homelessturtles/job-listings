import {useState} from 'react'
import {BsXLg} from 'react-icons/bs'

const Filter = ({filters, setFilters}) => {

  const clearFilters = () => {
    setFilters([])
  }

  const removeFilter = (filterName) => {
    setFilters(filters.filter(filter=>filter!=filterName))
  }

  return (
    <div className='filters-display-container'>
      <div className='filters-display'>
        <div className='filter-tabs-container'>
          {filters.map(filter=><div className='filter-display-tab'><h3 className='filter-display-text'>{filter}</h3><div className='x-container' onClick={()=>{removeFilter(filter)}}><BsXLg size={20}/></div></div>)}
        </div>
        <div className='clear'>
          <h3 onClick={clearFilters}>Clear</h3>
        </div>
      </div>
    </div>
  )
}

export default Filter