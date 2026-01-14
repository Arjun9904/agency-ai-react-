import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import {motion} from "motion/react"

const OurWork = () => {
  const workData = [
    {
      title: 'Mobile app marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      image: assets.work_mobile_app
    },
    {
      title: 'Dashboard management',
      description: 'We help you execute your plan and deliver results.',
      image: assets.work_dashboard_management
    },  
    {
      title: 'Fitness app promotion',
      description: 'We help you create a marketing strategy that drives results.',
      image: assets.work_fitness_app
    },
  ]

  return (
    <motion.div 
    initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren:0.2}}
        viewport={{ once: true }}
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white relative overflow-hidden'>
      <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
          workData.map((work, index) => (
            <motion.div 

            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5,delay:index*0.2}}
        viewport={{ once: true }}
              key={index} 
              className='group relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/50 group-hover:from-blue-100/70 group-hover:to-indigo-200/70 transition-all duration-500'></div>
              <img 
                src={work.image} 
                alt={work.title}
                className='w-full h-48 sm:h-52 object-cover rounded-2xl mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 z-10 relative'
              />
              <h3 className='mt-3 mb-2 text-xl font-bold text-gray-800 relative z-10 group-hover:text-indigo-700 transition-colors duration-300'>
                {work.title}
              </h3>
              <p className='text-sm opacity-80 text-gray-600 leading-relaxed w-full relative z-10'>
                {work.description}
              </p>
            </motion.div>
          ))
        }
      </div>
    </motion.div>
  )
}

export default OurWork
