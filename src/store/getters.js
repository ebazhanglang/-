const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
<<<<<<< HEAD
  name: state => state.user.name
=======
  name: state => state.user.userInfo.username,
  userId: state => state.user.userInfo.userId,
  staffPhoto: state => state.user.userInfo.staffPhoto,
  harssTime: state => state.user.harssTime,
  companyId: state => state.user.userInfo.companyId
>>>>>>> feature/employees
}
export default getters
