import React from 'react'
import Footer from '../Layout/Footer/Footer.js'
import Header from '../Layout/Header/Header.js'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}
