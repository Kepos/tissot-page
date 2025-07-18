// src/components/Header.jsx

export default function Header() {
  return (
    <header className="w-full px-24 py-12 fixed flex justify-center top-0 left-0">
      <div className="flex w-full max-w-[1290px] justify-between items-center ">
        {/* Logo */}
        <div className="flex t-logo text-5xl font-bold">T</div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="">
            Gartengeräte
          </a>
          <a href="#" className="">
            Comedy
          </a>
          <a href="#" className="">
            Blogs
          </a>
          <a href="#" className="">
            Wissenschaft
          </a>
          <a href="#" className="">
            Kreatives
          </a>
          <a href="#" className="">
            & mehr
          </a>
        </nav>
      </div>
    </header>
  );
}
