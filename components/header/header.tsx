import React from 'react'
import { FaDiceD20 } from 'react-icons/fa'

export default function Header() {
  return (
	<header className="bg-accent">
        <nav className="mx-auto container py-4 px-3 lg:py-3 mb-4">
          <div className="flex items-center lg:flex-1 lg:justify-center">
            <FaDiceD20 className="mr-2" />
            <span className="font-bold text-lg">RollFor.Me</span>
          </div>
        </nav>
      </header>
  )
}
