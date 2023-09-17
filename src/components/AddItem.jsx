import AddToCart from "./AddToProduct"
import Product from "./Product"

function AddItem() {
  return (
    <div className="py-16">
      <div className="productWrapper">
        {/* products container */}
        <Product></Product>

        {/* products container ends */}
        <AddToCart></AddToCart>
      </div>
    </div>
  )
}

export default AddItem
