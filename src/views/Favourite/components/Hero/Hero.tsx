import React, { useContext } from "react"
import { navigate } from "gatsby"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { SectionHeader } from "components/molecules"
import { Section } from "components/organisms"
//context
import { UserContext } from "../../../../providers/user/user.provider"
//materialUi
import { Button } from "@material-ui/core"
import SettingsIcon from "@material-ui/icons/Settings"
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
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
          ctaGroup={[
            <Button
              startIcon={<SettingsIcon />}
              variant="outlined"
              onClick={() => {
                navigate("/app/account")
              }}
            >
              Nastavení
            </Button>,
          ]}
          title={currentUser ? currentUser.displayName : "Ucet"}
          subtitle={currentUser ? currentUser.email : "Ucet"}
          align="left"
          disableGutter
          titleProps={{
            className: clsx(classes.title),
            variant: "h3",
          }}
        />
      </Section>
    </div>
  )
}

export default Hero
