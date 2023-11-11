import ErrorComponent from "../components/ErrorComponent"

export default () => {
    return (
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}>
            {/* Reset your Password */}
            <ErrorComponent code="Error" text="Can't reset your password"/>
        </div>
    )
  }
  