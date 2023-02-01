import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

const SharedLayout = () => {
  console.log("SharedLayout");
  return (
    <>
    <Navigation />
    <Outlet />
    </>
  )
}

export default SharedLayout