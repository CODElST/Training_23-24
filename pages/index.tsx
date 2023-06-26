import * as React from 'react'

import { signIn, signOut, useSession } from 'next-auth/react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

import Login from '../components/Login'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  const { data, status } = useSession()
  if (
    status === 'authenticated' &&
    data.user.email.slice(10) == 'hyderabad.bits-pilani.ac.in'
  ) {
    return (
      <>
        <NotionPage {...props} />
      </>
    )
  }
  return (
    <>
      <Login />
    </>
  )
}
