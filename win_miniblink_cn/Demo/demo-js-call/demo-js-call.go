package main

import (
	gm "e.coding.net/gogit/go/ego/core/win_miniblink_cn"
	fm "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms"
	cs "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/controls"
	gw "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/windows"
	"fmt"
)

func main() {
	cs.App = new(gw.Provider).Init()
	cs.App.I设置ico图标("app.ico")

	frm := new(cs.Form).Init()
	frm.I设置标题("JS互操作")
	frm.I设置大小(800, 500)

	mb := new(gm.MiniblinkBrowser).Init()
	mb.SetAnchor(fm.AnchorStyle_Fill)
	mb.ResourceLoader = append(mb.ResourceLoader, new(gm.FileLoader).Init("Res", "local"))
	mb.I事件_控制台输出["show"] = func(_ *gm.MiniblinkBrowser, e gm.ConsoleEvArgs) {
		fmt.Println(e.Message())
	}
	mb.JsFuncEx("Func1", func(n1, n2 float64) int {
		return int(n1 * n2)
	})
	mb.JsFuncEx("Func2", func(fn gm.JsFunc) {
		fn(5, 6)
	})
	mb.JsFuncEx("Func3", func(param map[string]interface{}) interface{} {
		rs := param["n1"].(float64) * param["n2"].(float64)
		return struct {
			Msg   string
			Value int
		}{
			Msg:   "n1*n2",
			Value: int(rs),
		}
	})
	mb.JsFuncEx("Func5", func() interface{} {
		return func(name string) string {
			return "姓名是：" + name
		}
	})
	frm.AddChild(mb)
	frm.EvLoad["show"] = func(s cs.GUI) {
		mb.LoadUri("https://local/js_call.html")
	}
	cs.Run(frm)
}
