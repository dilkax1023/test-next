import React from 'react'
import {useRouter} from 'next/router';

function SlugComp() {
    const router = useRouter();
    console.log(router.query)
  return (
    <div>SlugComp: {router.query.slug}</div>
  )
}

export default SlugComp