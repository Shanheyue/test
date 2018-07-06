const navItems = [
  {
    id: '1',
    name: '首页',
    icon: 'v-icon-home-copy',
    path: '/dashboard'
  },
  {
    id: '2',
    name: '店铺管理',
    icon: 'v-icon-dianpu',
    path: '/dashboard/shop',
    children: [
      {
        id: '2-1',
        name: '店铺地址',
        path: '/dashboard/address'
      }
    ]
  },
  {
    id: '3',
    name: '订单管理',
    icon: 'v-icon-order',
    path: '/dashboard/order'
  },
  {
    id: '4',
    name: '数据分析',
    icon: 'v-icon-chart',
    path: '/dashboard/chart',
    children: [
      {
        id: '4-1',
        name: '基本图表',
        path: '/dashboard/basicChart'
      },
      {
        id: '4-2',
        name: '动态图表',
        path: '/dashboard/activedChart'
      }
    ]
  },
  {
    id: '7',
    name: '表格',
    icon: 'v-icon-biaoge',
    path: '/dashboard/table'
  },
  {
    id: '9',
    name: '拖拽',
    icon: 'v-icon-drag',
    path: '/dashboard/drag'
  }
]
export default navItems
