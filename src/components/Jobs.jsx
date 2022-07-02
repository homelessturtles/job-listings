import React, { useEffect } from 'react'
import { useState } from 'react'
import Job from './Job'
import Filter from './Filter'

const Jobs = ({data}) => {
  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(()=>{
    setJobs(data)
    console.log(data)
  }, [])

  useEffect(()=>{
    if(filters.length > 0){
      filterJobs()
    }
    else{
      setJobs(data)
    }
  }, [filters])

  const filterJobs = () => {
    setJobs(data.filter((job)=>{
      let isjob = false
      let map = {}

      map[job.role] = 1;
      map[job.level] = 1
      
      job.languages.forEach(language=>{
        map[language]=1
      })

      job.tools.forEach(tool=>{
        map[tool]=1
      })

      for(let i=0; i<filters.length; i++){
        if(map[filters[i]]){
          isjob=true
        }
        else{
          isjob = false
          break
        }
      }

      if(isjob){
        return job
      }

    }))
  }

  return (
    <div>
      {filters.length!=0 && <Filter filters={filters} setFilters={setFilters} />}
      <div className='jobs-container'>
        {jobs.map((job)=>{
          return(
            <Job key={job.id} job={job} filters={filters} setFilters={setFilters}/>
          )
        })}
      </div>
    </div>
  )
}

export default Jobs