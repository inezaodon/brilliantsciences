import {Typography, Stack, Button} from "@mui/material"

export default ({list, spacing}) => {
  return (
    <Stack id="preferred-course-select-label" justifyContent="space-between" spacing={spacing ? spacing : 0.5}>
      {
      list && (
        list.map((item, index) => (
          <Stack sx={{borderColor: "primary.main"}} key={index} justifyContent="space-between" direction="row" alignItems="center" style={{
            borderStyle: "solid",
            borderWidth: 0,
            borderBottomWidth: index == list.length - 1 ? 0 : "1.5px",
            paddingBottom: index == list.length - 1 ? 0 : ".5rem"
          }}>
            <span>{item[0]}</span>
            <Stack component={"span"} style={{
              fontSize: ".8rem",
              fontWeight: "bold"
            }}>{
            item[1]
              ? <Typography component={"span"} color="primary">passed</Typography>
              : <Stack direction="row" alignItems="center" spacing={0.5}>
                  <Button style={{height: "1.7rem"}} color="primary" onClick={() => {
                    console.log("retake")
                  }}>retake</Button>
                  <Typography component={"span"} color="error">failed</Typography>
                </Stack>
            }</Stack>
          </Stack>
        ))
      )
    }
    </Stack>
  )
}