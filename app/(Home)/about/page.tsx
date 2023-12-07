import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button variant={'outline'}>
        <a href="https://xyhomi3.github.io" target='_blank'>Abouts me</a>
      </Button>
    </div>
  )
}

export default page