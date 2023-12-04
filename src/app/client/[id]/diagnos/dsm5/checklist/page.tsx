import ClientInfoHead from '@/components/ClientInfoHead'
import Diagram from '@/components/Diagram'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Checklist:NextPage = () =>  {
  return (
    <>
      <div className='container shadow-md rounded p-6 my-7 mb-4'>
        <div className='flex gap-2 justify-end'>
          <Link className='btn-theme mb-2' href={'/client/id'}>Tillbaka till kliensidan</Link>
          <Link className='btn-theme mb-2' href={'/client/id'}>Skriv ut</Link>
        </div>  
        <ClientInfoHead />
        <Diagram />
      </div>
    </>
  );
}

export default Checklist