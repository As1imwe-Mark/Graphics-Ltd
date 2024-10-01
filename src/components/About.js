import about from '../assets/aboutC.png'

const About = () => {
  return (
    <section id="about" className="scroll-smooth text-white max-w-[1100px] mx-auto flex justify-between gap-1 mt-5">
    <div className="w-1/2">
      <img src={about} alt='camera' className="w-full" />
    </div>

    <div className="w-1/2 my-auto">
      <h1 className="text-[80px] font-bold mb-4">
        Unveiling Creativity Beyond Sight
      </h1>
      <p>Our Journey in Crafting Visual Wonders, We make <br/>the best Graphics and Illustrations</p>
      <button className="bg-[#FFA500] text-black font-semibold rounded-3xl py-3 px-6 text-sm mt-3">VIEW OUR PRICING</button>
    </div>
    </section>
  )
}

export default About