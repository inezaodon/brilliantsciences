import { Button } from "@mui/material"

export default (props) => {
  return (
    <Button sx={{marginLeft: "0.5rem"}} {...props} onClick={(e) => {e.stopPropagation(); try{props.onClick()}catch (error) {}}}></Button>
  )
}
