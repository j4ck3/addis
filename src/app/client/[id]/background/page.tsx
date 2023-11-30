'use client';
import React from 'react';
import { NextPage } from 'next/types';

import ClientInfoHead from '@/components/ClientInfoHead';

const Backgrund: NextPage = () => {
  return (
    <>
      <ClientInfoHead />
      <div className='container'>
        <div className='flex justify-end'>
          <button className='bg-green-800 hover:bg-green-600 text-white text-sm py-2 px-4 rounded transition-all duration-300 border-2 border-green-300'>Generera Text</button>
        </div>
        <div>rich text editor</div>
        <div className='grid grid-cols-2 gap-4 my-4'>
          <div className='flex justify-center'>
            <div>
              <p className='mt-3 p-3 bg-cyan-950 border-2 rounded border-cyan-500 text-cyan-500 text-sm'>
                <i className='bi bi-info-circle-fill me-2'></i>
                Observera att detta formulär endast påverkar utskriften och inte
                uppdaterar din användares information permanent.
              </p>
              <div className='mb-4'>
                <label className='text-md'>Namnförtydligande</label>
                <input
                  className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full'
                  type='text'
                />
              </div>
              <div className='mb-4'>
                <label className='text-md'>Telefon</label>
                <input
                  className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full'
                  type='text'
                />
              </div>
              <div className='mb-4'>
                <label className='text-md'>Adress</label>
                <input
                  className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full'
                  type='text'
                />
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <div className='mb-4'>
                  <label className='text-md'>Postnummer</label>
                  <input
                    className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full'
                    type='text'
                  />
                </div>
                <div className='mb-4'>
                  <label className='text-md'>Ort</label>
                  <input
                    className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full'
                    type='text'
                  />
                </div>
              </div>
              <div className='flex justify-end'>
                <button className='btn-theme mb-2'>Spara</button>
              </div>
            </div>
          </div>
          <div>
            <div className='font-bold p-0 m-0'>kommentarer</div>
            <div className='border border-black rounded p-2'>
              <div className='px-1 p-t'>
                Fråga 14: Äter inget när hon går på amfetamin{' '}
              </div>
              <div className='px-1 p-t'>Fråga 22: Dricker väldigt sällan</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backgrund;
