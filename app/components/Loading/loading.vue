<template>
    <div class="loading-box" :style="style" @click.stop>
        <div class="loading-inner">
            <div class="loading"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            width : {
                default : '100%',
                type : String
            },
            height : {
                default : '100%',
                type : String
            }
        },
        data() {
            return {
                style : {
                    width : this.width,
                    height : this.height
                }
            }
        },
    }
</script>

<style lang="less" scoped>
.loading-box{
    position: absolute;
    top: 0;
    left: 0;
    .loading-inner{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
.loading{
    width: 10px;
    height: 10px;
    border: 3px solid transparent;
    border-right-color: black;
    border-radius: 50%;
    animation: loading .5s linear infinite;
}
@keyframes loading {
    from {
        transform: rotate(0)
    }
    to {
        transform: rotate(360deg)
    }
}
</style>