import React from "react";
class StealthTransfer extends React.Component {
    render() {
        const centerDiv = {
            width:'140px', borderRadius: '5px', color:'lightgrey',
            padding:'10px', height:'50px', position:'absolute',
            marginTop:'-25px', marginLeft:'-70px', top:'50%', left:'50%',
            fontWeight: '100',
            fontSize: '44px',
        };
        return (
            <div className="grid-content" style={{overflowX: "hidden"}}>

                <div className="content-block">
                    <h1 style={centerDiv}>Transfer...</h1>
                </div>
            </div>
        );
    }
}
export default StealthTransfer;