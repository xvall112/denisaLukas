import React, { useState, useContext } from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core"
import { Image } from "components/atoms"
import { SectionHeader } from "components/molecules"

//context
import { UserContext } from "../../../../providers/user/user.provider"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    borderRadius: theme.spacing(2),
    background: theme.palette.alternate.dark,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
  },
  cover: {
    width: 200,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    marginBottom: theme.spacing(3),
  },
  form: {
    "& .MuiTextField-root": {
      background: theme.palette.background.paper,
    },
    "& .MuiOutlinedInput-input": {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}))

const Form = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()
  const [email, setEmail] = useState("")
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  const { addNewsletter, loading } = useContext(UserContext)

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = async e => {
    await e.preventDefault()
    await addNewsletter(email)
    await setEmail("")
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.cover}>
        <Image src="https://assets.maccarianagency.com/the-front/illustrations/want-to-work.svg" />
      </div>
      <SectionHeader
        title="Newsletter"
        subtitle="Nenech si ujít žádné novinky z cest a míst"
        titleProps={{
          variant: "h4",
          color: "textPrimary",
        }}
        subtitleProps={{
          variant: "body1",
          color: "textPrimary",
        }}
        data-aos="fade-up"
        align="left"
      />
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={isMd ? 4 : 2}>
            {/* <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Full name
            </Typography>
            <TextField
              placeholder="Your full name"
              variant="outlined"
              size="medium"
              name="fullname"
              fullWidth
              type="text"
            />
          </Grid> */}

            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                E-mail
              </Typography>
              <TextField
                placeholder="Váš email"
                variant="outlined"
                size="medium"
                name="email"
                fullWidth
                type="email"
                required
                onChange={handleChange}
                value={email}
              />
            </Grid>
            <Grid item container justify="center" xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                size="large"
                disabled={loading}
              >
                Odebírat
              </Button>
            </Grid>

            {/*  <Grid item container justify="center" xs={12}>
            <Typography variant="caption" color="textSecondary">
              Subscribe to our Newsletter for new blog posts, tips & new photos.
            </Typography>
          </Grid> */}
          </Grid>
        </form>
      </div>
    </div>
  )
}

export default Form
