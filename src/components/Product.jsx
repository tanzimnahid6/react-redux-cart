
import { useSelector } from "react-redux"
import ProductItem from "./ProductItem"

const Product = () => {
  const products = useSelector((state)=>state.admin)

  
  return (
   
      <div className="productContainer" id="lws-productContainer">
        {products.map((item)=><ProductItem key={item.id} product={item}></ProductItem>)}
      </div>
   
  )
}
export default Product
