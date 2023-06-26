import * as React from 'react'

import * as types from 'notion-types'
import { Button, Text } from '@mantine/core'
import { signOut, useSession } from 'next-auth/react'
import { Breadcrumbs } from 'react-notion-x'

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  const { data } = useSession()

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        <Breadcrumbs block={block} rootOnly={true} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10
          }}
        >
          <Text fz='md'>Hi, {data?.user.name}!</Text>
          <Button variant='outline' onClick={() => signOut()}>
            Sign out
          </Button>
        </div>
      </div>
    </header>
  )
}
