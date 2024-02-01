package 系统类

import (
	com子类 "e.coding.net/gogit/go/ego/core/win_go_ole_cn"
	com类 "e.coding.net/gogit/go/ego/core/win_go_ole_cn/oleutil"
	dll类 "e.coding.net/gogit/go/gosdk/core/win_dll"
	"errors"
	"fmt"
	"os"
	"strconv"
	"syscall"
)

// I取system32目录 成功返回system32目录的全路径
func I取system32目录() string {
	dll, _ := dll类.I创建_快捷("kernel32.dll")
	字节集 := make([]byte, syscall.MAX_PATH)
	dll.I调用("GetSystemDirectoryA", 字节集, syscall.MAX_PATH)
	return string(字节集)
}

// I取Windows目录 成功返回Windows目录的全路径
func I取Windows目录() string {
	dll, _ := dll类.I创建_快捷("kernel32.dll")
	字节集 := make([]byte, syscall.MAX_PATH)
	dll.I调用("GetWindowsDirectoryA", 字节集, syscall.MAX_PATH)
	return string(字节集)
}

func I是否为64位系统() bool {
	if strconv.IntSize == 64 {
		return true
	}
	return false
}

// I关闭文件重定向 禁用调用线程的文件系统重定向，默认情况下启用文件系统重定向。此功能对于想要访问本机system32目录的32位应用程序很有用。
func I关闭文件重定向() bool {
	if I是否为64位系统() == true {
		返回, _ := dll类.I创建_快捷("Kernel32.dll")
		调用返回, _ := 返回.I调用("Wow64DisableWow64FsRedirection", 0)
		if 调用返回.R2 == 0 {
			return true
		} else {
			fmt.Println("[I关闭文件重定向] 错误:" + 调用返回.Errno.Error())
			return false
		}
	}
	return false
}

// I恢复文件重定向 恢复调用线程的文件系统重定向
func I恢复文件重定向() bool {
	if I是否为64位系统() == true {
		返回, _ := dll类.I创建_快捷("Kernel32.dll")
		调用返回, _ := 返回.I调用("Wow64RevertWow64FsRedirection", 0)
		if 调用返回.R2 == 0 {
			return true
		} else {
			fmt.Println("[I恢复文件重定向] 错误:" + 调用返回.Errno.Error())
			return false
		}
	}
	return false
}
func I快捷方式取路径(路径 string) (string, error) {
	//创建桌面快捷方式("C:\\1.exe", "E:\\Administrator\\Desktop\\123.lnk")
	_, err := os.Stat(路径)
	if err != nil {
		return "", errors.New("路径:" + 路径 + " ,文件不存在")
	}

	com子类.I初始化COM库(0)
	defer com子类.I取消COM库()
	oleShellObject, err1 := com类.I创建COM对象("WScript.Shell")
	if err1 != nil {
		return "", err1
	}
	wshell, err2 := oleShellObject.I查找接口(com子类.IID_IDispatch)
	if err1 != nil {
		return "", err2
	}
	cs, err3 := com类.I调用方法(wshell, "CreateShortcut", 路径)
	if err1 != nil {
		return "", err3
	}
	idispatch := cs.ToIDispatch()
	返回值2, _ := com类.I取属性(idispatch, "TargetPath")
	return 返回值2.I取文本(), nil
}
