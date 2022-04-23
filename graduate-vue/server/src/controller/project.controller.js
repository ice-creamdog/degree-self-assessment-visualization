import { findProjects } from '../service/project.service'
class ProjectController {
  async getProjectList(ctx) {
    // 解析参数
    const { pageNum = 1, pageSize = 10 } = ctx.request.query
    // 分页返回
    // 操作数据库
    try {
      const res = await findProjects(pageNum, pageSize)
      if (res) {
        ctx.body = {
          code: 0,
          message: '获取项目列表成功',
          result: res
        }
      }
    } catch (error) {
      console.error(error)
    }
    // 返回结果
    console.log(ctx)
  }
}

export default new ProjectController()
