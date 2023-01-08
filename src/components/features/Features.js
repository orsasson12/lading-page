import React from 'react'

import { featruesData } from '../../Data'
const Features = () => {
  const { title, subtitle, list } = featruesData
  return (
    <section id='#features' className='my-[70px] xl:my-[150px]'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='font-primary text-primary text-[40px] font-bold leading-tight mb-6 xl:mb-12'
            data-aria-owns='fade-down'
            data-aos-delay='100'
          >{title}</h2>
          <p  className='mb-16 xl:mb-24 text-lg text-secondary font-secondary font-medium leading-relaxed max-w-[585px] mx-auto '
            data-aria-owns='fade-down'
            data-aos-delay='200'
          >
            {subtitle}
          </p>
        </div>
        <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
          {
            list.map((feature, i) => {

              const { image,  title, description, linkText, delay } = feature
              return (
                <div key={i} className='w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto' 
                data-aos='zoom-in'
                data-aos-offset='100'
                data-aos-delay={delay}
                >
                  <div className='max-w-[120px] xl:mr-7 xl:max-w=[230px]'
                    data-aos='zoom-in-right'
                    data-aos-delay={delay}
                  >
                    <img src={image} alt='' style={{width:'100%'}} />
                  </div>
                  <div className='max-w-[220px] '>
                    <h3 className='font-primary text-primary text-[24px] mb-4 '>{title}</h3>
                    <p className='font-light italic gap-x-2 group'>{description}</p>
                    <div className='flex items-center gap-x-2 group'>
                      <a className='text-primary font-bold' href='/'>{linkText}</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Features