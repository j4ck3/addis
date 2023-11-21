"use client"
import React from 'react';
import Nav from '../sections/Nav';
import Dropdown from '../components/Dropdown';
import PaginationSelect from '../components/PaginationDropdown';
import InterviewTable from '../sections/InterviewTable';

export default function Interviews() {

  const handlePageChange = (selectedPage: number) => {
  };
  return (
    <>
        <Nav />

        <div className='container'>
          <div className='m-2 border p-2 rounded'>
            <div className="flex justify-between">
              <h2 className="text-black">Intervjuver</h2>
              <button className="btn-theme">Skapa en ny Intervjuv</button>
            </div>
            <div className="flex justify-between">
              <Dropdown options={["ADDIS", "ADDIS Ung", "ADDIS Substansfokus"]} label={'Formulärtyp'} />
              <div className="relative">
              <input
                type='text'
                placeholder='Sök'
                className='outline-0 border-2 border-green-500 rounded-md p-2' />
                <p className="absolute right-2 top-3"><i className="bi bi-search"></i></p>
              </div>
              <PaginationSelect
                totalItems={20}
                itemsPerPage={10}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
          <InterviewTable />
        </div>
    </>
  );
}
