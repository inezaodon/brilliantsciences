import {Typography, Stack, TextField} from "@mui/material"

export default ({text, style, component, className}) => {
  return (
    <Stack style={style} className={className} justifyContent="space-between" alignItems="center" direction="row">
      <span>{text}</span>
      <Stack spacing={1} component={"span"} alignItems="center" direction="row" style={{fontSize: ".8rem", fontWeight: "bold"}}>
        {component}
      </Stack>
    </Stack>
  )
}