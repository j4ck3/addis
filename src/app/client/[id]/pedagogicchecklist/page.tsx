import ClientInfoHead from '@/components/ClientInfoHead'
import  Dropdown from '@/components/Dropdown'
import { NextPage } from 'next'
import React from 'react'

const PedagogicChecklist:NextPage = () => {

  const options = ['Alkohol', 'Sömn-/lugnande', 'Opioider', 'Cannabinoider' ]
  return (
    <>
        <div className="container shadow-md rounded p-6 my-7 mb-4">
            <ClientInfoHead />
            <Dropdown options={options} label={'Substans'} />
            <h3 className=''>1. Försummat plikter</h3>
            <p className="ms-3 p-0 m-0 bg-green-200"><span className='mx-5'>35.</span> Använder mer än mer än föreskrivet</p>  
            <p className="ms-3 p-0 m-0"><span className='mx-5'>35.</span> Använder mer än mer än föreskrivet</p>  
            <p className="ms-3 p-0 m-0 bg-green-200"><span className='mx-5'>35.</span> Använder mer än mer än föreskrivet</p>  
            <p className="ms-3 p-0 m-0"><span className='mx-5'>35.</span> Använder mer än mer än föreskrivet</p>  
        </div>
    </>
  )
}

export default PedagogicChecklist
