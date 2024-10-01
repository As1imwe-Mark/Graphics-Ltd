import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <header className="flex max-w-[1100px] mx-auto justify-between items-center min-h-[110px]">
      <div className="w-20 h-20 ml-3">
        <img src={logo} alt='Logo' />
      </div>
      <nav>
        <ul className="flex gap-8 list mr-4 font-semibold text-[20px] text-white">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;