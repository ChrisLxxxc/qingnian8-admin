<template>
  <div class="updateOut">
      <el-dialog width="60%" title="修改客户数据" :close-on-click-modal="false" :visible="showDialog" @close="clickClose" >

        <el-form status-icon :model="adduserForm" :rules="adduserRules" ref="adduserForm" label-width="100px">
              <el-form-item label="客户名称" prop="nickname">
                <el-input v-model.trim="adduserForm.nickname"></el-input>
              </el-form-item>

              <el-form-item label="联系电话" prop="contact">
                <el-input v-model.trim="adduserForm.contact"></el-input>
              </el-form-item>

              <el-form-item label="QQ" prop="qq">
                <el-input v-model.trim="adduserForm.qq"></el-input>
              </el-form-item>

              <el-form-item label="微信" prop="weixin">
                <el-input v-model.trim="adduserForm.weixin"></el-input>
              </el-form-item>

              <el-form-item label="咨询专业" prop="zhuanye">
                <el-input placeholder="请输入内容" v-model.trim="adduserForm.zhuanye" >
                  <el-select v-model="adduserForm.infoclass" slot="prepend" placeholder="请选择" class="mySelect">
                    <el-option  :value="item.classname" v-for="item in infoClassList" :key="item.id"></el-option>
                  </el-select>
                </el-input>
              </el-form-item>

              <el-form-item label="信息来源" prop="laiyuan">
                <el-input v-model.trim="adduserForm.laiyuan"></el-input>
              </el-form-item>

              <el-form-item label="所在地区" prop="dizhi">
                <el-input v-model.trim="adduserForm.dizhi"></el-input>
              </el-form-item>

              <el-form-item label="选择客服" prop="kefu">
                <el-select v-model="adduserForm.kefu" multiple>
                  <el-option :value="item.classname" v-for="item in kefuList" :key="item.id"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <div style="padding-top:20px">
                  <el-row :gutter="20">
                    <el-col :span="6">
                      <el-button type="primary" style="width:100%;height:50px" @click="onUpdate">确认提交</el-button>
                    </el-col>
                    <el-col :span="3">
                      <el-button style="width:100%;height:50px" @click="onReset">重置</el-button>
                    </el-col>
                  </el-row>
                </div>
              </el-form-item>

            </el-form>

      </el-dialog>
  </div>
</template>

<script>
import { getKefuInfo, getRowUser, updateRowUser } from '@/network/networks'
import { dataRules } from '@/assets/js/validator'
export default {
  data () {
    return {
      showDialog: false,
      rowid: 0,
      kefuList: [],
      infoClassList: [],
      adduserForm: {
        nickname: '',
        contact: '',
        qq: '',
        weixin: '',
        laiyuan: '',
        dizhi: '',
        kefu: [],
        zhuanye: '',
        infoclass: ''
      },
      adduserRules: {
        nickname: [
          { required: true, message: '请输入客户姓名', trigger: 'blur' }
        ],
        contact: [
          { validator: dataRules, trigger: 'blur' }
        ],
        qq: [
          { validator: dataRules, trigger: 'blur' }
        ],
        weixin: [
          { validator: dataRules, trigger: 'blur' }
        ],
        laiyuan: [
          { required: true, message: '信息来源必须填写', trigger: 'blur' }
        ],
        zhuanye: [
          { required: true, message: '专业描述是必填的', trigger: 'blur' }
        ],
        kefu: [
          { type: 'array', required: true, message: '请选择客服', trigger: 'change' }
        ]
      }
    }
  },

  watch: {
    rowid (val) {
      this.getUserFun()
    }
  },
  mounted () {
    this.getKfInfo()
    var userRes = window.sessionStorage.getItem('userRes')
    if (userRes) {
      window.sessionStorage.removeItem('userRes')
    }
  },

  methods: {
    // 获取用户数据
    getUserFun () {
      getRowUser(this.rowid).then(res => {
        console.log(res.data.results)
        this.$refs.adduserForm.resetFields()
        res.data.results.kefu = res.data.results.kefu.split('-')
        this.adduserForm = res.data.results
        var userRes = res.data.results
        userRes = JSON.stringify(userRes)
        window.sessionStorage.setItem('userRes', userRes)
      })
    },

    // 重置表单
    onReset () {
      this.getUserFun()
    },

    // 提交修改
    onUpdate () {
      this.$refs.adduserForm.validate(valid => {
        if (valid) {
          updateRowUser(this.adduserForm).then(res => {
            this.$message.success('更新成功')
            this.showDialog = false
            this.$parent.getAllData()
            console.log(res)
          })
        }
      })
    },
    // 关闭对话框
    clickClose () {
      window.sessionStorage.removeItem('userRes')
      this.showDialog = false
    },

    getKfInfo () {
      getKefuInfo().then(res => {
        this.kefuList = res.data.kefu
        this.infoClassList = res.data.infoclass
      })
    }
  }
}
</script>

<style>
.mySelect{width:120px;}
</style>
