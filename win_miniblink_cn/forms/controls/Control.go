package controls

import (
	fm "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms"
	br "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/bridge"
)

type Control struct {
	BaseUI

	impl   br.Control
	anchor fm.AnchorStyle
}

func (_this *Control) Init() *Control {
	_this.impl = App.NewControl()
	_this.BaseUI.Init(_this, _this.impl)
	_this.anchor = fm.AnchorStyle_Left | fm.AnchorStyle_Top
	_this.I设置大小(200, 200)
	return _this
}

func (_this *Control) GetAnchor() fm.AnchorStyle {
	return _this.anchor
}

func (_this *Control) SetAnchor(style fm.AnchorStyle) {
	_this.anchor = style
	if _this.parent != nil {
		if ct, ok := _this.parent.(Container); ok {
			bn := ct.GetBound()
			ct.I设置大小(bn.Width, bn.Height-1)
			ct.I设置大小(bn.Width, bn.Height)
		}
	}
}

func (_this *Control) toControl() br.Control {
	return _this.impl
}

func (_this *Control) setParent(parent GUI) {
	_this.parent = parent
}
func (_this *Control) setOwner(owner GUI) {
	_this.owner = owner
}
