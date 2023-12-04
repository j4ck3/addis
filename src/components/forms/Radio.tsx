import React from 'react'

interface Props {
    label: string
}

const Radio:React.FC<Props> = ({label}) => {
  return (
    <>
        <div className="grid grid-cols-2 p-3">
            <div>{label}</div>
            <div><input type='radio' name='radio' value={label}/></div>
        </div>
    </>
  )
}

export default Radio    