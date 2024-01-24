import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import Image from "next/image"
import { useRouter } from "next/router"

import camiseta from '../../assets/camisetas/1.png'

export default function Product() {
  const { query } = useRouter() 
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={camiseta} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Gostosas como um abraço, nossas camisetas são de excelência em algodão brasileiro, ideais para todos os climas. Todas as cores são 100% algodão; exceto cinzas-mescla: 88% algodão e 12% poliéster.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}