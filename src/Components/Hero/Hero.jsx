import watch1 from '../../assets/blue-watch.png'
import watch2 from '../../assets/yellow-watch.png'
import watch3 from '../../assets/orange-watch.png'
import { useState } from 'react'

// sử dụng animation AOS 
const ImageList = [
    {
        id : 1,
        image : watch1,
        price : "200.000",
        tag : 'new',
        title : 'Next Gen Blue Watch',
        description : 'There is an alarm clock on my desk. It is made of metal with very durable paint, orange color, shiny sparkle. The dial is made of transparent glass, in a circular shape. The numbers are black, evenly spaced. My clock has four plas hands. The back of the watch has a battery compartment. Two white knobs are used to adjust the alarm time and time as desired. The most beautiful part of my clock is the two small bells above. It looks just the ear of a clock. When it was time for the alarm, the sound of the bell was ringing loudly and pleasantly'
    },
    {
        id : 2,
        image : watch2,
        price : "300.000",
        tag : 'new',
        title : 'Next Gen Yellow Watch',
        description : 'There is an alarm clock on my desk. It is made of metal with very durable paint, orange color, shiny sparkle. The dial is made of transparent glass, in a circular shape. The numbers are black, evenly spaced. My clock has four plas hands. The back of the watch has a battery compartment. Two white knobs are used to adjust the alarm time and time as desired. The most beautiful part of my clock is the two small bells above. It looks just the ear of a clock. When it was time for the alarm, the sound of the bell was ringing loudly and pleasantly'
    },
    {
        id : 3,
        image : watch3,
        price : "400.000",
        tag : 'new',
        title : 'Next Gen Orange Watch',
        description : 'There is an alarm clock on my desk. It is made of metal with very durable paint, orange color, shiny sparkle. The dial is made of transparent glass, in a circular shape. The numbers are black, evenly spaced. My clock has four plas hands. The back of the watch has a battery compartment. Two white knobs are used to adjust the alarm time and time as desired. The most beautiful part of my clock is the two small bells above. It looks just the ear of a clock. When it was time for the alarm, the sound of the bell was ringing loudly and pleasantly'
    },

]
const Hero = () => {
    const [imageId , setImageId] = useState(watch1)
    const [title , setTitle] = useState('Best & Smart Digital Product')
    const [description , setDescription] = useState('There is an alarm clock on my desk. It is made of metal with very durable paint, orange color, shiny sparkle. The dial is made of transparent glass, in a circular shape. The numbers are black, evenly spaced. My clock has four plas hands. The back of the watch has a battery compartment. Two white knobs are used to adjust the alarm time and time as desired. The most beautiful part of my clock is the two small bells above. It looks just the ear of a clock. When it was time for the alarm, the sound of the bell was ringing loudly and pleasantly')
  return (
    <div className='min-h-[650px] sm:min-h-[700] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 relative '>
    {/* background asset div */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9' ></div>
        <div className='container pb-8 sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text content section */}
                <div className='flex flex-col justify-center gap-6 pt-12 lg:pr-8 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                    <h1 className='text-4xl lg:text-6xl font-bold' data-aos='zoom-out'>{title}</h1>
                    <p className='text-sm' data-aos='slide-up'>{description}</p>
                    <div data-aos='slide-up' data-aos-delay = '200'>
                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded hover:scale-105 duration-200'>Order Now</button>
                    </div>
                    {/* watch controller section */}
                    <div className='flex justify-center lg:justify-left gap-6 py-2 lg:gap-14 bg-white dark:bg-black rounded-3xl'>
                        {ImageList.map((item) => (
                            // eslint-disable-next-line react/jsx-key
                            <div data-aos='zoom-in' key={item.id} onClick={() => {
                                setImageId(item.id === 1 ? watch1 : item.id === 2 ? watch2 : watch3)
                                setTitle(item.title)
                                setDescription(item.description)
                            }}   className='flex flex-col lg:flex-row items-center gap-1'>
                                <img src={item.image}  alt='' className='w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200'/>
                                <div className='flex flex-col items-center justify-center lg:items-start'>
                                    <p className='font-bold lg:text-lg'>{item.price}</p>
                                    <p className='text-sm'>{item.tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 {/* image content section  */}
                 <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
                    <div className='h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center'>
                        <img  src={imageId}  data-aos='zoom-in' alt='' className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-120 object-contain mx-auto'/>
                    </div>
                 </div>
            </div>
        </div>
    </div>
   
  )
}

export default Hero
