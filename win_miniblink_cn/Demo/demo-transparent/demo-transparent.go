package main

import (
	gm "e.coding.net/gogit/go/ego/core/win_miniblink_cn"
	br "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/bridge"
	cs "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/controls"
	gw "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/windows"
)

func main() {
	cs.App = new(gw.Provider).Init()

	frm := new(gm.MiniblinkForm).InitEx(br.FormParam{
		HideInTaskbar: true,
	})
	frm.TransparentMode()
	frm.SetLocation(100, 100)
	frm.I设置大小(300, 300)
	frm.SetTopMost(true)
	frm.View.ResourceLoader = append(frm.View.ResourceLoader, new(gm.FileLoader).Init("Res", "local"))
	frm.EvLoad["show"] = func(s cs.GUI) {
		frm.View.LoadUri("http://local/transparent.html")
	}
	cs.Run(&frm.Form)
}
