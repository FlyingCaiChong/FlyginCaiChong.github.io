(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{324:function(e,v,_){"use strict";_.r(v);var t=_(10),a=Object(t.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"flex-布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局"}},[e._v("#")]),e._v(" Flex 布局")]),e._v(" "),v("h2",{attrs:{id:"flex-容器的属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-容器的属性"}},[e._v("#")]),e._v(" flex 容器的属性")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("flex-direction")])]),e._v(" "),v("li",[v("code",[e._v("flex-wrap")])]),e._v(" "),v("li",[v("code",[e._v("flex-flow")])]),e._v(" "),v("li",[v("code",[e._v("justify-content")])]),e._v(" "),v("li",[v("code",[e._v("align-items")])]),e._v(" "),v("li",[v("code",[e._v("align-content")])])]),e._v(" "),v("h3",{attrs:{id:"flex-direction"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[e._v("#")]),e._v(" flex-direction")]),e._v(" "),v("p",[e._v("决定主轴("),v("code",[e._v("main axis")]),e._v(")方向, 取值有 "),v("code",[e._v("row|row-reverse|column|column-reverse")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("row")]),e._v(": 主轴为水平方向,起点在左端")]),e._v(" "),v("li",[v("code",[e._v("row-reverse")]),e._v(": 主轴为水平方向, 起点在右端")]),e._v(" "),v("li",[v("code",[e._v("column")]),e._v(": 主轴为竖直方向,起点在上沿")]),e._v(" "),v("li",[v("code",[e._v("column-reverse")]),e._v(": 主轴为竖直方向,起点在下沿")])]),e._v(" "),v("h3",{attrs:{id:"flex-wrap"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap"}},[e._v("#")]),e._v(" flex-wrap")]),e._v(" "),v("p",[e._v("决定项目在一条轴线上排不下时如何换行, 取值有 "),v("code",[e._v("nowrap|wrap|wrap-reverse")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("nowrap")]),e._v(": 不换行")]),e._v(" "),v("li",[v("code",[e._v("wrap")]),e._v(": 换行, 第一行在上方")]),e._v(" "),v("li",[v("code",[e._v("wrap-reverse")]),e._v(": 换行, 第一行在下方")])]),e._v(" "),v("h3",{attrs:{id:"flex-flow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow"}},[e._v("#")]),e._v(" flex-flow")]),e._v(" "),v("p",[e._v("是 "),v("code",[e._v("flex-direction")]),e._v(" 和 "),v("code",[e._v("flex-wrap")]),e._v(" 的简写形式 "),v("code",[e._v("flex-direction")]),e._v(" || "),v("code",[e._v("flex-wrap")]),e._v(", 默认值 "),v("code",[e._v("row nowrap")])]),e._v(" "),v("h3",{attrs:{id:"justify-content"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#justify-content"}},[e._v("#")]),e._v(" justify-content")]),e._v(" "),v("p",[e._v("定义项目在主轴上的对齐方式, 取值有 "),v("code",[e._v("flex-start|flex-end|center|space-between|space-around")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("flex-start")]),e._v(": 左对齐")]),e._v(" "),v("li",[v("code",[e._v("flex-end")]),e._v(": 右对齐")]),e._v(" "),v("li",[v("code",[e._v("center")]),e._v(": 居中")]),e._v(" "),v("li",[v("code",[e._v("space-between")]),e._v(": 两端对齐, 项目之间的间隔相等")]),e._v(" "),v("li",[v("code",[e._v("space-around")]),e._v(": 每个项目两侧的间隔相等. 项目之间的间隔比项目与边框的间隔大一倍.")])]),e._v(" "),v("h3",{attrs:{id:"align-items"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#align-items"}},[e._v("#")]),e._v(" align-items")]),e._v(" "),v("p",[e._v("定义项目在交叉轴("),v("code",[e._v("cross axis")]),e._v(")上的对齐方式, 取值有 "),v("code",[e._v("flex-start|flex-end|center|baseline|stretch")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("flex-start")]),e._v(": 交叉轴的起点对齐")]),e._v(" "),v("li",[v("code",[e._v("flex-end")]),e._v(": 交叉轴的终点对齐")]),e._v(" "),v("li",[v("code",[e._v("center")]),e._v(": 交叉轴的中点对齐")]),e._v(" "),v("li",[v("code",[e._v("baseline")]),e._v(": 项目的第一行文字的基线对齐")]),e._v(" "),v("li",[v("code",[e._v("stretch")]),e._v(": 如果项目未设置高度或设为 auto,将占满整个容器的高度")])]),e._v(" "),v("h3",{attrs:{id:"align-content"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[e._v("#")]),e._v(" align-content")]),e._v(" "),v("p",[e._v("定义了多根轴线的对齐方式,如果项目只有一根轴线,该属性不起作用. 取值有 "),v("code",[e._v("flex-start|flex-end|center|space-between|space-around|stretch")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("flex-start")]),e._v(": 交叉轴的起点对齐")]),e._v(" "),v("li",[v("code",[e._v("flex-end")]),e._v(": 交叉轴的终点对齐")]),e._v(" "),v("li",[v("code",[e._v("center")]),e._v(": 交叉轴的中心对齐")]),e._v(" "),v("li",[v("code",[e._v("space-between")]),e._v(": 与交叉轴两端对齐, 轴线之间的间隔平均分布")]),e._v(" "),v("li",[v("code",[e._v("space-around")]),e._v(": 每根轴线两侧的间隔相等. 轴线之间的间隔比轴线与边框的间隔大一倍.")]),e._v(" "),v("li",[v("code",[e._v("stretch")]),e._v(": 轴线占满整个交叉轴")])]),e._v(" "),v("h2",{attrs:{id:"项目的属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目的属性"}},[e._v("#")]),e._v(" 项目的属性")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("order")])]),e._v(" "),v("li",[v("code",[e._v("flex-grow")])]),e._v(" "),v("li",[v("code",[e._v("flex-shrink")])]),e._v(" "),v("li",[v("code",[e._v("flex-basis")])]),e._v(" "),v("li",[v("code",[e._v("flex")])]),e._v(" "),v("li",[v("code",[e._v("align-self")])])]),e._v(" "),v("h3",{attrs:{id:"order"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[e._v("#")]),e._v(" order")]),e._v(" "),v("p",[e._v("定义项目的排列顺序. 数值越小,排列越靠前.默认为 0")]),e._v(" "),v("h3",{attrs:{id:"flex-grow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[e._v("#")]),e._v(" flex-grow")]),e._v(" "),v("p",[e._v("定义项目的放大比例, 默认为 0, 即如果存在剩余空间, 也不放大.")]),e._v(" "),v("h3",{attrs:{id:"flex-shrink"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[e._v("#")]),e._v(" flex-shrink")]),e._v(" "),v("p",[e._v("定义项目的缩小比例, 默认为 1. 即如果空间不足,该项目将缩小.")]),e._v(" "),v("h3",{attrs:{id:"flex-basis"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[e._v("#")]),e._v(" flex-basis")]),e._v(" "),v("p",[e._v("定义了在分配多余空间之前, 项目占据的主轴空间("),v("code",[e._v("main size")]),e._v("). 默认值 "),v("code",[e._v("auto")]),e._v(", 即项目的本来大小")]),e._v(" "),v("h3",{attrs:{id:"flex"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[e._v("#")]),e._v(" flex")]),e._v(" "),v("p",[e._v("是 "),v("code",[e._v("flex-grow")]),e._v(" || "),v("code",[e._v("flex-shrink")]),e._v(" || "),v("code",[e._v("flex-basis")]),e._v(" 的简写, 默认 "),v("code",[e._v("0 1 auto")]),e._v(". 后两个值可选")]),e._v(" "),v("h3",{attrs:{id:"align-self"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#align-self"}},[e._v("#")]),e._v(" align-self")]),e._v(" "),v("p",[e._v("允许单个项目有与其他项目不一样的对齐方式, 可覆盖 "),v("code",[e._v("align-items")]),e._v(" 属性. 默认值 "),v("code",[e._v("auto")]),e._v(". 取值有 "),v("code",[e._v("auto|flex-start|flex-end|center|baseline|stretch")])])])}),[],!1,null,null,null);v.default=a.exports}}]);