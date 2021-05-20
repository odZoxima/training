import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import {Progress, Table} from "antd"
import 'antd/dist/antd.css';

export const Buffer = ({open, onClose}) => {

    if(!open) return null
    return ReactDOM.createPortal(
        <section className="bufferContainer">
            <Progress type="circle" percent={75} style={{color: "blue"}} />
        </section>,
        document.getElementById("buffer")
    )
}
