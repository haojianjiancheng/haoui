<template>
    <div :class="['loading-box',{ 'fixed' : this.fixed }]" @click.stop
        :style="{
            'background-color' : this.bc
        }"
    >
        <div class="loading-inner">
            <div :class="['loading',className]"
                :style="{
                    'width' : this.size+'px',
                    'height' : this.size+'px',
                    'border-width' : this.size/5+'px',
                    'border-right-color' : this.color,
                }"
            ></div>
            <div class="loaing-text" v-if="text">
            {{ text }}
        </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        props : {
            fixed : {
                type : Boolean,
                default : false,
            },
            size : {
                type : Number,
                default : 10,
            },
            color : {
                type : String,
                default : 'black'
            },
            bc : {
                type : String,
                default : 'rgba(0,0,0,0.5)'
            },
            className : String,
            text : String
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
    overflow: hidden;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.fixed{
    position: fixed;
}
.loading-inner{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.loading{
    position: relative;
    border: solid transparent;
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