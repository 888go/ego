package controls

import (
	"e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/bridge"
)

type MainForm interface {
	getFormImpl() bridge.Form
}

var App bridge.Provider

func Run(form MainForm) {
	App.RunMain(form.getFormImpl())
}
