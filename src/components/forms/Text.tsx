import React from 'react'

interface Props {
    label: string
}

const Text:React.FC<Props> = ({label}) => {
  return (
    <>
        <div className="grid grid-cols-2 p-3">
            <div>{label}</div>
            <div><input className='border rounded p-1' type='text' name='text'/></div>
        </div>
    </>
  )
}

export default Text