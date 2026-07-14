import { Link } from 'react-router'
import { Button } from './button'

export default function Footer() {
  return (
    <footer className="mt-12 px-6 py-6 pb-6 text-[#2f2f2f]">
      <div className="mx-auto w-[85%] max-w-5xl rounded-[40px] bg-[#e8e6e1] px-10 py-8 shadow-2xl">
        <div className="grid gap-8 text-center md:grid-cols-3 md:items-center md:text-left">
          {/* Left section */}
          <div>
            <h2 className="text-3xl font-bold">🌱 GroWise</h2>
            <p className="mt-2">Grow with confidence.</p>
            <p className="mt-6 text-sm">
              © {new Date().getFullYear()} GroWise
            </p>
          </div>
          {/* Middle section */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="transition-colors hover:text-[#f2a900]">
              Home
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-[#f2a900]"
            >
              About
            </Link>
          </div>
          {/* Right section */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <p className="max-w-xs text-center md:text-right">
              Found a bug or have an idea?
            </p>

            <Button
              asChild
              className="rounded-full bg-[#e3ead4] px-6 py-3 font-semibold text-[#2f2f2f] transition hover:bg-[#c8d3b3]"
            >
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__pAXlp9UOEtQOEw4OEdPVzVWVDhaWVE3RUo4UVIwTy4u"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌱 Leave Feedback
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
