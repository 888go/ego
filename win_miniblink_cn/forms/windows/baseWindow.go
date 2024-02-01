package windows

import (
	"e.coding.net/gogit/go/ego/core/win_miniblink_cn/forms/windows/win32"
)

type baseWindow interface {
	hWnd() win32.HWND
	onWndMsg(hWnd win32.HWND, msg uint32, wParam uintptr, lParam uintptr) uintptr
}
