import React, { useState } from "react"



function Profile(){
    const [image, setImage] = useState("")

    const submitImage = () =>{
        dataTransfer.append("file",image)
        data.append("upload_present","x6awyq1u")
        data.append("cloud_name","dh7okwoep")

        fetch("https://api.cloudinary.com/v1_1/dh7okwoep/image/upload",{
            method:"post",
            body:data
       })
        .then((res)=>res.json)
        .then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <>
        <div>
            <div>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                    <button>onClick={setImage}upload</button>

            </div>
        </div>
        </>
    )
        
    }
