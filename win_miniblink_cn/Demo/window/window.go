package main

import (
	cs "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/controls"
	gw "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/windows"
)

func main() {
	cs.App = new(gw.Provider).Init()
	cs.App.I设置ico图标("app.ico")

	frm := new(cs.Form).Init()
	frm.I设置标题("this is form")

	ctrl := new(cs.Control).Init()
	ctrl.SetBgColor(0x2FAEE3)

	frm.AddChild(ctrl)

	cs.Run(frm)
}
