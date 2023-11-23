import { Client } from '@/interfaces/Client';
import { NextPage } from 'next';
import React from 'react';

interface Props {
  interviews: Client[]
}

const InterviewTable: NextPage<Props> = ({ interviews }) => {
  return (
    <>
      <table className='content-table table-sortable w-100 mt-16'>
        <thead>
          <tr>
            <th>Datum</th>
            <th>UNO-kod</th>
            <th>Intervjuare</th>
            <th>Formulär Typ</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {interviews.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-green-200' : ''}>
              <td>{item.dateCreated}</td>
              <td>{item.id}</td>
              <td>{item.interviewer}</td>
              <td>{item.formType}</td>
              <td>{item.status}</td>
              <td>
                <a href='/client/id' className='btn-theme text-decoration-none'>
                    Öppna Klientlista
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center items-center my-4 space-x-3'>
            <a href='#'><i className='bi bi-caret-left-fill btn-theme-sec'></i></a>
            <a href='#' className='btn-theme-sec'>1</a>
            <a href='#'><i className='bi bi-caret-right-fill btn-theme-sec'></i></a>
        </div>
    </>
  );
};

export default InterviewTable
