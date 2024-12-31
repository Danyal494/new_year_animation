import React from 'react'
import {motion} from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
const Animte = () => {
  return (
    <div className='flex gap-7  relative text-white overflow-hidden flex-col justify-center items-center h-screen bg-violet-900'>
   
      <motion.span className='absolute ' initial={{x:300 , opacity:0}} animate={{opacity:1}} transition={{delay:5.5,duration:2}}>
      <Icon  icon="noto:star"  />
      </motion.span>
      <motion.span className='absolute ' initial={{x:-300 , opacity:0}} animate={{opacity:1}} transition={{delay:5.5,duration:2}}>
      <Icon  icon="noto:star"  />
      </motion.span>
      <motion.span className='absolute ' initial={{y:-100,x:200 , opacity:0}} animate={{opacity:1}} transition={{delay:5.5,duration:2}}>
      <Icon  icon="noto:star"  />
      </motion.span>
      <motion.span className='absolute ' initial={{y:100,x:200 , opacity:0}} animate={{opacity:1}} transition={{delay:5.5,duration:2}}>
      <Icon  icon="noto:star"  />
      </motion.span>
      <motion.span className='absolute ' initial={{y:-100,x:-200 , opacity:0}} animate={{opacity:1}} transition={{delay:5.5,duration:2}}>
      <Icon  icon="noto:star"  />
      </motion.span>
      <motion.span className='absolute ' initial={{y:100,x:-200 , opacity:0}} animate={{opacity:1}} transition={{delay:5.5,duration:2}}>
      <Icon  icon="noto:star"  />
      </motion.span>
<motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:5.5,duration:2}} className='font-[bimbo] text-5xl'>Happy New Year</motion.div>
<div className='flex text-3xl font-bold year '>
    <div>2</div>
    <div>0</div>
    <div>2</div>
    <motion.div initial={{y:0}} animate={{y:-500}} transition={{delay:2,duration:2}} className='relative'  >
      <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.5 }}  className='balloon'></motion.div> 4</motion.div>
    <motion.div initial={{x:1000}} animate={{x:-18}} transition={{delay:3,duration:2}} >5</motion.div>
</div>
    </div>
  )
}

export default Animte

