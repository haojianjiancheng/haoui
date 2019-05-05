<template>
    <div id="app">
        <div class='large'>
            这是个非常长的div
        </div>
        <lazyCom :timeout='3000' :tag='"div"' :name='"fade"'>
            <div class="aa" key="1">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556894132780&di=2327878576b7920e16b8afed7b23ba0a&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D3660968530%2C985748925%26fm%3D191%26app%3D48%26wm%3D1%2C17%2C90%2C45%2C20%2C7%26wmo%3D0%2C0%26n%3D0%26g%3D0n%26f%3DJPEG%3Fsec%3D1853310920%26t%3D9b4f100f0eedfe853fad24a58a4e1ad7" alt="" srcset="">
            </div>
            <div class="aa" key="2">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556894132778&di=a6f04fd16fa96a683cb930453e0e8123&imgtype=0&src=http%3A%2F%2Fpic7.nipic.com%2F20100513%2F4912930_151108169809_2.jpg" alt="" srcset="">
            </div>
        </lazyCom>
        <router-link to="/test">LinkTitle</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import lazyCom from './components/lazyModular';
    export default {
        components : {
            lazyCom,
        },
        data() {
            return {
                show : false
            }
        },
        methods: {
            change() {
                this.show = !this.show
            }
        },
    }
</script>

<style lang="less" scoped>
    #app{
        position: relative;
        .large{
            height: 700px;
            width: 400px;
            background-color: red;
        }
        .fade-enter-active,.fade-leave-active{
            transition: opacity 9s;
        }
        .fade-enter,.fade-leave-to{
            opacity: 0;
        }
        .aa{
            width: 500px;
            height: 400px;
            overflow: hidden;
        }
    }
</style>