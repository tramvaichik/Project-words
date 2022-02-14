import React from "react";
import err from "../public/err.png";




export default function Err() {
    return (
        <>
            <div className="err">
                <div className="err_container">
                    <img src={err} className="err_img" alt="404" />
                    <p className="err_txt"> Кажется, вы заблудились. Такой страницы нет </p>
                </div>
            </div>
        </>
    )
}

