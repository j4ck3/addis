import React from 'react';

export default function InterviewTable() {

    const testData = [
        {
          date: '2023-01-01',
          code: 'ABC123',
          interviewer: 'John',
          formType: 'Type A',
          status: 'Pending',
        },
        {
          date: '2023-02-15',
          code: 'DEF456',
          interviewer: 'John',
          formType: 'Type B',
          status: 'Approved',
        },
        {
          date: '2023-03-30',
          code: 'GHI789',
          interviewer: 'John',
          formType: 'Type C',
          status: 'Rejected',
        },
      ];
  return (
    <>
      <table className='content-table table-sortable w-100 mt-16'>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Uno-kod</th>
            <th>Intervjuare</th>
            <th>Formulär Typ</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'odd-row' : 'even-row'}>
              <td>{item.date}</td>
              <td>{item.code}</td>
              <td>{item.interviewer}</td>
              <td>{item.formType}</td>
              <td>{item.status}</td>
              <td>
                <a href='/' className='btn-theme text-decoration-none'>
                    Öppna Klientlista
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center items-center space-x-3 my-3'>
            <a href='#'><i className='bi bi-caret-left-fill btn-theme-sec'></i></a>
            <a href='#' className='btn-theme-sec'>1</a>
            <a href='#'><i className='bi bi-caret-right-fill btn-theme-sec'></i></a>
        </div>
      <style jsx>{`
        .even-row {
          background-color: #f0f0f0;
        }

        .odd-row {
          background-color: #ffffff;
        }
      `}</style>
    </>
  );
}
