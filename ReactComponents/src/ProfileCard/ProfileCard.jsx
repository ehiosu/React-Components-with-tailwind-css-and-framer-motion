import React from 'react'
import profileimage from './profileimage.png'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { motion } from 'framer-motion'

export const ProfileCard = ({width,bgColor,progressColor,image,username,tag,text,links,followers,follow,organizations,orglength,followbtnColor}) => {
  return (
    <div className={`container lg:w-[45vw] h-auto p-4 bg-[${bgColor}] text-black rounded-md`}>
        <div className="grid grid-cols-2">
            {/* left side */}
            <div>
                <div className="col-span-1 p-2">
                    <div className="flex flex-col text-start gap-2">
                        <div className="img-container overflow-hidden object-contain rounded-full h-16 w-16">
                            <img src={image?image:profileimage} alt="profile image" />
                        </div>
                        <p className='font-semibold'>{username}</p>
                        <p className='text-sm'>@{username}</p>
                        <p className='text-sm max-w-[75%]'>{text}</p>
                       <div className="flex gap-3">
                       {
                            links.map((link,index)=>{
                                return(
                                    <div key={index} className='w-10 h-10 rounded-md bg-white border-2 border-[#DFDFDF] bg-[#FFFFFF]  flex justify-center items-center'>
                                        <a href={link.link} className=''>{link.icon}</a>
                                    </div>
                                )
                            })
                        }
                       </div>
                    </div>
                </div>
            </div>
            {/* left side ends */}
            {/* right side */}
            <div className="col-span-1">
                <div className='flex flex-col h-full w-full self-end justify-between '>
                        <div className="flex flex-initial justify-between mt-10">
                            <p>{organizations}/{orglength}</p>
                            <AiOutlineInfoCircle/>
                        </div>
                        <motion.div className='w-full h-2 rounded-md bg-[#DFDFDF]' >
                            <div className={` w-[${(organizations/orglength)*100}%] rounded-md h-2 bg-[#F17A37]`}></div>
                        </motion.div>
                        <div className="flex flex-col  flex-1 h-full self-end items-end ">
                            <p className='font-bold text-xl mt-auto'>{followers} <span className=' text-sm'>followers</span></p>
                            <button className='w-28 h-auto p-2 text-white bg-black rounded-md text-sm'>follow</button>
                        </div>
                </div>
            </div>
            {/* right side ends */}
        </div>

    </div>
  )
}
