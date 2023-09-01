(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{313:function(e,t,v){"use strict";v.r(t);var o=v(10),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"与运行时交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与运行时交互"}},[e._v("#")]),e._v(" 与运行时交互")]),e._v(" "),t("p",[t("code",[e._v("Objective-C")]),e._v(" 程序在三个不同的层次上与运行时系统交互:")]),e._v(" "),t("ol",[t("li",[e._v("通过 "),t("code",[e._v("Objective-C")]),e._v(" 源代码;")]),e._v(" "),t("li",[e._v("通过在基础框架的 "),t("code",[e._v("NSObject")]),e._v(" 类中定义的方法;")]),e._v(" "),t("li",[e._v("通过直接调用运行时函数。")])]),e._v(" "),t("h2",{attrs:{id:"objective-c-源代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objective-c-源代码"}},[e._v("#")]),e._v(" Objective-C 源代码")]),e._v(" "),t("p",[e._v("在大多数情况下，运行时系统在后台自动工作。你只需要编写和编译 "),t("code",[e._v("Objective-C")]),e._v(" 源代码就可以使用它。")]),e._v(" "),t("p",[e._v("当编译包含 "),t("code",[e._v("Objective-C")]),e._v(" 类和方法的代码时，编译器会创建实现语言动态特征的数据结构和函数调用。数据结构捕获类和类别定义以及协议声明中的信息;它们包括在 "),t("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjectiveC/Introduction/introObjectiveC.html#//apple_ref/doc/uid/TP30001163",target:"_blank",rel:"noopener noreferrer"}},[e._v("Objective-C 编程语言"),t("OutboundLink")],1),e._v("中"),t("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjectiveC/Chapters/ocDefiningClasses.html#//apple_ref/doc/uid/TP30001163-CH12",target:"_blank",rel:"noopener noreferrer"}},[e._v("定义类"),t("OutboundLink")],1),e._v("和"),t("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjectiveC/Chapters/ocProtocols.html#//apple_ref/doc/uid/TP30001163-CH15",target:"_blank",rel:"noopener noreferrer"}},[e._v("协议"),t("OutboundLink")],1),e._v("时讨论的类和协议对象，以及从源代码中提取的方法选择器、实例变量模板和其他信息。如"),t("RouterLink",{attrs:{to:"/iOS/Objective-C/runtime_message.html"}},[e._v("消息传递")]),e._v("中所述，主体运行时函数是发送消息的函数。它由源代码消息表达式调用。")],1),e._v(" "),t("h2",{attrs:{id:"nsobject-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nsobject-方法"}},[e._v("#")]),e._v(" NSObject 方法")]),e._v(" "),t("p",[t("code",[e._v("Cocoa")]),e._v(" 中的大多数对象都是 "),t("code",[e._v("NSObject")]),e._v(" 类的子类，因此大多数对象都继承了它定义的方法。(值得注意的例外是 "),t("code",[e._v("NSProxy")]),e._v(" 类;更多信息请参见"),t("RouterLink",{attrs:{to:"/iOS/Objective-C/runtime_forward.html"}},[e._v("消息转发")]),e._v("。)因此，它的方法建立了每个实例和每个类对象固有的行为。然而，在少数情况下，"),t("code",[e._v("NSObject")]),e._v(" 类仅仅定义了一个模板，用于描述如何做某事;它本身并不提供所有必要的代码。")],1),e._v(" "),t("p",[e._v("例如，"),t("code",[e._v("NSObject")]),e._v("类定义了一个 "),t("code",[e._v("description")]),e._v(" 实例方法，该方法返回一个描述类内容的字符串。这主要用于调试- "),t("code",[e._v("GDB")]),e._v(" "),t("code",[e._v("print-object")]),e._v(" 命令打印从该方法返回的字符串。"),t("code",[e._v("NSObject")]),e._v(" 对这个方法的实现不知道类包含什么，所以它返回一个包含对象名称和地址的字符串。"),t("code",[e._v("NSObject")]),e._v(" 的子类可以实现这个方法来返回更多的细节。例如，基础类 "),t("code",[e._v("NSArray")]),e._v(" 返回它所包含的对象的描述列表。")]),e._v(" "),t("p",[e._v("一些 "),t("code",[e._v("NSObject")]),e._v(" 方法只是在运行时系统中查询信息。这些方法允许对象执行内省。这类方法的例子有 "),t("code",[e._v("class 方法")]),e._v("，它要求一个对象识别它的类;")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("isKindOfClass:")]),e._v(" 和 "),t("code",[e._v("isMemberOfClass:")]),e._v("，它们测试对象在继承层次结构中的位置;")]),e._v(" "),t("li",[t("code",[e._v("respondsToSelector:")]),e._v(" 表示一个对象是否可以接受一个特定的消息;")]),e._v(" "),t("li",[t("code",[e._v("constoprotocol:")]),e._v(" 表示一个对象是否声明要实现特定协议中定义的方法;")]),e._v(" "),t("li",[e._v("以及 "),t("code",[e._v("methodForSelector:")]),e._v("，它提供了方法实现的地址。")])]),e._v(" "),t("p",[e._v("像这样的方法赋予对象自我反省的能力。")]),e._v(" "),t("h2",{attrs:{id:"运行时函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行时函数"}},[e._v("#")]),e._v(" 运行时函数")]),e._v(" "),t("p",[e._v("运行时系统是一个动态共享库，它有一个公共接口，由位于 "),t("code",[e._v("/usr/include/objc")]),e._v(" 目录下的头文件中的一组函数和数据结构组成. 其中许多函数允许你使用普通的 "),t("code",[e._v("C")]),e._v(" 来复制编译器在你编写 "),t("code",[e._v("Objective-C")]),e._v(" 代码时所做的事情。其他功能则是通过 "),t("code",[e._v("NSObject")]),e._v(" 类的方法导出的功能的基础。这些功能使开发运行时系统的其他接口成为可能，并产生增强开发环境的工具;在 "),t("code",[e._v("Objective-C")]),e._v(" 中编程时不需要它们。然而，在编写 "),t("code",[e._v("Objective-C")]),e._v(" 程序时，一些运行时函数可能有时是有用的。所有这些函数都记录在 "),t("a",{attrs:{href:"https://developer.apple.com/documentation/objectivec/objective_c_runtime",target:"_blank",rel:"noopener noreferrer"}},[e._v("Objective-C 运行时引用"),t("OutboundLink")],1),e._v("中。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("引用: "),t("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtInteracting.html#//apple_ref/doc/uid/TP40008048-CH103-SW1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interacting with the Runtime"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);