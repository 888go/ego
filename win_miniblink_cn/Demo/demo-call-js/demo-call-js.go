package main

import (
	gm "e.coding.net/gogit/go/ego/core/win_miniblink_cn"
	fm "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms"
	cs "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/controls"
	"e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/controls/MsgBox"
	gw "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/windows"
	"fmt"
)

func main() {
	cs.App = new(gw.Provider).Init()
	cs.App.I设置ico图标("app.ico")

	//一个普通的窗体
	frm := new(cs.Form).Init()
	frm.I设置标题("JS互操作")
	frm.I设置大小(800, 500)

	mb := new(gm.MiniblinkBrowser).Init()
	mb.SetAnchor(fm.AnchorStyle_Fill)
	mb.ResourceLoader = append(mb.ResourceLoader, new(gm.FileLoader).Init("Res", "local"))
	mb.I事件_控制台输出["打印js控制台内容"] = func(_ *gm.MiniblinkBrowser, e gm.ConsoleEvArgs) {
		fmt.Println("js console:", e.Message())
	}
	mb.I事件_文档就绪["调用html中的js函数"] = func(s *gm.MiniblinkBrowser, e gm.DocumentReadyEvArgs) {
		//调用func_1
		mb.I调用js函数("func_1", "张三", 18)

		//获取func_2返回的基础数据类型
		f2rs := mb.I调用js函数("func_2")
		MsgBox.ShowInfo("func_2 result is", f2rs.(string))

		//向func_3传递一个go函数
		mb.I调用js函数("func_3", func(n1, n2 float64) int {
			//此结果会在js中打印
			return int(n1) * int(n2)
		})

		//获取func_4返回的非基本数据类型
		f4rs := mb.I调用js函数("func_4").(map[string]interface{})
		MsgBox.ShowWarn("func_4 result is", fmt.Sprint(f4rs))

		//获取并调用func_5返回的js函数
		fn := mb.I调用js函数("func_5").(gm.JsFunc)
		fn("王老五")
	}
	frm.AddChild(mb)
	frm.EvLoad["加载内容"] = func(s cs.GUI) {
		mb.LoadUri("https://local/call_js.html")
	}
	cs.Run(frm)
}
