class UserController {
  async login(cxt) {
    const { user_name } = cxt.request.body
  }
}

module.export = new UserController()
