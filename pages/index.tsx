// import Head from 'next/head'
// import Image from 'next/image'
// import { ProductList } from '../components/ProductList'
import styles from '../styles/Home.module.css'
import { ProductList } from '../components/ProductList' 



export default function Home() {
  return (
    <div className = "min-h-screen bg-gray-200"> 
      <div className= "bg-white shadow"> 
        <div className = "max-w-7xl mx-auto">
          <div className="flex justify-center h-16">
            <div className="space-x-8">
              Products
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <main className = "max-w-7xl mx-auto ">
          <ProductList />
        </main>
      </div>
    </div>

  )
}
  