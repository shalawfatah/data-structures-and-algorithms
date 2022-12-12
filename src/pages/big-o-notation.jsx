import React, {useEffect} from 'react'

const BigONotation = ({setShow}) => {
  useEffect(() => {
    setShow(false)
    return () => setShow(false)
}, [])
  return (
    <div className='page'>big-o-notation</div>
  )
}

export default BigONotation;