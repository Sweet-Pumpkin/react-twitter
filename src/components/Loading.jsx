import React from 'react'
import ReactLoading from 'react-loading';
import { LoadingStyle } from '../styles/LoadingStyle';

export default function Loading() {
  return (
    <LoadingStyle>
      <ReactLoading className="Loading" type="spin" color="#FF0090" height={50} width={50} />
    </LoadingStyle>
  )
}
