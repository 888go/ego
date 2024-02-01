package main

import (
	gm "e.coding.net/gogit/go/ego/core/win_miniblink_cn"
	fm "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms"
	cs "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/controls"
	gw "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/windows"
)

func main() {
	cs.App = new(gw.Provider).Init()
	cs.App.I设置ico图标("app.ico")

	mb := new(gm.MiniblinkBrowser).Init()
	mb.I设置大小(700, 400)
	mb.SetLocation(50, 50)
	//固定4边与父级的距离
	mb.SetAnchor(fm.AnchorStyle_Left | fm.AnchorStyle_Top | fm.AnchorStyle_Right | fm.AnchorStyle_Bottom)

	frm := new(cs.Form).Init()
	frm.I设置标题("普通窗口")
	frm.I设置大小(800, 500)
	frm.SetLocation(100, 100)
	frm.SetBgColor(0x2FAEE3)
	frm.AddChild(mb)
	frm.EvLoad["show"] = func(s cs.GUI) {
		mb.LoadUri("https://www.baidu.com")
	}
	cs.Run(frm)
}
