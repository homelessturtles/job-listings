import { useEffect, useState } from 'react' 
import Filter from './Filter'

const Job = ({job, filters, setFilters}) => {
  const addFilter = (e) => {
    console.log(e.target.innerHTML)
    if(!filters.includes(e.target.innerHTML)){
      setFilters([...filters, e.target.innerHTML])
    }
  }
  return (
    <div className='job-item'>
      <div className='job-item-content'>
        <div className='content'>
          <div>
            <img src={require(`${job.logo}`)} alt={`${job.company} logo`} />
          </div>
          <div className='job-item-text'>
            <div className='company-container'>
            <h3>{job.company}</h3>
            <div className='new-feat'>
              {job.new && <div className='new'><p>new!</p></div>}
              {job.featured && <div className='featured'><p>featured</p></div>}
            </div>
            </div>
            <div>
              <h3>{job.position}</h3>
            </div>
            <div>
              <ul>
                <p>{job.postedAt}</p>
                <li>{job.contract}</li>
                <li>{job.location}</li>
              </ul>
            </div>        
          </div>  
        </div>
        <div className='line'></div>
        <div className='filters'>
          <div className='filter-tab' onClick={addFilter}>{job.role}</div>
          <div className='filter-tab' onClick={addFilter}>{job.level}</div>
          {job.languages.map(language=><div className='filter-tab' onClick={addFilter}>{language}</div>)}
          {job.tools.map(tool=><div className='filter-tab' onClick={addFilter}>{tool}</div>)}
        </div> 
      </div>
    </div>
  )
}

export default Job