package main

import (
	gm "e.coding.net/gogit/go/ego/core/win_miniblink_cn"
	cs "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/controls"
	gw "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/windows"
)

func main() {
	cs.App = new(gw.Provider).Init()
	cs.App.I设置ico图标("app.ico")

	frm := new(gm.MiniblinkForm).Init()
	frm.I设置标题("miniblink窗口")
	frm.SetLocation(100, 100)
	frm.I设置大小(800, 500)
	frm.View.SetProxy(gm.ProxyInfo{
		Type:     gm.ProxyType_HTTP,
		HostName: "127.0.0.1",
		Port:     58591,
	})
	frm.EvLoad["show"] = func(s cs.GUI) {
		frm.View.LoadUri("https://www.ip.cn")
	}
	cs.Run(&frm.Form)
}
