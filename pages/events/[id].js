import React from 'react'
import {useRouter} from 'next/router';

function EventDetails() {
    const router = useRouter();
    
  return (
    <div> EventDetails: {router.query.id}</div>
  )
}

export default EventDetails