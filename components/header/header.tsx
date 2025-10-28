import { D20Icon } from '../ui/d20-icon'

export default function Header() {
  return (
	<header className="bg-accent">
        <nav className="mx-auto container py-4 px-3 lg:py-3 mb-4">
          <div className="flex items-center lg:flex-1 lg:justify-center">
            <D20Icon className="mr-2 w-5" />
            <span className="font-bold text-lg">RollFor.Me</span>
          </div>
        </nav>
      </header>
  )
}
