import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {FiGithub,FiGitlab} from 'react-icons/fi'
import {CiLinkedin} from 'react-icons/ci'
import {TbCurrencyEthereum} from 'react-icons/tb'
import {ProductInfo} from './ProdutInfo/ProductInfo'
import { ProfileCard } from './ProfileCard/ProfileCard'
import './index.css'
const links = [
  {
      icon:<FiGithub className='text-2xl mx-auto  text-black'/>,
      link:'https://github.com/ehiosu'
  },
  {
      icon:<CiLinkedin className='text-2xl mx-auto  text-black'/>,
      link:'#'
  },
  {
      icon:<FiGitlab className='text-2xl mx-auto  text-black'/>,
      link:'https://github.com/ehiosu'
  },
  {
      icon:<TbCurrencyEthereum className='text-2xl mx-auto  text-black'/>,
      link:'#'
  }
]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductInfo dealText={'free shipping.'} />
    <ProfileCard links={links} username={"Metamask"} text={"MetaMask brings Ethereum to your web browser"} organizations={1} orglength={8} followers={'10K'} bgColor={'#FFFAF2'}></ProfileCard>
  </React.StrictMode>,
)
