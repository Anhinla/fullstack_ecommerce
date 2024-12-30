import { IoShirtOutline } from "react-icons/io5"
import { TbTruckDelivery } from "react-icons/tb"
import { RiDiscountPercentLine } from "react-icons/ri"
import { CiBadgeDollar } from "react-icons/ci"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span>
              <IoShirtOutline />
            </span>
            <span style={{ marginLeft: "10px" }}>Every day fresh products</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <TbTruckDelivery />
            </span>
            <span style={{ marginLeft: "10px" }}>
              Free delivery for order over $70
            </span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <RiDiscountPercentLine />
            </span>
            <span style={{ marginLeft: "10px" }}>Daily Mega Discounts</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <CiBadgeDollar />
            </span>
            <span style={{ marginLeft: "10px" }}>Best price on the market</span>
          </div>
        </div>

        <div className="row mt-5 linksWrap">
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="/">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="/">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="/">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="/">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="/">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="/">Packaged Produce</Link>
              </li>
              <li>
                <Link to="/">Party Trays</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>BEVERAGES</h5>
            <ul>
              <li>
                <Link to="/">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="/">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="/">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="/">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="/">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="/">Packaged Produce</Link>
              </li>
              <li>
                <Link to="/">Party Trays</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="/">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="/">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="/">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="/">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="/">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="/">Packaged Produce</Link>
              </li>
              <li>
                <Link to="/">Party Trays</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="/">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="/">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="/">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="/">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="/">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="/">Packaged Produce</Link>
              </li>
              <li>
                <Link to="/">Party Trays</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright mt-3 pt-3 pb-3 d-flex">
          <p className="mb-0">
            Copyright 2024 &copy; Bacola WordPress Theme. All rights reserved.
            Powered by KlbTheme.
          </p>
          <ul className="list list-inline ml-auto mb-0">
            <li className="list-inline-item">
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
