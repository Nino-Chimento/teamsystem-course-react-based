const Template = ({ children }) => {


    return < div style={{ backgroundColor: "blue", color: "white" }}>
        <div>header</div>
        {children}
        <div>footer</div></ div>
}

export default Template