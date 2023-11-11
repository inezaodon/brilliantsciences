import {Stack} from "@mui/material"
export default ({title, children, noPad, innerStyle, style, spacing, borderColor}) => {
  return (
    <Stack spacing={0.5} style={{
      padding: ".5rem",
      ...style
    }}>
      <h3 sx={{color: "primary.main"}} style={{padding: "0 .5rem"}}>{title}</h3>
      <Stack sx={{borderColor: (borderColor != null && borderColor != undefined) ? borderColor : "primary.main"}} spacing={spacing} style={{
        borderRadius: "4px",
        borderStyle: "solid",
        borderWidth: "1.5px",
        padding: noPad ? "0" : ".5rem",
        display: "flex",
        flex: 1,
        ...innerStyle
      }}>
        {children}
      </Stack>
    </Stack>
  )
}
