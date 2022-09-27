import layout from '@/layout'
export default {
  path: '/attendances',
  component: layout,
  children: [
    {
      path: '',
      name: 'attendances',
      component: () => import('@/views/attendances'),
      meta: {
        title: '出勤',
        icon: 'skill'
      }
    }
  ]
}
