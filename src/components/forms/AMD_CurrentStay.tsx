import React from 'react'
import R_T from '../inputs/R_T'
import RadioGroup from '../inputs/Radio'

const AMD_CurrentStay: React.FC = () => {
   const options = [
      { label: 'Hemmet', value: '1' },
      { label: 'Behandlingshem/Institution', value: '2' },
      { label: 'Fängelse', value: '3' },
   ]
   return (
      <>
         <RadioGroup options={options} />
         <R_T label={'Annat'} />
      </>
   )
}

export default AMD_CurrentStay
