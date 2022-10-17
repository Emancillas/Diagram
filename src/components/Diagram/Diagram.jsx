
const Diagram = ({children}) => {
  return (
    <div style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "390px", 
        background: "white", 
        height: "600px",
       }}
        >
          {children}
    </div>
  );
};

export default Diagram;
