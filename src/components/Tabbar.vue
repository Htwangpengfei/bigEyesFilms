<template>
    <div class="tab">
      <router-link to="/home">
      <a-icon type="home" />
      <p>电影</p>
      </router-link>
      <router-link to="/video">
      <a-icon type="video-camera" />
      <p>视频</p>
      </router-link>
      <router-link to="/video">
      <a-icon type="fire" />
      <p>片段</p>
      </router-link>
      <router-link to="/video">
      <a-icon type="sketch" />
      <p>演出</p>
      </router-link>
      <router-link to="/mine">
      <a-icon type="user" />
      <p>我的</p>
      </router-link>
    </div>
</template>

<script>

export default{
   
}
</script>

<style scoped lang="less">
@main-color: #e74847;
.tab{
    height: 5rem;
    box-sizing: border-box;
    border-top:1px solid lightgray;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0; 
    width: 100%;
    line-height: 5rem;
    text-align: center;
    background-color: white;
    a{
        display: block;
        height: 5rem;
        width: 30px;
        list-style: none;
        text-decoration: none;
        text-align: center;
        color:#333;
        position: relative;
        i{
            font-size: 2rem;
        }
        p{
            font-size: 0.8rem;
            position: absolute;
            top: 15px;
            left:3px;
        }
    }
}
</style>
