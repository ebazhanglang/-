import Layout from '@/layout'

export default {
  path: '/setting',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/setting'),
    name: 'Setting',
    meta: {
      title: '公司设置',
      icon: 'setting'
    }
  }]
}
