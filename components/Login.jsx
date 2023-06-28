import Image from 'next/image'
import React from 'react'

import { Button, Title, createStyles } from '@mantine/core'
import { signIn, signOut, useSession } from 'next-auth/react'

import logo from '../media/logo.png'

const useStyles = createStyles((theme) => ({
  Textbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },

  Title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 44,
    textAlign: 'center',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 44 * 0.85
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 44 * 0.7
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 28
    }
  },

  SubTitle: {
    fontSize: 36,
    fontWeight: 300,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 36 * 0.85
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 36 * 0.7
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 20
    }
  },

  ButtonGroup: {
    marginTop: 30
  },

  Button: {
    width: '100%',
    height: 80,
    borderRadius: 20,
    marginTop: 20,
    backgroundImage: 'linear-gradient(to right, #FD008C, #7901FF, #0097FF)',
    opacity: 0.8,
    transitionDuration: '0.3s',

    '&:hover': {
      opacity: 1
    },

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      height: 70
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      height: 60
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      height: 50
    }
  },

  wrapper: {
    backgroundColor: '#000000',
    opacity: 0.99,
    height: '100vh'
  }

  // BG: {
  //   //get height and width of window in next.js
  //   height: Window.innerHeight,
  //   width: window.innerWidth,
  //   position: 'absolute',
  //   opacity: 0.5,
  //   filter: 'blur(5px)',
  //   WebkitFilter: 'blur(5px)',
  //   zIndex: -1
  // }
}))

function Login() {
  const { classes } = useStyles()
  const { data: session } = useSession()

  return (
    <div className={classes.wrapper}>
      <div className={classes.Textbox}>
        <Image src={logo} width={200} height={200} />
        <Title order={2} color='#fff' className={classes.SubTitle}>
          Placement Unit
        </Title>
        <Title order={2} color='#fff' className={classes.SubTitle}>
          BITS Pilani Hyderabad Campus
        </Title>
        <Title order={1} color='#fff' className={classes.Title}>
          Project Delphi
        </Title>
        {session &&
        session.user &&
        session.user.email.slice(-28) == '@hyderabad.bits-pilani.ac.in' ? (
          <Button onClick={() => signOut()}>Sign out</Button>
        ) : (
          <Button onClick={() => signIn('google')}>BITS Mail Login</Button>
        )}
      </div>
    </div>
  )
}

export default Login
