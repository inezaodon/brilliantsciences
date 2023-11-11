export default ({code, text}) => {
    return (
        <div>
            <h1 style={{
                display: "inline-block",
                borderRight: "1px solid rgba(0, 0, 0,.3)",
                margin: 0,
                marginRight: "20px",
                padding: "10px 23px 10px 0",
                fontSize: "24px",
                fontWeight: 500,
                verticalAlign: "top"}}>
                    {code}
            </h1>
            <div style={{
                display: "inline-block",
                textAlign: "left",
                lineHeight: "49px",
                height: "49px",
                verticalAlign: "middle"}}>
                <h2 style={{
                    fontSize: "14px",
                    fontWeight: "normal",
                    lineHeight: "inherit",
                    margin: 0,
                    padding: 0}}>
                    {text}
                </h2>
            </div>
        </div>
    )
  }
  