import { useContext, useState, useEffect } from 'react'
import { Context } from '../store/index'

import { Empty, Spin } from 'antd'

const DragList = ({ list = [], loading = false }) => {
  const onDragStart = (e) => {
    console.log(e)
  }

  const onDragEnd = (e) => {
    console.log(e)
  }

  const onDragOver = (e) => {
    console.log(e)
  }

  const onDrop = (e) => {
    console.log(e)
  }

  if (list.length) {
    return (
      <ul className="">
        <div
          className="w-[100px] h-[100px] bg-slate-600"
          draggable
          onDragStart={onDragStart}
        ></div>
        {list.map((item, index) => (
          <div className="test" draggable onDragstart={onDragStart}></div>
        ))}
      </ul>
    )
  } else {
    return <Empty className="!mt-[100px]" description={false} />
  }
}

export default DragList
