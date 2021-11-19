import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core"
import { SectionHeader } from "components/molecules"
import { Section, Parallax } from "components/organisms"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    background: "white",
    overflow: "hidden",
  },
  sectionWrapper: {
    height: 600,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  textWhite: {
    color: "white",
  },
  title: {
    fontWeight: "bold",
  },
  section: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    height: 60,
    width: 60,
  },
}))

const Hero = ({
  className,
  cover,
  title,
  subtitle,
  author,
  date,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Parallax backgroundImage={cover.file.url}>
        <div className={classes.sectionWrapper}>
          <Section className={classes.section}>
            <>
              <SectionHeader
                title={title}
                subtitle={subtitle}
                align="left"
                data-aos="fade-up"
                titleProps={{
                  className: clsx(classes.title, classes.textWhite),
                  variant: "h1",
                }}
                subtitleProps={{
                  className: classes.textWhite,
                }}
              />
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <Avatar
                      src={author.photo.file.url}
                      alt={author.photo.title}
                      className={classes.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`Published by ${author.name} `}
                    secondary={`on ${date}`}
                    primaryTypographyProps={{
                      className: classes.textWhite,
                      variant: "subtitle1",
                    }}
                    secondaryTypographyProps={{
                      className: classes.textWhite,
                      variant: "subtitle1",
                    }}
                  />
                </ListItem>
              </List>
            </>
          </Section>
        </div>
      </Parallax>
    </div>
  )
}

export default Hero
