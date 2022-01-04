<template>
    <div class="select-card">
        <p>全城 <a-icon type="caret-down" /></p>
        <p>品牌 <a-icon type="caret-down" /></p>
        <p>特色 <a-icon type="caret-down" /></p>
    </div>
</template>
<script>
export default {
    name:"selectcard"
}
</script>
<style lang="less" scoped>
    .select-card{
        height: 45px;
        display: flex;
        box-sizing: border-box;
        border-bottom: 1px solid lightgray;
        p{
            box-sizing: border-box;
            width: 100%;
            margin-top: 10px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            &:nth-of-type(2){
                border-left: 1px solid lightgray;
                border-right: 1px solid lightgray;
            }
        }
    }
</style>