<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要评论的内容(最多120字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp; 发表时间:{{item.add_time|time}}</div>
        <div class="cmt-body">{{item.content === ''? '什么都没写':item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" class="more" plain @click="getmore">
      加载更多
      <mt-spinner type="fading-circle" color="red" :size="20" class="more-move" v-if="flag"></mt-spinner>
    </mt-button>
  </div>
</template>

<script>
//this.$destroy('componentName')
import { Toast } from "mint-ui";
import { setInterval } from "timers";

export default {
  data() {
    return {
      pageIndex: 1, //默认展示第一页数据
      comments: [], //所有的评论数据
      flag: false, //动画效果的flag
      msg: "" //评论 输入的内容
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      //获取评论
      this.$http
        .get("api/getcomments/" + this.id + " ?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            // this.comments = result.body.message;
            //每当获取新评论的时候 不要把老数据清空覆盖  而是应该以老数据 拼接上新数据
            this.comments = this.comments.concat(result.body.message);
            this.flag = false; //获取数据 关闭动画
            // console.log(this.comments)
          } else {
            Toast("获取新闻失败！");
          }
        });
    },
    getmore() {
      //加载更多
      this.flag = true; //点击开启刷新动画
      this.pageIndex++; // 页码加1
      this.getComments(); //获取评论
    },
    postComment() {
      //发表评论方法
      //校验是否为空
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空");
      }
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(function(result) {
          if (result.body.status === 0) {
            //1.拼接出一个评论对象
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            //把对象加到 开头
            this.comments.unshift(cmt);
            this.msg = '';
            //清空输入框
            Toast('发表成功')
          }
        });
    }
  },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 10px 0;
    .cmt-item {
      font-size: 12px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
  .more {
    margin-bottom: 15px;
    font-size: 14px;
    padding: 5px 0;
    .more-move {
      position: absolute;
      top: 10px;
    }
  }
}
</style>
