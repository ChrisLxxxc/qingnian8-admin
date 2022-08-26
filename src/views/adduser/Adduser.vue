<template>
  <div class="adduser">
      <el-card shadow="never">
          <el-row>
            <el-col :span="10">
              <div class="addtitle">
                <i class="el-icon-s-custom"></i> <span>添加最新用户资料</span>
              </div>
            </el-col>
          </el-row>
      </el-card>

      <el-card  shadow="hover" class="addMain">
        <el-row>
          <el-col :span="18" :offset="2">
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
                      <el-button type="primary" style="width:100%;height:50px" @click="onSubmit">确认提交</el-button>
                    </el-col>
                    <el-col :span="3">
                      <el-button style="width:100%;height:50px" @click="onReset">重置</el-button>
                    </el-col>
                  </el-row>
                </div>
              </el-form-item>

            </el-form>
          </el-col>
        </el-row>
      </el-card>

  </div>
</template>

<script>
import { getKefuInfo, addUserRow } from '@/network/networks'
import { dataRules } from '@/assets/js/validator'
export default {
  data () {
    // 多重校验格式

    return {
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
  mounted () {
    this.getKfInfo()
  },
  methods: {
    // 提交表单
    onSubmit () {
      this.$refs.adduserForm.validate((valid) => {
        if (!valid) {
          return this.$message.error('请按要求正确填写')
        }
        addUserRow(this.adduserForm).then(res => {
          this.$message.success('发布成功')
          this.$router.push('/all')
        })
      })
    },

    // 重置表单
    onReset () {
      this.$refs.adduserForm.resetFields()
    },

    getKfInfo () {
      getKefuInfo().then(res => {
        console.log(res)
        this.kefuList = res.data.kefu
        this.infoClassList = res.data.infoclass
      })
    }
  }
}
</script>

<style lang="less" scoped>
.addtitle{
  font-size:28px;
  color:#409EFF;
  span{
    padding-left:10px;
  }
}
.addMain{
  margin-top:30px;
  padding:30px 0;
}
.mySelect{
  width:120px;
}
.el-form-item{
  padding-bottom:20px;
}

</style>
