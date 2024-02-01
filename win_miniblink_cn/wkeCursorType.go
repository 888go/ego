package 浏览器类

type wkeCursorType int

const (
	wkeCursorType_Pointer wkeCursorType = iota
	wkeCursorType_Cross
	wkeCursorType_Hand
	wkeCursorType_IBeam
	wkeCursorType_Wait
	wkeCursorType_Help
	wkeCursorType_EastResize
	wkeCursorType_NorthResize
	wkeCursorType_NorthEastResize
	wkeCursorType_NorthWestResize
	wkeCursorType_SouthResize
	wkeCursorType_SouthEastResize
	wkeCursorType_SouthWestResize
	wkeCursorType_WestResize
	wkeCursorType_NorthSouthResize
	wkeCursorType_EastWestResize
	wkeCursorType_NorthEastSouthWestResize
	wkeCursorType_NorthWestSouthEastResize
	wkeCursorType_ColumnResize
	wkeCursorType_RowResize
	wkeCursorType_MiddlePanning
	wkeCursorType_EastPanning
	wkeCursorType_NorthPanning
	wkeCursorType_NorthEastPanning
	wkeCursorType_NorthWestPanning
	wkeCursorType_SouthPanning
	wkeCursorType_SouthEastPanning
	wkeCursorType_SouthWestPanning
	wkeCursorType_WestPanning
	wkeCursorType_Move
	wkeCursorType_VerticalText
	wkeCursorType_Cell
	wkeCursorType_ContextMenu
	wkeCursorType_Alias
	wkeCursorType_Progress
	wkeCursorType_NoDrop
	wkeCursorType_Copy
	wkeCursorType_None
	wkeCursorType_NotAllowed
	wkeCursorType_ZoomIn
	wkeCursorType_ZoomOut
	wkeCursorType_Grab
	wkeCursorType_Grabbing
	wkeCursorType_Custom
)