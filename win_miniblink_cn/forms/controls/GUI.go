package controls

import fm "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms"

type GUI interface {
	GetHandle() uintptr
	GetBound() fm.Bound
	I设置大小(width, height int)
	SetLocation(x, y int)
	SetBgColor(color int32)
	IsInvoke() bool
	Invoke(fn func())
	InvokeEx(fn func(state interface{}), state interface{})
	Enable(b bool)
	IsEnable() bool
	GetParent() GUI
	GetOwner() GUI
}
