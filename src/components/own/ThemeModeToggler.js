import React, { useContext } from "react"
import Button from "@material-ui/core/Button"
import { useTheme } from "@material-ui/core/styles"

//context
import { MenuContext } from "../../providers/menu/menu.providers"

const ThemeModeToggler = () => {
  const theme = useTheme()
  const { themeMode, setMode } = useContext(MenuContext)

  return (
    <Button
      variant={"outlined"}
      onClick={() => setMode(themeMode === "light" ? "dark" : "light")}
      aria-label="Dark mode toggler"
      color={themeMode === "light" ? "primary" : "primary"}
      sx={{
        borderRadius: 2,
        minWidth: "auto",
        padding: 0.5,
        borderColor: theme.palette.divider,
      }}
    >
      {themeMode === "light" ? (
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </Button>
  )
}

export default ThemeModeToggler
