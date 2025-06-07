export default function Footer() {
  return (
      <footer className="row-start-3 flex gap-[24px] flex-wrap bg-slate-800 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2 p-4">
          <p className="text-white text-sm">
            © 2025 My ToDo List. All rights reserved.
          </p>
          <p className="text-white text-sm">
            Made by{" "}
            <a
              href="https://github.com/Guilherme-210"
              className="text-blue-400 hover:underline"
            >
              Guilherme Reis
            </a>
          </p>
        </div>
      </footer>
  )
}
