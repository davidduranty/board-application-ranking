import React, {  PropsWithChildren } from 'react'

export default function layoutBoard({
    params,
    children,
  }: PropsWithChildren< {
    params: { boardid: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }>) {
    
  return (
      <div>
        <h2>
            Boards ({params.boardid})
          </h2>
          {children}
      </div>
  )
}
