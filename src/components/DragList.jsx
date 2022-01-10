import { useContext, useState } from 'react'
import { Context } from '../store/index'

const DragList = ({ list = [] }) => {
  return (
    <div>
      {list.map((item, index) => (
        <div className=""></div>
      ))}
    </div>
  )
}

export default DragList
