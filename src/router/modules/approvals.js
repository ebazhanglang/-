import layout from '@/layout'
export default {
  path: '/approvals',
  name: 'approvals',
  component: layout,
  children: [
    {
      path: '',
      component: () => import()
    }
  ]
}
