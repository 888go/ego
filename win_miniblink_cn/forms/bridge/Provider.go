package bridge

import (
	f "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms"
)

type FormParam struct {
	HideInTaskbar bool
	HideIcon      bool
}

type Provider interface {
	RunMain(form Form)
	Exit(code int)
	I设置ico图标(file string)
	GetScreen() f.Screen
	ModifierKeys() map[f.Keys]bool
	MouseIsDown() map[f.MouseButtons]bool
	MouseLocation() f.Point
	AppDir() string

	NewForm(param FormParam) Form
	NewControl() Control
	NewMsgBox() MsgBox
}
