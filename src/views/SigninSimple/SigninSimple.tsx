import React from "react"

//components
import { Form } from "./components"
import { LearnMoreLink } from "components/atoms"
import { SectionHeader } from "components/molecules"
import { Section } from "components/organisms"
//materialUi
import { makeStyles } from "@material-ui/core/styles"
import Slide from "@material-ui/core/Slide"

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

const SigninSimple = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Slide direction="right" in={true}>
      <div>
        <Section className={classes.section}>
          <div className={classes.formContainer}>
            <SectionHeader
              title="Přihlásit se"
              subtitle={
                <span>
                  Nejste registrováni?{" "}
                  <LearnMoreLink
                    title="Registrovat se"
                    href="/signup"
                    typographyProps={{ variant: "h6" }}
                  />
                </span>
              }
              titleProps={{
                variant: "h3",
              }}
            />
            <Form />
          </div>
        </Section>
      </div>
    </Slide>
  )
}

export default SigninSimple
