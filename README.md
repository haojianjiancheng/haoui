# haoui
组件库
* appbar
    - [x] title 
    - [x] slot left
    - [x] slot right
* button
    - [x] icon
    - [x] right
    - [x] small
    - [x] large
    - [x] fullWidth
    - [x] round
    - [x] fab
    - [x] flat
    - [x] disabled
* icon
    - [x] value
* form
    - [x] model
    - [x] autoValidate
    * formItem
        - [ ] icon
        - [x] prop
        - [x] label
        - [x] labelPosition
        - [x] rules
        - [x] errorText
        - [x] helpText
* minix
    * haoinput
        - [x] type
        - [x] prop 

#### appBar 
* props
    参数 | 作用 | 类型 | 可选值 | 默认值
    --- | --- | --- | :---: | :---:  
    title | 标题 | String | - | -
* slots
    名称 | 作用
    --- | ---
    left | 左边的内容
    right | 右边的内容
    default | 中间的内容，覆盖title

#### button 
* props

    参数 | 作用 | 类型 | 可选值 | 默认值
    --- | --- | --- | :---: | :---:  
    icon | 图标 | String | - | -
    right | 图标位置 | Boolean | - | false
    small | 小按钮 | Boolean | - | false
    large | 大按钮 | Boolean | - | false
    fullWidth | 长按钮 | Boolean | - | false
    round | 圆角 | Boolean | - | false
    fab | 浮动（按钮阴影）| Boolean | - |false
    flat | 扁平 | Boolean | - | false
    disabled | 禁用 | Boolean | - | false

#### icon
* props 
    参数 | 作用 | 类型 | 可选值 | 默认值
    --- | --- | --- | :---: | :---:  
    value | 图标 | String | - | -

#### form
* props
    参数 | 作用 | 类型 | 可选值 | 默认值
    --- | --- | --- | :---: | :---:  
    model | 数据对象 | Object | - | -
    autoValidate | 自动验证 | Boolean | - | true
* slots
    名称 | 作用
    --- | ---
    default | 只有formItem才有用
* methods
    名称 | 作用 | 参数
    --- | --- | :---:
    validate | 表单验证 | -

#### formItem
* props
    参数 | 作用 | 类型 | 可选值 | 默认值
    --- | --- | --- | :---: | :---:  
    icon | 图标 | String | - | -
    prop | 表单组件中数据对象(model)的key（必填）| String | - | -
    label | 标签名 | String | - |-
    labelPosition | 标签名定位 | String | top/left/right | -
    rules | 验证（`{ validate : (value)=>{} , message : " " }`）函数验证规则，message错误提示信息 | Array | - | -
    errorText | 错误信息 | - | - | -
    helpText | 帮助信息 | - | - | -
* slots
    名称 | 作用
    --- | ---
    default | 必须插入input组件