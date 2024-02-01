package 系统类

import (
	"syscall"
	"unsafe"
)

//本类摘自https://www.jianshu.com/p/a6e9f5d31cb5
//https://github.com/0xAAFF/WindowsVersion

//I取系统版本 返回如下:
/*
Windows NT 4
Windows 95
Windows 98
Windows Me
Windows 2000
Windows XP
Windows XP 64
Windows Server 2003
Windows Server 2003 R2
Windwos Vista
Windows Server 2008
Windwos 7
Windows Server 2008 R2
Windwos 8
Windows Server 2012
Windows 8.1
Windows Server 2012 R2
Windows 10
Windows Server 2016
Windows Server 2019
Windows 11
Windows 11 +
*/
func I取系统版本() (string, error) {
	// 以下代码获取windows8.1及以上的操作系统
	majorVersion, minorVersion, buildNumber := rtlGetNtVersionNumbers()
	// fmt.Printf("majorVersion:%d ,minorVersion:%d ,buildNumber:%d \n", majorVersion, minorVersion, buildNumber)

	o, err := getVersionExW()
	if err != nil {
		// fmt.Println("getVersionExW : ", err)
		return "", err
	}

	/*
		Windows 8.1
		Windows 10
		Windows Server 2016
		Windows Server 2019
		Windows 11
		Windows 11 +
	*/
	// getVersionExW : win8.1+ :> 6.2.9200 ()
	if majorVersion > 6 || (majorVersion == 6 && minorVersion >= 3) { // win8plus

		if majorVersion == 6 && minorVersion >= 3 {
			// Win8.1 		: 6.3.9600
			// Windows Server 2012
			if o.ProductType == byte(vER_NT_WORKSTATION) {
				return "Windows 8.1", nil
			} else {
				// fmt.Println("o.ProductType :", o.ProductType)
				return "Windows Server 2012 R2", nil
			}
		} else if majorVersion == 10 && minorVersion == 0 {
			// Win 10 	    :10.0.19042
			// WinSer 2019  :10.0.17763
			// Win 11		:10.0.22000
			if o.ProductType == byte(vER_NT_WORKSTATION) {
				if buildNumber >= 22000 {
					return "Windows 11", nil
				} else { // if buildNumber >= 18363 {
					//  18363 : Win10 专业版
					//	19041 : win10 家庭中文版
					// 	19042 : win10 家庭中文版,教育版
					//	19043 : win10 专业版
					return "Windows 10", nil
				}
			} else {
				if buildNumber >= 17763 {
					return "Windows Server 2019", nil
				} else if buildNumber >= 14393 {
					return "Windows Server 2016", nil
				}
			}
		} else {
			return "Windows 11 +", nil
		}
	}

	// 以下代码获取windows 8.1一下的系统版本
	/*
		Windows NT 4
		Windows 95
		Windows 98
		Windows Me
		Windows 2000
		Windows XP
		Windows XP 64
		Windows Server 2003
		Windows Server 2003 R2
		Windwos Vista
		Windows Server 2008
		Windwos 7
		Windows Server 2008 R2
		Windwos 8
		Windows Server 2012
	*/

	s, err := getNativeSystemInfo()
	if err != nil {
		return "", nil
	}
	u := s.getDummyStructName()
	switch o.MajorVersion {
	case 4:
		{
			switch o.MinorVersion {
			case 0:
				{
					if int(o.PlatformId) == vER_PLATFORM_WIN32_NT {
						return "Windows NT 4", nil
					} else if int(o.PlatformId) == vER_PLATFORM_WIN32_WINDOWS {
						return "Windows 95", nil
					}
				}
			case 10:
				{
					return "Windows 98", nil
				}
			case 90:
				{
					return "Windows Me", nil
				}
			}
		}
	case 5:
		{
			switch o.MinorVersion {
			case 0:
				{
					return "Windows 2000", nil
				}
			case 1:
				{
					return "Windows XP", nil
				}
			case 2:
				{
					r2, err := getSystemMetrics(sM_SERVERR2)
					if err != nil {
						return "", err
					}

					if o.ProductType == byte(vER_NT_WORKSTATION) && u.isWin64() {
						return "Windows XP 64", nil
					} else if r2 == 0 {
						return "Windows Server 2003", nil
					} else if r2 != 0 {
						return "Windows Server 2003 R2", nil
					}
				}

			}
		}
	case 6:
		{
			switch o.MinorVersion {
			case 0:
				{
					if o.ProductType == byte(vER_NT_WORKSTATION) {
						return "Windwos Vista", nil
					} else {
						return "Windows Server 2008", nil
					}
				}
			case 1:
				{
					if o.ProductType == byte(vER_NT_WORKSTATION) {
						return "Windwos 7", nil
					} else {
						return "Windows Server 2008 R2", nil
					}
				}
			case 2:
				{
					if o.ProductType == byte(vER_NT_WORKSTATION) {
						return "Windwos 8", nil
					} else {
						return "Windows Server 2012", nil
					}
				}
			}
		}
	}
	return "windows", nil
}

// 是否为64位操作系统
func (d *dummyStructName) isWin64() bool {
	return d.ProcessorArchitecture == wORD(pROCESSOR_ARCHITECTURE_AMD64) || d.ProcessorArchitecture == wORD(pROCESSOR_ARCHITECTURE_IA64)
}

// 判断操作系统的量
var (
	pROCESSOR_ARCHITECTURE_IA64  = 6
	pROCESSOR_ARCHITECTURE_AMD64 = 9
	vER_PLATFORM_WIN32_WINDOWS   = 1
	vER_PLATFORM_WIN32_NT        = 2
	vER_NT_WORKSTATION           = 0x0000001
	sM_SERVERR2                  = 89
)

type lPVOID uintptr
type wORD uint16
type dWORD uint32
type dWORD_PTR uintptr // 不确定

// Dll: ntdll.dll
// rtlGetNtVersionNumbers
// 获取系统的版本号
/*
   HINSTANCE hinst = LoadLibrary("ntdll.dll");
   dWORD dwMajor,dwMinor,dwBuildNumber;
   NTPROC proc = (NTPROC)GetProcAddress(hinst,"rtlGetNtVersionNumbers");
   proc(&dwMajor,&dwMinor,&dwBuildNumber);
   dwBuildNumber&=0xffff;
*/
func rtlGetNtVersionNumbers() (majorVersion, minorVersion, buildNumber uint32) {
	//var majorVersion, minorVersion, buildNumber uint32
	ntdll := syscall.NewLazyDLL("ntdll.dll")
	procRtlGetNtVersionNumbers := ntdll.NewProc("RtlGetNtVersionNumbers")
	//v, vv, err := procRtlGetNtVersionNumbers.Call(
	procRtlGetNtVersionNumbers.Call(
		uintptr(unsafe.Pointer(&majorVersion)),
		uintptr(unsafe.Pointer(&minorVersion)),
		uintptr(unsafe.Pointer(&buildNumber)),
	)
	// fmt.Printf("%#v \n", v)
	// fmt.Printf("%#v \n", vv)
	// fmt.Printf("%#v \n", err)
	// fmt.Println("开发版本:", buildNumber)
	buildNumber &= 0xffff

	// fmt.Println("-----------------rtlGetNtVersionNumbers-----------------")
	// fmt.Println("主版本号:", majorVersion)
	// fmt.Println("次版本号:", minorVersion)
	// fmt.Println("开发版本:", buildNumber)

	return

}

// getSystemMetrics function (winuser.h)
// User32.dll
// https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsystemmetrics
/*
int getSystemMetrics(
  [in] int nIndex
);
*/
func getSystemMetrics(index int) (int, error) {
	user32 := syscall.NewLazyDLL("User32.dll")
	procGetSystemMetrics := user32.NewProc("GetSystemMetrics")
	v, _, err := procGetSystemMetrics.Call(uintptr(index))
	// fmt.Printf("%#v \n", v)
	// fmt.Println(err)
	return int(v), err

}

// 获取windows 版本指令
// 参考
// https://www.cnblogs.com/micro-chen/p/5939662.html
//
// https://www.cnblogs.com/lizhigang/p/7161132.html
//
// GetVersionExA 函数 (sysinfoapi.h)
// Kernel32.lib
// 最低支持 Windows 2000 Professional/Server [desktop apps | UWP apps]
// https://docs.microsoft.com/en-us/windows/win32/api/sysinfoapi/nf-sysinfoapi-getversionexa

// #region getVersionExW 函数 (sysinfoapi.h)
// https://docs.microsoft.com/en-us/windows/win32/api/sysinfoapi/nf-sysinfoapi-getversionexw
/*
Kernel32.dll
getVersionExW function (sysinfoapi.h)
NOT_BUILD_WINDOWS_DEPRECATE BOOL getVersionExW(
  [in, out] LPOSVERSIONINFOW lpVersionInformation
);
*/
func getVersionExW() (oSVersionInfoExA, error) {

	//csdVer := make([]byte, 128)
	var osVersionInfoExA oSVersionInfoExA
	// osVersionInfoExA := oSVersionInfoExA{
	// 	//CSDVersion: csdVer, //uintptr(unsafe.Pointer(&csdVer[0])), //StrPtr(csdVer), //csdVer[:128], //uintptr(unsafe.Pointer(&csdVer[0])),
	// }
	osVersionInfoExA.OSVersionInfoSize = dWORD(unsafe.Sizeof(osVersionInfoExA))

	kernel32 := syscall.NewLazyDLL("Kernel32.dll")
	procGetVersionExW := kernel32.NewProc("GetVersionExA")
	_, _, err := procGetVersionExW.Call(uintptr(unsafe.Pointer(&osVersionInfoExA)))
	//v, vv, err := procGetVersionExW.Call(uintptr(unsafe.Pointer(&osVersionInfoExA)))
	// fmt.Println(v)
	// fmt.Println(vv)
	// fmt.Println(err)
	if err != nil && err.Error() == "The operation completed successfully." {
		err = nil
	}

	// fmt.Println("-----------------getVersionExW-----------------")
	// fmt.Printf("%#v \n", osVersionInfoExA)
	// fmt.Println("主版本        :", osVersionInfoExA.MajorVersion)
	// fmt.Println("次版本        :", osVersionInfoExA.MinorVersion)
	// fmt.Println("编译版本      :", osVersionInfoExA.BuildNumber)
	// fmt.Println("操作系统平台   :", osVersionInfoExA.PlatformId)
	// fmt.Println("SP(主)       :", osVersionInfoExA.MajorVersion)
	// fmt.Println("SP(次)       :", osVersionInfoExA.ServicePackMinor)

	return osVersionInfoExA, err
}

// # endregion

// #region OSVERSIONINFOEXA structure
// https://docs.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-osversioninfoexa
/*
typedef struct _OSVERSIONINFOEXA {
  dWORD dwOSVersionInfoSize;
  dWORD dwMajorVersion;
  dWORD dwMinorVersion;
  dWORD dwBuildNumber;
  dWORD dwPlatformId;
  CHAR  szCSDVersion[128];
  wORD  wServicePackMajor;
  wORD  wServicePackMinor;
  wORD  wSuiteMask;
  BYTE  wProductType;
  BYTE  wReserved;
} OSVERSIONINFOEXA, *POSVERSIONINFOEXA, *LPOSVERSIONINFOEXA;
*/

type oSVersionInfoExA struct {
	OSVersionInfoSize dWORD     // 结构体大小, in bytes. Set this member to sizeof(OSVERSIONINFOEX).
	MajorVersion      dWORD     // 主版本号
	MinorVersion      dWORD     // 次版本号
	BuildNumber       dWORD     // 编译版本号
	PlatformId        dWORD     // 系统支持的平台
	CSDVersion        [128]byte // 系统补丁包的名称  CSDVersion[128]// 这个128是必须的 不然就会出现"The data area passed to a system call is too small."
	ServicePackMajor  wORD      // 系统补丁包的主版本
	ServicePackMinor  wORD      // 系统补丁包的次版本
	SuiteMask         wORD      // 标识系统上的程序组
	ProductType       byte      // 标识系统类型
	Reserved          byte      // 保留,未使用
} // 这个结构在Windows 2000后出现，老版本的OSVERSIONINFO结构没有wServicePackMajor、wServicePackMinor、wSuiteMask、wProductType和wReserved这几个成员。

// #endregion

// Version Helper functions
// Windwos 系统版本助手(微软官方推荐此函数列表)
// https://docs.microsoft.com/en-us/windows/win32/sysinfo/version-helper-apis

// IsWow64Process函数
// getNativeSystemInfo function (sysinfoapi.h)
// https://docs.microsoft.com/en-us/windows/win32/api/sysinfoapi/nf-sysinfoapi-getnativesysteminfo

// Win8一下的系统版本获取
// https://www.cnblogs.com/lizhigang/p/7161132.html
// https://blog.csdn.net/aidem_brown/article/details/52060140?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_aggregation-19-52060140.pc_agg_rank_aggregation&utm_term=go+%E8%8E%B7%E5%8F%96%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%89%88%E6%9C%AC&spm=1000.2123.3001.4430
//

// api dll
// Kernel32.dll
// Kernel32 := syscall.NewLazyDLL("kernel32.dll")

// 判断windwos操作系统是32位还是64位
// getNativeSystemInfo function (sysinfoapi.h)
// https://docs.microsoft.com/en-us/windows/win32/api/sysinfoapi/nf-sysinfoapi-getnativesysteminfo

/*
void getNativeSystemInfo(

	[out] LPSYSTEM_INFO lpSystemInfo

);
*/
func getNativeSystemInfo() (*systemInfo, error) {
	kernel32 := syscall.NewLazyDLL("kernel32.dll")
	procGetNativeSystemInfo := kernel32.NewProc("GetNativeSystemInfo")
	systemInformation := &systemInfo{}
	_, _, err := procGetNativeSystemInfo.Call(uintptr(unsafe.Pointer(systemInformation)))
	if err != nil && err.Error() == "The operation completed successfully." {
		err = nil
	}

	// fmt.Println(err)
	// fmt.Printf("%#v \n", systemInformation)
	// fmt.Printf("%#v \n", systemInformation.DummyUnionName)

	// dummyStructName := (*dummyStructName)(unsafe.Pointer(&systemInformation.DummyUnionName))
	// fmt.Printf("dummyStructName : %#v \n", dummyStructName)
	// fmt.Println("架构			: ", dummyStructName.architecture())
	// fmt.Println("处理器数量 	 : ", systemInformation.NumberOfProcessors)
	// fmt.Println("处理器类型 	 : ", systemInformation.ProcessorType)
	return systemInformation, err
}

// 参数
// SYSTEM_INFO structure (sysinfoapi.h)
// https://docs.microsoft.com/en-us/windows/win32/api/sysinfoapi/ns-sysinfoapi-system_info
/*

// DUMMYUNIONNAME
/*
struct {
	wORD wProcessorArchitecture;
	wORD wReserved;
} DUMMYSTRUCTNAME;
} DUMMYUNIONNAME;
*/

// dummyStructName 虚拟结构名
type dummyStructName struct {
	/*
		ProcessorArchitecture 值和说明
		--------------------------------|--------------------------------|
		Value							|	Meaning
		--------------------------------|--------------------------------|
		pROCESSOR_ARCHITECTURE_AMD64	|	x64 (AMD or Intel)
		9                               |
		--------------------------------|--------------------------------|
		PROCESSOR_ARCHITECTURE_ARM		|	ARM
		5                               |
		--------------------------------|--------------------------------|
		PROCESSOR_ARCHITECTURE_ARM64	|	ARM64
		12                              |
		--------------------------------|--------------------------------|
		pROCESSOR_ARCHITECTURE_IA64		|	Intel Itanium-based
		6                               |
		--------------------------------|--------------------------------|
		PROCESSOR_ARCHITECTURE_INTEL	|	x86
		0                               |
		--------------------------------|--------------------------------|
		PROCESSOR_ARCHITECTURE_UNKNOWN	|	未知架构
		0xffff                          |
		--------------------------------|--------------------------------|
	*/

	ProcessorArchitecture wORD // 已安装操作系统的处理器体系结构。
	Reserved              wORD
}

/*

	When `go env -w GOARCH=amd64`: NumberOfProcessors:0x10000,ProcessorType:0x7e050006,(Error.不是太清楚这个什么原因):
	&version.systemInfo{DummyUnionName:0x100000000009, PageSize:0x10000, MinimumApplicationAddress:0x7ffffffeffff, MaximumApplicationAddress:0xff, ActiveProcessorMask:0x21d800000008, NumberOfProcessors:0x10000, ProcessorType:0x7e050006, AllocationGranularity:0x0, ProcessorLevel:0x0, ProcessorRevision:0x0}


	When `go env -w GOARCH=386`  : NumberOfProcessors:0x8, ProcessorType:0x21d8 (correct 这个才是正确的):
	&version.systemInfo{DummyUnionName:0x9, PageSize:0x1000, MinimumApplicationAddress:0x10000, MaximumApplicationAddress:0xfffeffff, ActiveProcessorMask:0xff, NumberOfProcessors:0x8, ProcessorType:0x21d8, AllocationGranularity:0x10000, ProcessorLevel:0x6, ProcessorRevision:0x7e05}

*/
/*
https://baike.baidu.com/item/SYSTEM_INFO/10947166?fr=aladdin
http://www.cppblog.com/twzheng/archive/2007/06/02/SYSTEM_INFO.html
// 参数类型
typedef struct _SYSTEM_INFO {
	union {
	  dWORD dwOemId;
	  struct {
		wORD wProcessorArchitecture;
		wORD wReserved;
	  } DUMMYSTRUCTNAME;
	} DUMMYUNIONNAME;
	dWORD     dwPageSize;
	lPVOID    lpMinimumApplicationAddress;
	lPVOID    lpMaximumApplicationAddress;
	dWORD_PTR dwActiveProcessorMask;
	dWORD     dwNumberOfProcessors;
	dWORD     dwProcessorType;
	dWORD     dwAllocationGranularity;
	wORD      wProcessorLevel;
	wORD      wProcessorRevision;
  } SYSTEM_INFO, *LPSYSTEM_INFO;
*/
type systemInfo struct {
	DummyUnionName            uintptr   //DummyUnionName Or oemId ,one of this Use Same Memory.两个结构使用同一块内存
	PageSize                  dWORD     // 虚拟内存页的大小
	MinimumApplicationAddress lPVOID    // 应用程序和动态链接库（DLL）可访问的最低内存地址
	MaximumApplicationAddress lPVOID    // 应用程序和动态链接库（DLL）可访问的最高内存地址
	ActiveProcessorMask       dWORD_PTR // 表示配置到系统中的处理器集的掩码
	NumberOfProcessors        dWORD     // 处理器数量
	ProcessorType             dWORD     // 处理器类型
	AllocationGranularity     dWORD     // 虚拟内存的起始地址
	ProcessorLevel            wORD      // 依赖于体系结构的处理器级别。它只能用于显示目的。要确定处理器的功能集，请使用IsProcessorFeaturePresent函数。
	ProcessorRevision         wORD      // 依赖于体系结构的处理器版本
}

func (s *systemInfo) getDummyStructName() *dummyStructName {
	dummyStructName := (*dummyStructName)(unsafe.Pointer(&s.DummyUnionName))
	// fmt.Printf("dummyStructName : %#v \n", dummyStructName)
	// fmt.Println("架构			: ", dummyStructName.architecture())
	// fmt.Println("处理器数量 	 : ", s.NumberOfProcessors)
	// fmt.Println("处理器类型 	 : ", s.ProcessorType)
	return dummyStructName
}
