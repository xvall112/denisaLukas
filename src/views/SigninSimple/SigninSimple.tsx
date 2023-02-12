import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { navigate, Link } from "gatsby"
//components
import { Form } from "./components"
import { LearnMoreLink } from "components/atoms"
import { SectionHeader } from "components/molecules"
import { Section } from "components/organisms"
//materialUi
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import { Button } from "@material-ui/core"
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
      "& img": {
        borderRadius: "10px",
        webkitBorderRadius: "10px",
      },
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
          <>
            <div className={classes.formContainer}>
              <Link to="/">
                <StaticImage
                  src="../../images/manifestIcon.png"
                  alt="logo faith in travel"
                  height={100}
                  style={{ marginBottom: "10px" }}
                />
              </Link>
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
          </>
        </Section>
      </div>
    </Slide>
  )
}

export default SigninSimple
