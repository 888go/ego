package main

import (
	gm "e.coding.net/gogit/go/ego/core/win_miniblink_cn"
	窗口 "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms"
	cs "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/controls"
	gw "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/windows"
)

func main() {
	cs.App = new(gw.Provider).Init()
	cs.App.I设置ico图标("app.ico")

	//绑定了miniblink的窗体，内部实现了一些用js控制窗体的功能
	frm := new(gm.MiniblinkForm).Init()
	frm.I设置标题("miniblink窗口")
	frm.SetLocation(100, 100)
	frm.I设置大小(800, 500)
	frm.I设置边框样式(窗口.I窗口边框_无)
	frm.NoneBorderResize()
	frm.View.ResourceLoader = append(frm.View.ResourceLoader, new(gm.FileLoader).Init("Res", "local"))
	frm.EvLoad["show"] = func(s cs.GUI) {
		frm.View.LoadUri("http://local/window.html")
	}
	cs.Run(&frm.Form)
}
