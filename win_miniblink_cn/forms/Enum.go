package forms

// 鼠标样式
type CursorType int

// 鼠标样式
const (
	I鼠标样式_默认 CursorType = iota + 1
	I鼠标样式_ARROW
	I鼠标样式_IBEAM
	I鼠标样式_WAIT
	I鼠标样式_CROSS
	I鼠标样式_UPARROW
	I鼠标样式_SIZENWSE
	I鼠标样式_SIZENESW
	I鼠标样式_SIZEWE
	I鼠标样式_SIZENS
	I鼠标样式_SIZEALL
	I鼠标样式_NO
	I鼠标样式_HAND
	I鼠标样式_APPSTARTING
	I鼠标样式_HELP
	I鼠标样式_ICON
	I鼠标样式_SIZE
)

// 窗体的边框类型
type FormBorder int

// 窗体的边框类型
const (
	I窗口边框_默认 FormBorder = iota
	I窗口边框_无
	I窗口边框_禁用调整大小
)

// 窗体的状态类型
type FormState int

// 窗体的状态类型
const (
	FormState_Normal FormState = iota
	FormState_Max
	FormState_Min
)

// 窗体的首次显示位置
type FormStart int

// 窗体的首次显示位置
const (
	FormStart_Default FormStart = iota
	FormStart_Manual
	FormStart_Screen_Center
)

type MouseButtons int

// 鼠标按键
const (
	MouseButtons_None   MouseButtons = 0
	MouseButtons_Left   MouseButtons = 1
	MouseButtons_Right  MouseButtons = 2
	MouseButtons_Middle MouseButtons = 4
)

// 控件停靠方式
type AnchorStyle int

const (
	AnchorStyle_Left   AnchorStyle = 1
	AnchorStyle_Right  AnchorStyle = 2
	AnchorStyle_Top    AnchorStyle = 4
	AnchorStyle_Bottom AnchorStyle = 8
	AnchorStyle_Fill   AnchorStyle = 16
)

type MsgBoxIcon int

const (
	MsgBoxIcon_Error    MsgBoxIcon = 1
	MsgBoxIcon_Warn     MsgBoxIcon = 2
	MsgBoxIcon_Info     MsgBoxIcon = 4
	MsgBoxIcon_Question MsgBoxIcon = 8
)

type MsgBoxButton int

const (
	MsgBoxButton_Ok               MsgBoxButton = 1
	MsgBoxButton_OkCancel         MsgBoxButton = 2
	MsgBoxButton_AbortRetryIgnore MsgBoxButton = 4
	MsgBoxButton_YesNoCancel      MsgBoxButton = 8
	MsgBoxButton_YesNo            MsgBoxButton = 16
	MsgBoxButton_RetryCancel      MsgBoxButton = 32
)

type MsgBoxResult int32

const (
	MsgBoxResult_Ok     MsgBoxResult = 1
	MsgBoxResult_Cancel MsgBoxResult = 2
	MsgBoxResult_Abort  MsgBoxResult = 3
	MsgBoxResult_Retry  MsgBoxResult = 4
	MsgBoxResult_Ignore MsgBoxResult = 5
	MsgBoxResult_Yes    MsgBoxResult = 6
	MsgBoxResult_No     MsgBoxResult = 7
)
