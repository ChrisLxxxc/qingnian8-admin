import { validateFun } from '@/network/networks'
import { myDate } from '@/assets/js/common'
import that from '../../main'

export var dataRules = (rule, value, callback) => {
  var dataFun
  if (value == '') {
    dataFun = callback()
    return dataFun
  }

  var userRes = window.sessionStorage.getItem('userRes')
  userRes = JSON.parse(userRes)
  if (userRes) {
    if (rule.field == 'contact' && userRes.contact == value) {
      dataFun = callback()
      return dataFun
    } else if (rule.field == 'qq' && userRes.qq == value) {
      dataFun = callback()
      return dataFun
    } else if (rule.field == 'weixin' && userRes.weixin == value) {
      dataFun = callback()
      return dataFun
    }
  }

  var fieldTxt
  if (rule.field == 'contact') {
    fieldTxt = '电话'
    if (!(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(value))) {
      dataFun = callback(new Error('手机格式错误'))
      return dataFun
    }
  } else if (rule.field == 'qq') {
    fieldTxt = 'QQ'
    if (!(/^[1-9][0-9]{4,14}$/.test(value))) {
      dataFun = callback(new Error('QQ格式错误'))
      return dataFun
    }
  } else if (rule.field == 'weixin') {
    fieldTxt = '微信'
    if (!(/^[a-zA-Z0-9_-]{5,19}$/.test(value))) {
      dataFun = callback(new Error('微信格式错误'))
      return dataFun
    }
  }

  var myObj = {
    keyword: value,
    field: rule.field
  }

  // 发送请求，确定有无存在
  validateFun(myObj).then(res => {
    console.log(res.data)
    var content = res.data.content
    if (res.data.code == 403) {
      var text = `
          ${fieldTxt}为<span style='color:red'>${value}</span>的用户已经存在，<br/>
          客户名称是<span style='color:red'>${content.nickname}</span>,<br/>
          录入时间为<span style='color:red'>${myDate(content.posttime, 1)}</span>,<br/>
          请勿重复提交!!!
        `

      that.$confirm(text, '提示', {
        showCancelButton: false,
        showConfirmButton: false,
        type: 'warning',
        dangerouslyUseHTMLString: true
      })
      dataFun = callback(new Error('该' + fieldTxt + '已经存在'))
      return dataFun
    } else {
      dataFun = callback()
      return dataFun
    }
  })
}
