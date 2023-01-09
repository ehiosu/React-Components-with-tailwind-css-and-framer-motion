import React from 'react'
import baseimage from './baseproductimage.png'
import { motion } from 'framer-motion'
import {VscLaw} from 'react-icons/vsc'
import {AiOutlineHeart,AiOutlineClose} from 'react-icons/ai'
import { useState,useEffect } from 'react'
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
export const ProductInfo = ({image,imageTitle,price,offer,stock,dealText}) => {
  const[open,setOpen]=useState(true)
    image? image=image:image=baseimage
    imageTitle? imageTitle=imageTitle:imageTitle="Razer Kraken Kitty Edt Gaming Headset Quartz"
    price? price=price:price = "0.00"
    offer? offer=offer: offer=""
    stock? stock=stock : stock = 0

    const isSmall = useMediaQuery('(min-width: 480px)');
    const ismedium = useMediaQuery('(min-width: 760px)')
    const width = isSmall?{
      width:'50vw'
    }:{
      width:'95vw'
    }
    const display = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "-500%" }
    }
    console.log((isSmall))
    
    function close(){
      setOpen(!open)
      console.log("closed")
    }
    
  return (
    <motion.div layout initial={{width:'0px'}} animate={open?"open":"closed"} whileInView={open?width:{}} transition={{duration:1} } variants={display}  className='grid grid-cols-3 lg:w-[50vw] w-[80vw] p-8 bg-[#FFFFFF] text-black rounded-md'>
      
       
      
        {/* image section */}
        <motion.div className='col-span-1' initial={{opacity:0}} whileInView={open?{opacity:1}:{opacity:0}} transition={open?{duration:0.8,delay:0.8,type:"easeIn"}:{duration:0.2}}>
            <img src={image} alt={imageTitle} className='w-40 h-40 object-contain mx-auto' />
        </motion.div>
        {/* info section */}
        <motion.div className='col-span-2 lg:h-[55vh] p-2 h-[65vh]  md:h-[60vh] ' initial={{opacity:0}} whileInView={open?{opacity:1}:{opacity:0}} transition={open?{duration:0.8,delay:0.8,type:"easeIn"}:{duration:0.2}}>
        <AiOutlineClose className='relative top-0 md:left-48 left-48 lg:left-96' onClick={()=>{setOpen(open=>!open)}}/>
            <div className="flex flex-col  text-start h-full lg:p-4 gap-4">
              <p className={`${dealText?'bg-black':'hidden'} w-24 h-6 text-sm text-white  rounded-lg px-1 text-center  `}>{dealText}</p>
              <h3 className='max-w-[90%] font-bold '>{imageTitle}</h3>
              <h2 className='text-2xl font-bold '>{price}</h2>
              <p>{offer}</p>
              <button className='w-full bg-blue-500 border-b-8 text-white border-blue-700 h-12 rounded-md p-2'>Add to cart</button>
              <div className="flex gap-2">
              <span className={`border-2 w-3 h-3 rounded-full ${ stock >0 ?'bg-green-400 border-green-400':'bg-red-400 border-red-400'} my-auto `}></span>
              <p className='text-sm'> {stock} pieces left in stock. </p>
              </div>
              <div className="flex lg:flex-row md:flex-col flex-col w-full gap-2">
                <motion.div className='lg:w-[50%] border-2 h-10 w-full rounded-md  flex justify-center items-center gap-2' initial={{background:"#FFFFFF"}}whileHover={{scale:[1,1.2,0.8,1],background:"#FFFFFF"}}>
                <VscLaw className='text-2xl '/>
                <span>Add to cart.</span>
                </motion.div>
                <motion.div className='lg:w-[50%] border-2 h-10 rounded-md w-full  flex justify-center items-center gap-2' whileHover={{scale:[1,1.2,0.8,1],background:"#FFFFFF"}} transition={{duration:0.7}}>
                <AiOutlineHeart className='text-2xl ml-2 '/>
                <span className=''>Add to Wishlist.</span>
                </motion.div>
              </div>
            </div>
        </motion.div>

    </motion.div>
  )
}
