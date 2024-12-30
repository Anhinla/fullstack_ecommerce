import Button from "@mui/material/Button"
import {IoIosMenu} from "react-icons/io"
import { FaAngleDown } from "react-icons/fa6"
import { Link } from "react-router-dom"
import {CiHome} from "react-icons/ci"
import { useState } from "react"
import { FaAngleRight } from "react-icons/fa6"

export default function Navigation() {
  const [isOpenSideBarVal,setIsOpenSideBarVal] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCartTab align-items-center"
                onClick={() => setIsOpenSideBarVal(!isOpenSideBarVal)}
              >
                <span className="icon1" style={{ marginRight: "7px" }}>
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2" style={{ marginLeft: "7px" }}>
                  <FaAngleDown />
                </span>
              </Button>
              <div
                className={`sidebarNav ${
                  isOpenSideBarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Fashion <FaAngleRight className="rightIcon"/></Button>
                      <div className="submenu">
                        <Link to="/">
                          <Button>clothing</Button>
                        </Link>
                        <Link to="/">
                          <Button>footwear</Button>
                        </Link>
                        <Link to="/">
                          <Button>watches</Button>
                        </Link>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Electronics</Button>
                      <div className="submenu">
                        <Link to="/">
                          <Button>clothing</Button>
                        </Link>
                        <Link to="/">
                          <Button>footwear</Button>
                        </Link>
                        <Link to="/">
                          <Button>watches</Button>
                        </Link>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Bakery</Button>
                      <div className="submenu">
                        <Link to="/">
                          <Button>clothing</Button>
                        </Link>
                        <Link to="/">
                          <Button>footwear</Button>
                        </Link>
                        <Link to="/">
                          <Button>watches</Button>
                        </Link>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Grocery</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Mobiles</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline w-100 ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button> Home</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Fashion</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Electronics</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Bakery</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Grocery</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Mobiles</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Blog</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Contact</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
