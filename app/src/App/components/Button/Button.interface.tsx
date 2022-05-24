import { ReactNode } from "react"

export interface IButtonProps{
    bgcolor: string,
    color: string,
    type?: "button"|"reset"|"submit",
    styleNew?: object,
    onButtonClicked?: Function,
    children: Array<ReactNode|string>|string|ReactNode
}