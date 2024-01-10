import React from 'react'

import './index.css'
import Toolbar from '../Toolbars'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="weather">
        <div className="weather-wrapper">
            <Toolbar />
            {children}
        </div>
    </div>
  )
}

export default Layout