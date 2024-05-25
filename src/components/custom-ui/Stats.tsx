
'use client';
import CountUp from 'react-countup';
const stats = [
    {
        num:12,
        text:'Years of experience'
    },
    {
        num:26,
        text:'Project Completed'
    },
    {
        num:8,
        text:'technologies masterd'
    },
    {
        num:500,
        text:'Code commits'
    },
]
function Stats() {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
    <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w[80vw] mx-auto xl:max-w-none'>
            {stats.map((stat, index) => {
                return (
                    <div className='flex flex-1 gap-4 justify-center xl:justify-start items-center' key={index}>
                        <CountUp 
                        end={stat.num}
                         duration={5} 
                         className='text-4xl xl:text-6xl font-extrabold text-accent'/>
                        <span className={`${stat.text.length <15 ? 'max-w-[100px]': 'max-w-[150px]'}`}>{stat.text}</span>
                    </div>
                )
            })}
        </div>
        </div>
    </section>
  )
}

export default Stats