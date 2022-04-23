import service from '@/axios'

const GetProjectList = () => {
  return service.request({
    method: 'get',
    url: 'api/project/list',
    params: { Id: localStorage.getItem('userId') }
  })
}

const AddProject = (data) => {
  return service.request({
    method: 'post',
    url: 'api/project/add',
    data: data
  })
}

const UpdateProject = (data) => {
  return service.request({
    method: 'patch',
    url: 'api/project/update',
    data: data
  })
}

const DeleteProject = () => {
  return service.request({
    method: 'delete',
    url: 'api/project/delete'
  })
}

const ShowProject = () => {
  return service.request({
    method: 'get',
    url: 'api/project/show'
  })
}

export { GetProjectList, DeleteProject, ShowProject, AddProject, UpdateProject }
