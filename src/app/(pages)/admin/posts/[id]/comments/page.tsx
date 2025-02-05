'use client'
import { COMMENTS_API_URL } from '@/config/apiConstants';
import { COMMENTS_KEY } from '@/config/Constants';
import useFetch from '@/hooks/useFetch';
import { getParameterId } from '@/util/Util';
import React from 'react'


const PostCommentsPage = () => {
    const { data } = useFetch(COMMENTS_KEY, COMMENTS_API_URL);
    // const id = getParameterId(7);
    // console.log(id)
    // const comments = data?.filter((item: any) => item.postId == post._id);
  return (
    <div>PostCommentsPage</div>
  )
}

export default PostCommentsPage