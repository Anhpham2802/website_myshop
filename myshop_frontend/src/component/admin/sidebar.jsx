import React from 'react'

import { IoMdClock } from 'react-icons/io'
import { GrTechnology } from 'react-icons/gr'
import { FaRegClipboard, FaLayerGroup } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import { MdOutlineTableRows } from 'react-icons/md'
import { BsListCheck } from 'react-icons/bs'
import { TbCategory2 } from 'react-icons/tb'
import { IoSettingsOutline, IoStatsChartOutline } from 'react-icons/io5'
import { LuUser2 } from 'react-icons/lu'
import { RiShutDownLine } from 'react-icons/ri'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

// const { Header, Content, Footer, Sider } = Layout;
const { Sider } = Layout
const items = [
  {
    key: '1',
    icon: IoMdClock,
    decription: 'Dashboard',
    path: '/admin/dashboard'
  },
  {
    key: '2',
    icon: GrTechnology,
    decription: 'Hardware list',
    path: '/hardware'
  },
  {
    key: '3',
    icon: FaLayerGroup,
    decription: 'Software list',
    path: '/software'
  },
  {
    key: '4',
    icon: BsListCheck,
    decription: 'Request list',
    path: '/request'
  },
  {
    key: '5',
    icon: MdOutlineTableRows,
    decription: 'Maintain list',
    path: '/maintain'
  },
  {
    key: '6',
    icon: LuUser2,
    decription: 'Employees',
    path: '/employees'
  },
  {
    key: '7',
    icon: TbCategory2,
    decription: 'Category',
    path: '/category'
  },
  {
    key: '8',
    icon: FaRegClipboard,
    decription: 'Create asstes',
    path: '/create-assets'
  },
  {
    key: '9',
    icon: HiOutlineUserGroup,
    decription: 'Contact',
    path: '/contact'
  },
  {
    key: '10',
    icon: IoStatsChartOutline,
    decription: 'Statistical',
    path: '/statistical'
  },
  {
    key: '11',
    icon: IoSettingsOutline,
    decription: 'Setting',
    path: '/setting'
  },
  {
    key: '12',
    icon: RiShutDownLine,
    decription: 'Logout',
    path: '/logout'
  }
]
// .map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon.icon),
//   label: `${icon.decription}`,
// }));

// const pathSidebar = items.map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon.icon),
//   path: React.createElement({Link}, {to: icon.path}),
//   label: `${icon.decription}`,
// }));

const Sidebar = () => {
  return (
    <Layout hasSider className='w-1/5'>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0
        }}
        id='sidebar'
      >
        <div className='demo-logo-vertical h-[70px]'>
          <Link to='/'>
            <img src="" alt='logo' className='h-full' />
          </Link>
        </div>

        {/* <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} items={pathSidebar} className='pl-10'/> */}

        {items.map((item, index) => (
          <Menu theme='light' mode='inline' key={item.key} defaultSelectedKeys={['1']} className='px-10'>
            <Menu.Item icon={React.createElement(item.icon)} className='mx-2'>
              <Link to={item.path} key={index}>
                {item.decription}
              </Link>
            </Menu.Item>
          </Menu>
        ))}
      </Sider>

      {/* {Array.from({ length: 100, },
        (_, index) => (<React.Fragment key={index}>
          {index === 1 && index ? 'more' : '...'}
          <br />
        </React.Fragment>
        ),
      )} */}
      {/* <Layout style={{ marginLeft: 200, }}> */}
      {/* <Header /> */}

      {/* <Content style={{
          margin: '24px 16px 0',
          overflow: 'initial',
        }}
        >
          <div style={{
            padding: 24,
            textAlign: 'center',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100, },
                (_, index) => (<React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
                ),
              )
            }
          </div>
        </Content> */}
      {/* <Footer
          </Footer> */}
      {/* </Layout> */}
    </Layout>
  )
}

export default Sidebar
