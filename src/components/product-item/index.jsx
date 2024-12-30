import { Rating } from "@mui/material"
import { TfiFullscreen } from "react-icons/tfi"
import Button from "@mui/material/Button"
import { FaRegHeart } from "react-icons/fa"
import ProductModal from "../ProductModal"
import { useState } from "react"

export default function ProductItem() {
  const [isOpenProductModal,setIsOpenProductModal] = useState(false);

  const viewProductDetails = (id)=>{
    setIsOpenProductModal(true);

  }
  const closeProductModal = ()=>{
    setIsOpenProductModal(false);
  }
  return (
    <>
      <div className="item productItem">
        <div className="imgWrapper">
          <img
            src="https://res.cloudinary.com/dvyozjjma/image/upload/v1722761626/1722761629571_fulpari-girls-lehenga-choli-ethnic-wear-embroidered-lehenga-choli-and-dupatta-set-blue-product-images-rvpuaipzwc-0-202310262013.webp"
            className="w-100"
          />
          <span className="badge badge-primary">28%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <TfiFullscreen />
            </Button>
            <Button>
              <FaRegHeart style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>
            FULPARI Girls Lehenga Choli Ethnic Wear Embroidered Lehenga Choli
            and Dupatta Set ( Blue )
          </h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
            className="mt-2 mb-2"
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger">$14.00</span>
          </div>
        </div>
      </div>

      {isOpenProductModal === true && (
        <ProductModal closeProductModal={closeProductModal} />
      )}
    </>
  )
}
