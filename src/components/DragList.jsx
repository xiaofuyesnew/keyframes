import { useContext, useState, useEffect } from 'react'
import { Context } from '../store/index'

import { Empty, Row, Col } from 'antd'

const DragList = ({ list = [], loading = false }) => {
  const [dragData, setDragData] = useState({
    drag: false,
    index: 0,
    hover: 0,
  })

  const onDragStart = (e) => {
    console.log(e)
    setDragData({
      ...dragData,
      drag: true,
    })
  }

  const onDragEnd = (e) => {
    console.log(e)
    setDragData({
      ...dragData,
      drag: false,
    })
  }

  const onDragOver = (e) => {
    console.log(e)
  }

  const onDrop = (e) => {
    console.log(e)
  }

  return (
    <Row gutter={[16, 16]}>
      <Col className="" span={4}>
        <div
          className={`bg-slate-400 w-[100%] h-[100px] ${
            dragData.drag && dragData.index === 0 ? 'opacity-50' : ''
          }`}
          draggable
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        ></div>
      </Col>
      <Col className="" span={4} draggable>
        <div className="bg-slate-400 w-[100%] h-[100px]"></div>
      </Col>
      <Col className="" span={4} draggable>
        <div className="bg-slate-400 w-[100%] h-[100px]"></div>
      </Col>
      <Col className="" span={4} draggable>
        <div className="bg-slate-400 w-[100%] h-[100px]"></div>
      </Col>
      <Col className="" span={4} draggable>
        <div className="bg-slate-400 w-[100%] h-[100px]"></div>
      </Col>
      <Col className="" span={4} draggable>
        <div className="bg-slate-400 w-[100%] h-[100px]"></div>
      </Col>
      <Col className="" span={4} draggable>
        <div className="bg-slate-400 w-[100%] h-[100px]"></div>
      </Col>
      <Col className="" span={4} draggable>
        <div className="bg-slate-400 w-[100%] h-[100px]"></div>
      </Col>
    </Row>
  )

  if (list.length) {
  } else {
    return <Empty className="!pt-[100px]" description={false} />
  }
}

export default DragList
