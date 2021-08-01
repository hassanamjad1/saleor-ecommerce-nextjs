// import Head from 'next/head'
// import Image from 'next/image'
// import { ProductList } from '../components/ProductList'
import styles from '../styles/Home.module.css'
import { ProductList } from '../components/ProductList' 



export default function Home() {
  return (
    <div className = "min-h-screen bg-gray-200"> 
      
      <ProductList />
    </div>

  )
}
  