/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"
import Footer from "./footer"
// @ts-ignore
import ContactMDX from "../sections/contact"

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
      </Inner>
      <Footer />
    </Content>
  </div>
)

export default Contact
