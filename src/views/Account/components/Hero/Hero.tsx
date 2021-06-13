import React, { useContext } from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { SectionHeader } from "components/molecules"
import { Section } from "components/organisms"
//context
import { UserContext } from "../../../../providers/user/user.provider"
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
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
  const { currentUser } = useContext(UserContext)
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section>
        <SectionHeader
          title={currentUser ? currentUser.displayName : "Ucet"}
          subtitle={currentUser ? currentUser.email : "Ucet"}
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
