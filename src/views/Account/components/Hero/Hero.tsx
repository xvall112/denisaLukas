import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { SectionHeader } from "components/molecules"
import { Section } from "components/organisms"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    padding: "20px 0 ",
    marginBottom: theme.spacing(2),
    background: theme.palette.primary.dark,
  },
  textWhite: {
    color: "white",
  },
  title: {
    fontWeight: "bold",
  },
}))

const Hero = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section>
        <SectionHeader
          title="Nastavení účtu"
          subtitle=""
          align="left"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: "h3",
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
      </Section>
    </div>
  )
}

export default Hero
