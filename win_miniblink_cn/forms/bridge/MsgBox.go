package bridge

import fm "e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms"

type MsgBox interface {
	Show(param fm.MsgBoxParam) fm.MsgBoxResult
}
