import { useContext, useState } from 'react'
import { Layout, Tabs } from 'antd'

import Provider, { Context } from './store/index'
import ImgList from './components/ImgList'

const { Header, Footer, Sider, Content } = Layout
const { TabPane } = Tabs

const tabList = [
  {
    text: '图片列表',
  },
  {
    text: '精灵图',
  },
  {
    text: '代码',
  },
]

const App = () => {
  const { state, dispatch } = useContext(Context)
  const { data, setData } = useState({
    currentTab: 0,
    spriteData: '',
  })

  return (
    <Provider>
      <Layout className="w-screen h-screen flex flex-col">
        <Header className="!h-[40px] shadow flex items-center">
          <img src="/images/logo.svg" className="w-[24px] h-[24px]" />
          <span className="h-[100%] ml-[10px] text-white flex items-center">
            Keyframes
          </span>
        </Header>
        <Layout>
          <Layout>
            <Content className="w-[100%] h-[100%] p-[25px]">
              <div className="w-[100%] h-[100%] bg-white p-[25px]">
                <Tabs defaultActiveKey="0">
                  {tabList.map((item, index) => (
                    <TabPane tab={item.text} key={index}>
                      {index === 0 && <ImgList />}
                      {index === 1 && <></>}
                      {index === 2 && <></>}
                    </TabPane>
                  ))}
                </Tabs>
              </div>
            </Content>
            <Footer className="flex items-center justify-center h-[40px] !p-[0] shadow-lg bg-white">
              <span className="mr-[6px]">
                Keyframes © 2021 - present | Created By
              </span>
              <a href="https://github.com/xiaofuyesnew">xiaofuyesnew</a>
            </Footer>
          </Layout>
          <Sider className="!bg-white" width={400}></Sider>
        </Layout>
      </Layout>
    </Provider>
  )
}

export default App
