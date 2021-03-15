import * as React from "react"
import { Link } from "gatsby"
import DarkModeToggler from "../../../../components/atoms/DarkModeToggler/DarkModeToggler"

interface Props {
  siteTitle: string
  themeMode: string
  themeToggler: Function
}

const TopBar = ({ siteTitle, themeMode, themeToggler }: Props): JSX.Element => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
    </div>
  </header>
)

export default TopBar
