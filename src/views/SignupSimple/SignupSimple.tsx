import React from "react"
import { navigate, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
//materialUI
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
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
      "& img": {
        borderRadius: "10px",
        webkitBorderRadius: "10px",
      },
    },
    section: {
      paddingTop: 0,
      paddingBottom: 20,
    },
  }
})

const SignupSimple = (): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <Section className={classes.section}>
        <>
          <Button
            color="primary"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => navigate("/")}
            style={{ marginTop: "10px" }}
          >
            Zpět
          </Button>

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
              title="Registrovat se"
              subtitle="Faith in travel"
              titleProps={{
                variant: "h3",
              }}
            />
            <Form />
          </div>
        </>
      </Section>
    </>
  )
}

export default SignupSimple
