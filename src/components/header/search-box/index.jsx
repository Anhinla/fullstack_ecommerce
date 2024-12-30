import Button from "@mui/material/Button"
import { IoSearch } from "react-icons/io5"

export default function SearchBox() {
  return (
    <div className="headerSearch" style={{marginLeft:'15px',marginRight:'15px'}}>
      <input type="text" placeholder="Search for products..." />
      <Button>
        <IoSearch />
      </Button>
    </div>
  )
}
