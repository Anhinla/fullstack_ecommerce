import Logo from '../../assets/images/logo.jpg'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button'
import CountryDropDown from '../country-dropdown'
import {IoBagOutline} from 'react-icons/io5'
import {FiUser} from 'react-icons/fi';
import SearchBox from './search-box'
import Navigation from './navigation'
import { useContext } from 'react'
import { MyContext } from '../../App'

export default function Header(){
  const context = useContext(MyContext);

    return (
      <>
        <div className="headerWrapper">
          <div className="top-strip bg-purple">
            <div className="container">
              <p className="mb-0 mt-0 text-center">
                Due to the <b>COVID 19</b> epidemic, orders may be processed
                with a slight delay
              </p>
            </div>
          </div>

          <header className="header">
            <div className="container">
              <div className="row">
                <div className="logoWrapper d-flex align-items-center col-sm-2">
                  <Link to={"/"}>
                    <img src={Logo} alt="Logo" />
                  </Link>
                </div>
                <div className="col-sm-10 d-flex align-items-center part2">
                  {context.countryList.length !== 0 && (
                    <CountryDropDown/>
                  )}

                  <SearchBox></SearchBox>
                  <div className="part3 d-flex align-items-center ml-auto">
                    <Button className="circle mr-3">
                      <FiUser />
                    </Button>
                    <div
                      className="ml-auto cartTab d-flex align-items-center"
                      style={{ marginLeft: "20px" }}
                    >
                      <span className="price">$3.29</span>
                      <div className="position-relative">
                        <Button className="circle">
                          <IoBagOutline />
                        </Button>
                        <span className="count d-flex align-items-center justify-content-center">
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <Navigation />
        </div>
      </>
    )
}