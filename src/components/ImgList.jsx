import { Button } from 'antd'
import { CloudUploadOutlined } from '@ant-design/icons'

import DragList from './DragList'

const ImgList = () => {
  return (
    <div className="options">
      <Button type="primary" className="!flex items-center" icon={<CloudUploadOutlined />}>
        upload images
      </Button>
      <DragList />
    </div>
  )
}

export default ImgList
