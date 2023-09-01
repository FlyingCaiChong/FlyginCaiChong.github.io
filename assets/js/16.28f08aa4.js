(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{289:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"消息传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息传递"}},[t._v("#")]),t._v(" 消息传递")]),t._v(" "),s("p",[t._v("本章描述了如何将消息表达式转换为"),s("code",[t._v("objc_msgSend")]),t._v("函数调用，以及如何通过名称引用方法。然后，本文解释了如何利用"),s("code",[t._v("objc_msgSend")]),t._v("，以及如何(如果需要的话)规避动态绑定。")]),t._v(" "),s("h2",{attrs:{id:"objc-msgsend-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objc-msgsend-函数"}},[t._v("#")]),t._v(" objc_msgSend 函数")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("Objective-C")]),t._v(" 中，消息直到运行时才会绑定到方法实现。编译器转换消息表达式，")]),t._v(" "),s("div",{staticClass:"language-objc line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-objc"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("receiver message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("转换成一个消息传递函数 "),s("code",[t._v("objc_msgSend")]),t._v(" 的调用。这个函数将接收方和消息中提到的方法名称(即方法选择器)作为它的两个主要参数:")]),t._v(" "),s("div",{staticClass:"language-objc line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-objc"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("objc_msgSend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("receiver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("任何在消息中传递的参数也会被传递给 "),s("code",[t._v("objc_msgSend")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-objc line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-objc"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("objc_msgSend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("receiver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("消息传递函数为动态绑定做所有必要的事情:")]),t._v(" "),s("ul",[s("li",[t._v("它首先查找选择器引用的过程(方法实现)。由于相同的方法可以通过不同的类来实现，因此它找到的精确过程取决于接收方的类。")]),t._v(" "),s("li",[t._v("然后调用该过程，将接收对象(指向其数据的指针)以及为该方法指定的任何参数传递给它。")]),t._v(" "),s("li",[t._v("最后，它将过程的返回值作为自己的返回值传递。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("编译器生成对消息传递函数的调用。您永远不应该在您编写的代码中直接调用它。")])]),t._v(" "),s("p",[t._v("消息传递的关键在于编译器为每个类和对象构建的结构。每个类结构都包含这两个基本元素:")]),t._v(" "),s("ol",[s("li",[t._v("指向超类的指针。")]),t._v(" "),s("li",[t._v("一个类分派表。这个表有一些条目，这些条目将方法选择器与它们标识的方法的类特定地址关联起来。"),s("code",[t._v("setOrigin::")]),t._v("方法的选择器与(实现的过程)"),s("code",[t._v("setOrigin::")]),t._v("的地址相关联 ， "),s("code",[t._v("display")]),t._v(" 方法的选择器与 "),s("code",[t._v("display")]),t._v(" 的地址相关联，等等。")])]),t._v(" "),s("p",[t._v("当创建一个新对象时，为它分配内存，并初始化它的实例变量。在对象的变量中，首先是指向其类结构的指针。这个指针称为 "),s("code",[t._v("isa")]),t._v("，它允许对象访问它的类，并通过类访问它继承的所有类。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("虽然不是严格意义上的语言的一部分，但 "),s("code",[t._v("isa")]),t._v(" 指针是对象与 "),s("code",[t._v("Objective-C")]),t._v(" 运行时系统一起工作所必需的。对象需要在结构定义的任何字段中与结构对象 "),s("code",[t._v("objc_object")]),t._v("(定义在 "),s("code",[t._v("objc/objc.h")]),t._v(" 中)“等价”。然而，您很少需要创建自己的根对象，而且从 "),s("code",[t._v("NSObject")]),t._v(" 或 "),s("code",[t._v("NSProxy")]),t._v(" 继承的对象自动具有 "),s("code",[t._v("isa")]),t._v(" 变量。")])]),t._v(" "),s("p",[t._v("类和对象结构的这些元素如图 3-1 所示。")]),t._v(" "),s("p",[t._v("图 3-1\n"),s("img",{attrs:{src:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Art/messaging1.gif",alt:"Figure 3-1  Messaging Framework"}})]),t._v(" "),s("p",[t._v("当消息被发送到一个对象时，消息传递函数跟随对象的 "),s("code",[t._v("isa")]),t._v(" 指针指向类结构，在分派表中查找方法选择器。如果它不能在那里找到选择器，"),s("code",[t._v("objc_msgSend")]),t._v(" 跟随指向超类的指针，并试图在它的分派表中找到选择器。连续的失败会导致 "),s("code",[t._v("objc_msgSend")]),t._v(" 在到达 "),s("code",[t._v("NSObject")]),t._v(" 类之前一直攀爬类层次结构。一旦定位到选择器，该函数将调用在表中输入的方法，并将接收对象的数据结构传递给它。")]),t._v(" "),s("p",[t._v("这是在运行时选择方法实现的方式—或者，用面向对象编程的行话来说，将方法动态地绑定到消息。")]),t._v(" "),s("p",[t._v("为了加快消息传递过程，运行时系统在使用方法时缓存它们的选择器和地址。每个类都有一个单独的缓存，它可以包含用于继承方法和类中定义的方法的选择器。在搜索分派表之前，消息传递例程首先检查接收对象的类的缓存(理论是使用过一次的方法可能会再次使用)。如果方法选择器在缓存中，则消息传递只比函数调用稍微慢一点。一旦一个程序运行了足够长的时间来“预热”它的缓存，它发送的几乎所有消息都会找到一个缓存的方法。当程序运行时，缓存动态增长以容纳新消息。")]),t._v(" "),s("h2",{attrs:{id:"使用隐藏参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用隐藏参数"}},[t._v("#")]),t._v(" 使用隐藏参数")]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("objc_msgSend")]),t._v(" 找到实现方法的过程时，它调用该过程并将消息中的所有参数传递给它。它还向过程传递了两个隐藏参数:")]),t._v(" "),s("ol",[s("li",[t._v("接收对象")]),t._v(" "),s("li",[t._v("方法的选择器")])]),t._v(" "),s("p",[t._v("这些参数为每个方法实现提供了关于调用它的消息表达式的两部分的显式信息。之所以说它们是“隐藏的”，是因为它们没有在定义方法的源代码中声明。在编译代码时，它们被插入到实现中。")]),t._v(" "),s("p",[t._v("虽然这些参数没有显式声明，但源代码仍然可以引用它们(就像它可以引用接收对象的实例变量一样)。方法将接收对象称为 "),s("code",[t._v("self")]),t._v("，并将它自己的选择器称为"),s("code",[t._v("_cmd")]),t._v("。在下面的例子中，"),s("code",[t._v("_cmd")]),t._v(" 指向 "),s("code",[t._v("strange")]),t._v(" 方法的选择器，"),s("code",[t._v("self")]),t._v(" 指向接收到 "),s("code",[t._v("strange")]),t._v(" 消息的对象。")]),t._v(" "),s("div",{staticClass:"language-objc line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-objc"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" strange\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id  target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTheReceiver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    SEL method "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTheMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" method "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" _cmd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("target performSelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("`self 是两个参数中比较有用的一个。事实上，这是方法定义使用接收对象实例变量的方式。")]),t._v(" "),s("h2",{attrs:{id:"获取方法地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取方法地址"}},[t._v("#")]),t._v(" 获取方法地址")]),t._v(" "),s("p",[t._v("绕开动态绑定的唯一方法是获取方法的地址，然后像调用函数一样直接调用它。在某些罕见的情况下，这可能是合适的，例如某个特定方法将连续执行多次，并且您希望避免每次执行该方法时的消息传递开销。")]),t._v(" "),s("p",[t._v("使用在 "),s("code",[t._v("NSObject")]),t._v(" 类 "),s("code",[t._v("methodForSelector:")]),t._v(" 中定义的方法，您可以请求实现方法的过程的指针，然后使用该指针调用过程。"),s("code",[t._v("methodForSelector:")]),t._v(" 返回的指针必须小心地转换为正确的函数类型。返回类型和参数类型都应该包含在强制转换中。")]),t._v(" "),s("p",[t._v("下面的例子展示了如何调用实现 "),s("code",[t._v("setfill:")]),t._v(" 方法的过程:")]),t._v(" "),s("div",{staticClass:"language-objc line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-objc"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("setter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BOOL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nsetter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BOOL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("target\n    methodForSelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setFilled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("targetList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setFilled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" YES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("传递给过程的前两个参数是接收对象("),s("code",[t._v("self")]),t._v(")和方法选择器("),s("code",[t._v("_cmd")]),t._v(")。这些参数隐藏在方法语法中，但在作为函数调用方法时必须显式地显示。")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("methodForSelector:")]),t._v(" 来绕过动态绑定可以节省消息传递所需的大部分时间。然而，只有在特定消息多次重复的情况下，节省才会显著，如上所示的 for 循环中所示。")]),t._v(" "),s("p",[t._v("注意 "),s("code",[t._v("methodForSelector:")]),t._v(" 是由 "),s("code",[t._v("Cocoa")]),t._v(" 运行时系统提供的;它不是 "),s("code",[t._v("Objective-C")]),t._v(" 语言本身的特性。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("引用: "),s("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtHowMessagingWorks.html#//apple_ref/doc/uid/TP40008048-CH104-SW1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Messaging"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);