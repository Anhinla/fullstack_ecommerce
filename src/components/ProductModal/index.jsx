import Dialog from "@mui/material/Dialog"
import { MdClose } from "react-icons/md"
import Button from "@mui/material/Button"
import { Rating } from "@mui/material"
import Slider from "react-slick"

export default function ProductModal(props) {
  return (
    <>
      <Dialog
        open={true}
        className="locationModal productModal"
        onClose={() => props.closeProductModal()}
      >
        <Button className="close_" onClick={() => props.closeProductModal()}>
          <MdClose />
        </Button>
        <h4
          className="mb-1"
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "rgba(0,0,0,0.8)",
          }}
        >
          BRUTON Trendy Sports Shoes For Men (Blue)
        </h4>
        <div className="d-flex align-items-center">
          <div
            className="d-flex align-items-center"
            style={{ marginRight: "20px" }}
          >
            <span>Brands: </span>
            <span style={{ marginLeft: "5px" }}>
              <b>Bruton</b>{" "}
            </span>
          </div>
          <Rating
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
        <hr />
        <div className="row mt-2 productDetailModal">
          <div className="col-md-5">
            <div className="productZoom">
                <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                    
                </Slider>
            </div>

          </div>
          <div className="col-md-5"></div>
        </div>
      </Dialog>
    </>
  )
}
