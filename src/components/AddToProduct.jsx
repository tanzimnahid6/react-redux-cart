import { useDispatch } from "react-redux"
import { addProduct } from "../Redux/admin/adminAction"


const AddToProduct = () => {
  const dispatch = useDispatch()
 

  const handleCartData = (e) => {
    e.preventDefault()
    const from = e.target
    const name = from.name.value
    const category = from.category.value
    const img_url = from.image_url.value
    const price = from.price.value
    const quantity = from.quantity.value

    const cartProductDetails = {
      id: new Date().getTime().toString(36),
      name,
      category,
      img_url,
      price,
      quantity,
      count: 0,
    }
    dispatch(addProduct(cartProductDetails))
  }
  return (
    <div>
      <div>
        {/* Product Input Form */}
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form
            onSubmit={handleCartData}
            className="space-y-4 text-[#534F4F]"
            id="lws-addProductForm"
          >
            {/* product name */}
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input
                name="name"
                className="addProductInput border-2"
                id="lws-inputName"
                type="text"
                required
              />
            </div>
            {/* product category */}
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input
                name="category"
                className="addProductInput border-2"
                id="lws-inputCategory"
                type="text"
                required
              />
            </div>
            {/* product image url */}
            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input
                name="image_url"
                className="addProductInput border-2"
                id="lws-inputImage"
                defaultValue={"https://i.ibb.co/3pngHCw/2.png"}
                type="text"
                required
              />
            </div>
            {/* price & quantity container */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* price */}
              <div className="space-y-2">
                <label htmlFor="ws-inputPrice">Price</label>
                <input
                  name="price"
                  className="addProductInput border-2"
                  type="number"
                  defaultValue={50}
                  id="lws-inputPrice"
                  required
                />
              </div>
              {/* quantity */}
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input
                  name="quantity"
                  className="addProductInput border-2"
                  type="number"
                  defaultValue={50}
                  id="lws-inputQuantity"
                  required
                />
              </div>
            </div>
            {/* submit button */}
            <button
              type="submit"
              id="lws-inputSubmit"
              className="btn bg-black w-full text-white p-2 rounded hover:scale-90 transition-all"
            >
              Add Product
            </button>
          </form>
        </div>
        {/* Product Input Form Ends */}
      </div>
    </div>
  )
}

export default AddToProduct
