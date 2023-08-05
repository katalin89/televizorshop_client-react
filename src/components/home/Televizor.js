import React from "react";

function Televizor({televizor}){
    return(

        <tr>
            <td>{televizor.marca}</td>
            <td>{televizor.model}</td>
            <td>{televizor.pret}</td>

        </tr>
    );
}

export default Televizor;