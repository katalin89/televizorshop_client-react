import React from "react";

import { useState } from "react";



function Add (){
    const[marca,setMarca]=useState("");

    const [model,setModel]=useState("");

    const[pret,setPret]=useState("");
    

    let [erors,setErrors]=useState("");

    function checkErors(){
        let aux=[];

        if(marca===""){
            aux.push("You must complete marca");

        }

        if(model===""){
            aux.push("You must complete model");
        }

        if(pret===""){
            aux.push("You must complete pret");
        }

        setErrors(aux);
    }

    function handleAddTelevizoare(){
        checkErors();

        if(erors.length==0){
            let televizor={marca,model,pret};
            console.log(televizor);
            handleAddTelevizoare(televizor);
        }
    }

    return(
        <>
        <div className="errrs">
            {
                erors.length>0?erors.map((e)=><p>{e}</p>):null
            }
            
        </div>
        
        <div className="addContainer">
            <label>

                Enter Marca:
                <input 
                type="text"
                name="marca"
                onChange={(event)=>{
                    setMarca(event.target.value);
                }}
                />

                </label>
                
                <label>
                    Enter Model:
                    <input
                    type="text"
                    name="model"
                    onChange={(event)=>{
                        setModel(event.target.value);
                    }}
                    />
                </label>
               
                 <label>
                    Enter pret:
                    <input
                        type="text"
                        name="pret"
                        onChange={(event)=>{
                            setPret(event.target.value)
                        }}
                    />
                    
                    </label>   
                    <button onClick={handleAddTelevizoare}>Add</button>

        </div>
        
        </>
    );
      
}

export default Add;