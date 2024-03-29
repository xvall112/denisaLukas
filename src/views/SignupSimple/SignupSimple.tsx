import React from "react"

//materialUI
import { makeStyles } from "@material-ui/core/styles"
//components
import { SectionHeader } from "components/molecules"
import { Section } from "components/organisms"
import { Form } from "./components"

const useStyles = makeStyles(theme => {
  const toolbar = theme.mixins.toolbar as any

  return {
    formContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: `calc(100vh - ${toolbar["@media (min-width:600px)"].minHeight}px)`,
      maxWidth: 500,
      margin: `0 auto`,
    },
    section: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  }
})

const SignupSimple = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Registrovat se"
            subtitle="Faith in travel"
            titleProps={{
              variant: "h3",
            }}
          />
          <Form />
        </div>
      </Section>
    </div>
  )
}

export default SignupSimple
