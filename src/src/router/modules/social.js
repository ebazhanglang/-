import Layout from '@/layout'

export default {
  path: '/social',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/social'),
    name: 'Social',
    meta: {
      title: '社保',
      icon: 'table'
    }
  }]
}
