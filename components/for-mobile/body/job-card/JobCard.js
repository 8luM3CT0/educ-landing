//front-end
import React from 'react'
import { 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Button, 
    Icon } 
    from '../../..'
//back-end
import { useState } from 'react'
import { CiRead } from 'react-icons/ci'

function JobCard({
    doc
}) {
    const [jobInfo, setJobInfo] = useState(false)

  return (
    <>
    <div className='mobJobCard'>

    </div>
    </>
  )
}

export default JobCard