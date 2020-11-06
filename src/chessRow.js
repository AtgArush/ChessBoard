import React from "react"
import MyChess from "./chessBox"
const chessRow = () => (
    <div className="base">
        <MyChess styler = "chessRowTwo"/>
        <MyChess styler = "chessRow"/>
        <MyChess styler = "chessRowTwo"/>
        <MyChess styler = "chessRow"/>
        <MyChess styler = "chessRowTwo"/>
        <MyChess styler = "chessRow"/>
        <MyChess styler = "chessRowTwo"/>
        <MyChess styler = "chessRow"/>
    </div>
)

export default chessRow;