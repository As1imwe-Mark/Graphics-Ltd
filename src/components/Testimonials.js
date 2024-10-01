import profile from '../assets/profile.png'

const Testimonials = () => {
  let id = 1;
  const testimonies = [
  {
    pic : profile,
    reviewer:'Asiimwe',
    review:"Lorem ipsum dolor, sit amet consectetur elit. A repellendus asperiores saepe, est accusantium minus maxime harum corrupti dolores earum, hic totam optio neque praesentium! Sapiente inventore porro non! Sapiente inventore porro non! Sapiente inventore porro non!",
    id: id++
  },
  {
    pic : profile,
    reviewer:'Mark',
    review:"Lorem ipsum dolor, sit amet consectetur elit. A repellendus asperiores saepe, est accusantium minus maxime harum corrupti dolores earum, hic totam optio neque praesentium! Sapiente inventore porro non! Sapiente inventore porro non! Sapiente inventore porro non!",
    id: id++
  },
  {
    pic : profile,
    reviewer:'Joseph',
    review:"Lorem ipsum dolor, sit amet consectetur elit. A repellendus asperiores saepe, est accusantium minus maxime harum corrupti dolores earum, hic totam optio neque praesentium! Sapiente inventore porro non! Sapiente inventore porro non! Sapiente inventore porro non!",
    id: id++
  },
]
  return (
    <section id="testimonials" className="max-w-[1100px] mx-auto h-full">
      <article  className="text-center">
        <h1 className="text-7xl text-[#ffa500] mb-2 font-bold">TESTIMONIALS</h1>
        <p className="text-white mb-6">Read what people think about our services and graphics</p>
        <div className="flex justify-center gap-10 mt-20 mb-28" >
        {testimonies.map((testimony) => {
          return(
            <div className="w-[345px] h-[336px] bg-[#13124F] text-center rounded-3xl py-auto text-white">
            <div className="mx-auto mt-[-60px] w-[150px] h-[150px] text-center rounded-full bg-slate-300">
            <img src={testimony.pic} alt='' className="w-full h-full object-contain rounded-full"/>
            </div>
              <h2 className="font-bold text-3xl text-[#ffa500] mb-3">{testimony.reviewer}</h2>
              <p>{testimony.review}</p>
            </div>
          )
        })}
        </div>
      </article>
    </section>
  )
}

export default Testimonials