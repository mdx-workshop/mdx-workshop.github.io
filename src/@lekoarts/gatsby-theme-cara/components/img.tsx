/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"


type ImageProps = {
    width: number
    left: string
    top: string
    href: string
}
const IMG = ({ width, left, top, href }: ImageProps) => (
    <img
        src={href}
        sx={{
            position: `absolute`,
            display: `block`,
            width,
            left,
            top,
        }}
    />
)

export default IMG