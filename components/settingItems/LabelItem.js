import {Select, Stack, Typography} from "@mui/material"

export default ({text, value, style, valueProps}) => {
  return (
    <Stack style={style} justifyContent="space-between" alignItems="center" direction="row">
      <span>{text}</span>
      <Typography style={{fontSize: ".8rem", fontWeight: "bold"}} {...valueProps}>{value}</Typography>
    </Stack>
  )
}