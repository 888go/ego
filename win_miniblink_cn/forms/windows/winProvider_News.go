package windows

import (
	br "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/bridge"
)

var (
	msgbox = new(winMsgBox).init()
)

func (_this *Provider) NewForm(param br.FormParam) br.Form {
	return new(winForm).init(_this, param)
}

func (_this *Provider) NewControl() br.Control {
	return new(winControl).init(_this)
}

func (_this *Provider) NewMsgBox() br.MsgBox {
	return msgbox
}
