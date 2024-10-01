import camera from '../assets/CAMERAg.png'

const Hero = () => {
  return (
    <section className="text-white max-w-[1100px] mx-auto flex items-start mt-2">
    <div className="w-1/2">
      <h1 className="text-[87px] font-bold">
        Graphics And Illustrations World
      </h1>
      <p>The best platform where you can get the <br /> customized graphics and illustrations</p>
      <button className="bg-[#FFA500] text-black font-semibold rounded-3xl py-3 px-6 text-sm mt-3">BUY NOW</button>
    </div>

    <div className="w-1/2">
      <img src={camera} alt='camera' className="mt-3" />
    </div>
    </section>
  )
}

export default Hero