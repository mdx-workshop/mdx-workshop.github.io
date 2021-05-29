import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} factor={1} />
      <About offset={1} factor={1} />
      <Projects offset={2} factor={1} />
      <Contact offset={3} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
