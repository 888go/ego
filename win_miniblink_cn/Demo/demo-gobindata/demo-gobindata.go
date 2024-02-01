package main

import (
	gm "e.coding.net/gogit/go/ego/core/win_miniblink_cn"
	"e.coding.net/gogit/go/ego/core/win_miniblink_cn/Demo/Res"
	fm "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms"
	cs "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/controls"
	gw "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/windows"
	url2 "net/url"
	"strings"
)

func main() {
	cs.App = new(gw.Provider).Init()
	cs.App.I设置ico图标("app.ico")

	frm := new(gm.MiniblinkForm).Init()
	frm.I设置标题("加载内嵌的静态资源")
	frm.I设置大小(800, 500)
	frm.SetStartPosition(fm.FormStart_Screen_Center)
	frm.View.ResourceLoader = append(frm.View.ResourceLoader, new(GobindataLoader))
	frm.EvLoad["show"] = func(s cs.GUI) {
		frm.View.LoadUri("http://local/gobindata.html")
	}
	cs.Run(&frm.Form)
}

type GobindataLoader struct {
}

func (_this *GobindataLoader) Domain() string {
	return "local"
}

func (_this *GobindataLoader) ByUri(uri *url2.URL) []byte {
	rs, err := Res.Asset(strings.TrimLeft(uri.Path, "/"))
	if err != nil {
		return nil
	}
	return rs
}
