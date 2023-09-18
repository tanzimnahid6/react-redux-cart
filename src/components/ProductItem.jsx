import { useDispatch, useSelector } from "react-redux"
import { addToCart, incrementProduct } from "../Redux/user/userAction"
import { reduceQuantityFromAdmin } from "../Redux/admin/adminAction"
import Swal from "sweetalert2"

const ProductItem = ({ product }) => {
  const products = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  
  const { id, name, category, img_url, price, quantity } = product
  const handleAddCart = (id) => {
    const isExist = products.find((item)=>item.id === id)
    if(isExist){
      Swal.fire('Already added !!')
      return
    }

    dispatch(addToCart(product))
    dispatch(incrementProduct(id))
    dispatch(reduceQuantityFromAdmin(id))
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
        <button onClick={() => handleAddCart(id)} className="lws-btnAddToCart">
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem
