import { Button } from 'antd'
import { CloudUploadOutlined } from '@ant-design/icons'

const ImgList = () => {
  return (
    <div className="options">
      <Button type="primary" className="!flex items-center" icon={<CloudUploadOutlined />}>
        upload images
      </Button>
    </div>
  )
}

export default ImgList
