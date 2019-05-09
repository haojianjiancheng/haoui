<template>
    <div class="loading">
        <span class="loading-text">
            加载中。。。
        </span>
    </div>
</template>

<script>
    export default {
        name : 'aa',
        mounted () {
            console.log("这是loading");
            ;
        },
    }
</script>

<style lang="less" scoped>
.loading{
    position: absolute;
    top: 0;
    width: 500px;
    height: 500px;
    background-color: orange;
}
.loading-text{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 36%;
    font-size: 40px;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    animation: textenter steps(4,end) 1s infinite;
}
@keyframes textenter{
    from {
        width: 3em
    }
    to {
        width: 7em;
    }
}
</style>