import { useDispatch } from "react-redux"
import { addToCart } from "../Redux/user/userAction"

const ProductItem = ({product}) => {
  const dispatch = useDispatch()
  const {id,name,category,img_url,price,quantity} = product
  const handleAddCart = ()=>{

    dispatch(addToCart(product))
  }
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={img_url} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button onClick={()=>handleAddCart()}  className="lws-btnAddToCart">Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductItem
