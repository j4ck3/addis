import React from 'react'
import Nav from '../../../components/Nav'

export default function Create() {
  return (
    <>
    <Nav />
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-[400px] w-full">
        <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Formulärtyp
        </label>
          <i className="bi bi-caret-down-fill absolute right-4 top-8"></i>
          <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            <option defaultValue="Välj ett alternativ" disabled>Välj ett alternativ</option>
            <option value="ADDIS">ADDIS</option>
            <option value="ADDIS Ung">ADDIS Ung</option>
            <option value="ADDIS Substansfokus">ADDIS Substansfokus</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ålder
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          UNO-kod
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div className="mb-6 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Kön
        </label>
        <i className="bi bi-caret-down-fill absolute right-4 top-8"></i>
          <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            <option selected disabled value="">Välj ett alternativ</option>
            <option value="">Man</option>
            <option value="">Kvinna</option>
            <option value="">Icke-binär</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="btn-theme w-100 focus:outline-none focus:shadow-outline items-end"
            type="button"
          >
            Spara
          </button>
        </div>
      </form>
    </div>
    </>
  )
}
