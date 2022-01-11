import { useContext, useEffect, useState } from 'react'
import { Context } from '../store/index'
import { Button, message, Spin } from 'antd'
import { CloudUploadOutlined } from '@ant-design/icons'

import DragList from './DragList'

const checkImgs = (imgList) => {}

const ImgList = () => {
  const [data, setData] = useState({
    loading: false
  })
  const { state, dispatch } = useContext(Context)

  const handleChange = (e) => {
    console.log(e.currentTarget.files)
  }

  return (
    <div className="options">
      <Button
        type="primary"
        className="!flex items-center relative"
        icon={<CloudUploadOutlined />}
      >
        上传图片
        <input
          className="absolute top-0 left-0 w-[100%] h-[100%] opacity-0"
          type="file"
          multiple
          onChange={handleChange}
        />
      </Button>
      <Spin spinning={data.loading}>
        <DragList />
      </Spin>
    </div>
  )
}

export default ImgList
