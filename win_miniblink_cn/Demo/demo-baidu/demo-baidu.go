package main

import (
	gm "e.coding.net/gogit/go/ego/core/win_miniblink_cn"
	fm "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms"
	cs "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/controls"
	gw "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/windows"
)

func main() {
	cs.App = new(gw.Provider).Init()
	cs.App.I设置ico图标("./app.ico")

	frm := new(gm.MiniblinkForm).Init()
	frm.I设置标题("miniblink窗口")
	frm.I设置大小(800, 500)
	frm.SetStartPosition(fm.FormStart_Screen_Center)
	frm.EvLoad["加载网址"] = func(s cs.GUI) {
		frm.View.LoadUri("https://www.baidu.com")
	}
	cs.Run(&frm.Form)
}
