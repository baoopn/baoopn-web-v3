import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import FixedNavbar from '../components/ui/FixedNavbar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="font-comfortaa">
      <FixedNavbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
