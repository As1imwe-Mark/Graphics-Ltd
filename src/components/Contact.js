import logo from '../assets/Logo.png'

const Contact = () => {
  return (
    <section id="contact" className="max-w-[1100px] flex justify-evenly mx-auto gap-10 h-full">
      <div className="w-1/3">
      <h2 className="text-center font-bold text-3xl text-[#ffa500] ">Contact Us</h2>
      <p className="text-center text-slate-500 text-2xl mb-4">Send Us a message</p>
    <form className="flex flex-col gap-3">
    <input type='text' id='name' placeholder='Full Name' className="p-2 rounded-lg" />
    <input type='email' id='email' placeholder='Your email' className="p-2 rounded-lg" />
    <textarea type='textarea' id='message' placeholder='Your message...' rows={5} className="p-1 rounded-lg" />
   <button type='submit' id='submit' className="bg-[#FFA500] text-black font-semibold rounded-3xl py-3 px-6 text-sm self-start" >Submit</button>
    </form>
      </div>

      <div className="w-1/3 text-center ">
      <h2 className="font-bold text-3xl text-[#ffa500] ">Site map</h2>
      <p className="text-slate-500 text-2xl mb-4">
        All our Pages
      </p>
      <ul className="font-bold text-white text-xl space-y-5">
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About Us</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#blog'>Blog</a></li>
        <li><a href='#contact'>Contact Us</a></li>
      </ul>
      </div>

      <div className="w-1/3">
        <div>
          <img src={logo} alt='' className="w-36 mb-5" />
        </div>
        <ul className="font-bold text-slate-600 text-xl space-y-5">
          <li><a href="tel:256788358652">(256) 788 - 358 - 652</a></li>
          <li><a href="mailto:markasiimwe75@gmail.com">markasiimwe75@gmail.com</a></li>
        </ul>
        

      </div>

    </section>
  )
}

export default Contact