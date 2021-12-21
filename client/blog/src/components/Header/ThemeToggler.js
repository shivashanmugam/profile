import React from 'react'
import Button from './Button'
import styled from '@emotion/styled'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../Theming'

const LightMode = styled(FiSun)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const DefaultMode = styled(FiMoon)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const ThemeToggler = ({ toggleTheme, themeName }) => {
  const theme = useTheme()
  const switchTheme = function(){
    if(themeName == 'light'){
      localStorage.setItem('theme','dark')
    } else {
      localStorage.setItem('theme','light')
    }
    
    window.location.reload();
  }

  return (
    <Button
      css={{
        borderRadius: '50%',
        width: '2.375rem',
        height: '2.375rem',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        borderStyle: 'solid',
        borderWidth: '1px',
        color: theme.colors.white,
        background: theme.colors.headerBg,
        '@media (hover: hover)': {
          ':hover': {
            background:
              theme.themeName === 'default'
                ? theme.colors.text
                : theme.colors.primary,
          },
        },
      }}
      aria-label={
        themeName === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      }
      onClick={switchTheme}
    >
      {themeName === 'light' ? (
        <DefaultMode title="Switch to dark mode" />
      ) : (
        <LightMode title="Switch to light mode" />
      )}
    </Button>
  )
}
export default ThemeToggler
