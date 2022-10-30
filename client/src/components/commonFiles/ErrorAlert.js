import React from "react";

export default function ErrorAlert({err}){
return (
    err && (
        <div >Error: {err.message}</div>
    )
)
}