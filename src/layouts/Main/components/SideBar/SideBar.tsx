import React, { useContext } from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { Drawer } from "@material-ui/core"

//context
import { MenuContext } from "../../../../providers/menu/menu.providers"

const useStyles = makeStyles(theme => ({
  drawer: {
    width: "100%",
    maxWidth: 325,
    zIndex: 10000,
  },
  root: {
    height: "100%",
    padding: theme.spacing(1),
  },
  nav: {
    marginBottom: theme.spacing(1),
  },
}))

interface Props {
  className?: string

  variant: "permanent" | "persistent" | "temporary" | undefined
}

const Sidebar = ({
  variant,

  className,
  ...rest
}: Props): JSX.Element => {
  const classes = useStyles()
  const { handleSidebarClose, openSidebar } = useContext(MenuContext)
  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={() => handleSidebarClose()}
      open={openSidebar}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <p>SideBar</p>
      </div>
    </Drawer>
  )
}

export default Sidebar
