import React, {useEffect} from 'react'
import { Pagination } from '@mantine/core'

export type PageProps = {
    totalPosts: number
    postsPerPage: number
    setCurrentPage: any
    currentPage: number
    setTotalPages: any
  }

const Page = ({totalPosts,postsPerPage,setCurrentPage,currentPage,setTotalPages}:PageProps) => {
    const pages: any = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pages.push(i)
    }
    
    useEffect(() => {
      setTotalPages(pages.length)
    })
    return <Pagination  onChange={(page) => setCurrentPage(page)} total={pages.length} size={'xs'} />
}

export default Page