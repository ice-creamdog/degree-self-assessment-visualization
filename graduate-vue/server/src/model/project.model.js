const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Projects = new seq.define('projects', {
  project_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '项目id'
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '用户id'
  },
  degree_level: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '学位等级'
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '学位学科'
  },
  degree_unit: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '学位单位'
  },
  basic_conditions: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: {},
    comment: '模块一、基本条件'
  },
  cultivation_of_talents: {
    type: DataTypes.JSON,
    allowNull: true,
    comment: '模块一，人才培养'
  },
  service_contribution: {
    type: DataTypes.JSON,
    allowNull: true,
    comment: '模块一，服务贡献'
  },
  work_progress: {
    type: DataTypes.JSON,
    allowNull: true,
    comment: '模块2，自我评估工作情况'
  },
  improve_plan: {
    type: DataTypes.JSON,
    allowNull: true,
    comment: '模块3，持续改进计划'
  },
  representative_national_projects: {
    type: DataTypes.JSON,
    allowNull: true,
    comment: '模块4，代表性国家级项目'
  },
  authorized_patents: {
    type: DataTypes.JSON,
    allowNull: true,
    comment: '模块5，学术型硕士研究生获授权专利'
  },
  publish_papers: {
    type: DataTypes.JSON,
    allowNull: true,
    comment: '模块六，学术型硕士研究生发表论文'
  }
})
