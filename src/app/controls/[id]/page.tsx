import React from 'react'

const Control = ({ params }: { params: { id: string } }) => {
  return (
    <div>Control: {params.id}</div>
  )
}

export default Control;