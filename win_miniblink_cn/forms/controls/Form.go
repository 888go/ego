package controls

import (
	fm "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms"
	br "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/bridge"
)

type Form struct {
	BaseUI
	BaseContainer

	EvState map[string]func(s GUI, state fm.FormState)
	OnState func(state fm.FormState)

	impl          br.Form
	title         string
	showInTaskbar bool
	border        fm.FormBorder
	state         fm.FormState
	startPos      fm.FormStart
}

func (_this *Form) getFormImpl() br.Form {
	return _this.impl
}

func (_this *Form) InitEx(param br.FormParam) *Form {
	_this.impl = App.NewForm(param)
	_this.BaseUI.Init(_this, _this.impl)
	_this.BaseContainer.Init(_this)
	_this.EvState = make(map[string]func(GUI, fm.FormState))
	_this.title = ""
	_this.state = fm.FormState_Normal
	_this.border = fm.I窗口边框_默认
	_this.startPos = fm.FormStart_Default
	_this.showInTaskbar = param.HideInTaskbar == false
	_this.I设置大小(300, 400)
	_this.setOn()
	return _this
}

func (_this *Form) Init() *Form {
	return _this.InitEx(br.FormParam{})
}

func (_this *Form) SetTopMost(isTop bool) {
	_this.impl.SetTopMost(isTop)
}

func (_this *Form) NoneBorderResize() {
	_this.impl.NoneBorderResize()
}

func (_this *Form) toControls() br.Controls {
	return _this.impl
}

func (_this *Form) setOn() {
	_this.OnState = _this.defOnState
	var bakState br.FormStateProc
	bakState = _this.impl.SetOnState(func(state fm.FormState) {
		if bakState != nil {
			bakState(state)
		}
		_this.state = state
		_this.OnState(state)
	})
	bakLoad := _this.OnLoad
	_this.OnLoad = func() {
		switch _this.startPos {
		case fm.FormStart_Screen_Center:
			scr := App.GetScreen()
			size := _this.GetBound().Rect
			x, y := scr.WorkArea.Width/2-size.Width/2, scr.WorkArea.Height/2-size.Height/2
			_this.impl.SetLocation(x, y)
		case fm.FormStart_Default:
			_this.impl.SetLocation(100, 100)
		}
		bakLoad()
	}
}

func (_this *Form) defOnState(state fm.FormState) {
	for _, v := range _this.EvState {
		v(_this, state)
	}
}

func (_this *Form) I设置标题(title string) {
	_this.title = title
	_this.impl.SetTitle(_this.title)
}

func (_this *Form) I设置边框样式(style fm.FormBorder) {
	_this.border = style
	_this.impl.SetBorderStyle(_this.border)
}

func (_this *Form) I取边框样式() fm.FormBorder {
	return _this.border
}

func (_this *Form) SetState(state fm.FormState) {
	if _this.state == state {
		return
	}
	switch state {
	case fm.FormState_Max:
		_this.impl.ShowToMax()
	case fm.FormState_Min:
		_this.impl.ShowToMin()
	case fm.FormState_Normal:
		_this.impl.Show()
	}
}

func (_this *Form) GetState() fm.FormState {
	return _this.state
}

func (_this *Form) SetStartPosition(pos fm.FormStart) {
	_this.startPos = pos
}

func (_this *Form) I设置最大化(isShow bool) {
	_this.impl.SetMaximizeBox(isShow)
}

func (_this *Form) I设置最小化(isShow bool) {
	_this.impl.SetMinimizeBox(isShow)
}

func (_this *Form) I关闭() {
	_this.impl.Close()
}

func (_this *Form) I设置图标(file string) {
	_this.impl.SetIcon(file)
}

func (_this *Form) I显示对话框() {
	_this.SetStartPosition(fm.FormStart_Screen_Center)
	_this.impl.ShowDialog()
}
