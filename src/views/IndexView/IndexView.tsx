import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//components
import Section from "../../components/organisms/Section/Section"
import Hero from "./components/hero/hero"
import Countries from "./components/countries/countries"

const IndexPage = () => (
  <div>
    <Hero />
    <Section>
      <Countries />
    </Section>
  </div>
)

export default IndexPage
