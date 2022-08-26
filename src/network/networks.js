import { request, request2 } from './request'

export function loginAxios (config) {
  return request2({
    url: '/login.php',
    params: config
  })
}

export function tqData () {
  return request({
    url: '/tianqi3day.php'
  })
}

export function userAllFun (config) {
  return request({
    url: '/yxList.php',
    params: config
  })
}

export function delUserRow (id) {
  return request({
    url: '/yxDelRow.php',
    params: {
      id: id
    }
  })
}

export function getKefuInfo () {
  return request({
    url: '/yxLoad.php'
  })
}

export function addUserRow (myObj) {
  return request({
    url: '/yxAdd.php',
    params: myObj
  })
}

export function validateFun (myObj) {
  return request({
    url: '/yxValidate.php',
    params: myObj
  })
}

// 根据id获取一条记录
export function getRowUser (id) {
  return request({
    url: '/yxRow.php',
    params: {
      id
    }
  })
}

// 更新一条用户记录
export function updateRowUser (obj) {
  return request({
    url: '/yxUpdata.php',
    params: obj
  })
}

// 获取一周的排名
export function paiMingNetwork (val) {
  return request({
    url: '/dataPaiming.php',
    params: {
      pullTime: val
    }
  })
}

// 获取专业分布
export function fenbuNetwork (val) {
  return request({
    url: '/dataFenBu.php',
    params: {
      pullTime: val
    }
  })
}

// 获取客服数据量
export function kefuDataNetwork (val) {
  return request({
    url: '/dataKefu.php',
    params: {
      pullTime: val
    }
  })
}

// 获取客户总量
export function userAllNetwork () {
  return request({
    url: '/dataZong.php'
  })
}
