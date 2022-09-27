import layout from '@/layout'
export default {
  path: '/approvals',
  component: layout,
  children: [
    {
      path: '',
      name: 'approvals',
      component: () => import('@/views/approvals'),
      meta: {
        title: '审核',
        icon: 'tree-table'
      }
    }
  ]
}
