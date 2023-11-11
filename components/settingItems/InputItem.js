import {Typography, Stack, TextField} from "@mui/material"

export default ({text, style, inputStyle, unit, unitProps, inputProps}) => {
  return (
    <Stack style={style} justifyContent="space-between" alignItems="center" direction="row">
      <span>{text}</span>
      <Stack spacing={1} component={"span"} alignItems="center" direction="row" style={{fontSize: ".8rem", fontWeight: "bold"}}>
        <TextField className="InputItem-input" {...inputProps}></TextField>
        <Typography  style={{fontSize: "1rem", fontWeight: "200", marginLeft: unit ? "8px" : 0}} {...unitProps}>{unit}</Typography>
      </Stack>
    </Stack>
  )
}