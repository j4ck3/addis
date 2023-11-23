"use client"
import React from 'react';
import Nav from '../../components/Nav';
import Dropdown from '../../components/Dropdown';
import PaginationSelect from '../../components/PaginationDropdown';
import InterviewTable from '../../components/InterviewTable';
import { Client } from '@/interfaces/Client';


export default function Interviews() {
  
  const handlePageChange = (selectedPage: number) => {
  };

  const testData:Client[] = [
    {
      dateCreated: '2023-01-01',
      id: 'ABC123',
      interviewer: 'John',
      formType: 'Type A',
      status: 'Pending',
    },
    {
      dateCreated: '2023-02-15',
      id: 'DEF456',
      interviewer: 'John',
      formType: 'Type B',
      status: 'Approved',
    },
    {
      dateCreated: '2023-03-30',
      id: 'GHI789',
      interviewer: 'John',
      formType: 'Type C',
      status: 'Rejected',
    },
  ];
  return (
    <>
        <Nav />

        <div className='container'>
          <div className='m-2 border p-2 rounded'>
            <div className="flex justify-between">
              <h2 className="text-black">Intervjuver</h2>
              <a href='/interviews/create' className="btn-theme">Skapa en ny Intervjuv</a>
            </div>
            <div className="flex justify-between">
              <Dropdown options={["ADDIS", "ADDIS Ung", "ADDIS Substansfokus"]} label={'Formulärtyp'} />
              <div className="relative">
              <input
                type='text'
                placeholder='Sök'
                className='outline-0 border-2 border-green-500 rounded-md p-2' />
                <p className="absolute right-3 top-[7px]"><i className="bi bi-search fs-5"></i></p>
              </div>
              <PaginationSelect
                totalItems={20}
                itemsPerPage={10}
                onPageChange={handlePageChange}
              />
            </div>
          <InterviewTable interviews={testData} />
          </div>
        </div>
    </>
  );
}
