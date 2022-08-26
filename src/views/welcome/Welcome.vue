<template>
  <div class="welcome">
      <el-card>
        <div slot="header" class="hdTitle">
            <i class="el-icon-message-solid"></i>
            <span>欢迎使用青年帮后台管理系统</span>
        </div>
        <div class="main">
            <el-row :gutter="30">
                <el-col :span="12">
                    <el-card shadow="never">
                        <el-calendar>
                        </el-calendar>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card class="tianqi"  shadow="never">
                        <div slot="header" class="tqTitle">
                            <i class="el-icon-sunny"></i>
                            <span>最近3天的天气</span>
                        </div>
                        <div class="tqMain">

                            <el-card shadow="hover" class="item" v-for="(item,idx) in tqList" :key="idx">
                                <div class="itemInner">
                                    <div class="left">
                                        <div class="icon">
                                            <img :src="getTqIcon(item.conditionIdDay)" alt="">
                                        </div>
                                        <div class="num">
                                            {{item.tempNight+"~"+item.tempDay}}
                                        </div>
                                        <div class="text">
                                            {{item.conditionDay}}/{{item.windDirDay}}
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="day">{{getDayTxt(idx)}}</div>
                                        <div class="time">{{item.predictDate}}</div>
                                    </div>
                                </div>
                            </el-card>

                        </div>
                    </el-card>

                    <el-card class="present"  shadow="never">
                        <div slot="header" class="preTitle">
                            <i class="el-icon-document-copy"></i>
                            <span>项目介绍与说明</span>
                        </div>
                        <div class="preMain">
                            本项目由青年帮团队开发，版权所有青年帮所有@copyright QingNianBang，未经授权请勿进行商业使用，商业合作请与管理员联系。
                        </div>
                    </el-card>

                </el-col>
            </el-row>
        </div>
      </el-card>
  </div>
</template>

<script>
import { tqData } from '@/network/networks'
export default {
  data () {
    return {
      tqList: []
    }
  },
  methods: {
    // 获取具体的天数
    getDayTxt (idx) {
      var day
      if (idx == 0) {
        day = '今天'
        return day
      } else if (idx == 1) {
        day = '明天'
        return day
      } else if (idx == 2) {
        day = '后天'
        return day
      } else {

      }
    },
    // 天气图标
    getTqIcon (num = 0) {
      return require('@/assets/images/tqIcon/W' + num + '.png')
    },
    // 获取天气的函数
    getTianqi () {
      tqData().then(res => {
        console.log(res)
        this.tqList = res.data.data.forecast
        var myData = { sessList: this.tqList, time: Date.now() }
        myData = JSON.stringify(myData)
        window.sessionStorage.setItem('myData', myData)
      })
    }
  },
  mounted () {
    var myData = window.sessionStorage.getItem('myData')
    myData = JSON.parse(myData)
    console.log(myData)
    if (myData) {
      var oldDate = myData.time
      var nsDate = Date.now()
      if (nsDate - oldDate > 1000 * 60 * 60) {
        this.getTianqi()
      } else {
        this.tqList = myData.sessList
      }
    } else {
      console.log('没有缓存')
      this.getTianqi()
    }
  }
}
</script>

<style lang="less" scoped>
.welcome{
    .hdTitle{
        font-size:30px;
        color:#409EFF;
        font-weight: 600;
        span{
            padding-left:10px;
        }
    }
    .tqTitle{
        font-size:20px;
        color:#67C23A;
        i{
            padding-right: 5px;
        }
    }
    .tqMain{
        .item{
            margin-bottom:15px;
            .itemInner{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .left{
                    display: flex;
                    align-items: center;
                    .icon{
                        img{
                            width:48px;
                            height: 48px;
                        }
                    }
                    .num{
                        font-size: 38px;
                        font-weight: 600;
                        padding:0 20px;
                        color:#333;
                        position: relative;
                        &::after{
                            content: "";
                            display: block;
                            width:10px;
                            height: 10px;
                            border:2px solid #333;
                            position: absolute;
                            right:5px;
                            top:0;
                            border-radius: 50%;
                            box-sizing: border-box;
                        }
                    }
                    .text{
                        font-size:16px;
                        color:#409EFF;
                        transform: translateY(10px);
                    }
                }
                .right{
                    text-align: right;
                    .day{
                        font-size:30px;
                        font-weight: 600;
                        color:#67C23A;
                        padding-bottom:10px;
                    }
                    .time{
                        font-size:14px;
                        color:#aaa;
                        letter-spacing: 2px;
                    }
                }
            }
        }
    }

    .present{
        margin-top:30px;
        .preTitle{
            font-size:20px;
            color:#409EFF;
            i{
                padding-right:5px;
            }
        }
        .preMain{
            min-height: 85px;
            color:#888;
            line-height: 1.8em;
        }
    }
}
</style>
