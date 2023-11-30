import ClientInfoHead from '@/components/ClientInfoHead'
import Diagram from '@/components/Diagram'
import { NextPage } from 'next'
import React from 'react'

const Checklist:NextPage = () => {
  return (
    <>
        <div className="container shadow-md rounded p-6 my-7 mb-4">
        <ClientInfoHead />
        <Diagram />
      </div>
    </>
  )
}

export default Checklist
