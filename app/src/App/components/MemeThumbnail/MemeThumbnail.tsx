import { MemeSVGViewer } from "orsys-tjs-meme";
import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import React from "react";
import style from "./MemeThumbnail.module.css"

interface IMemeThumbnailProps {
    images:Array<IImage>
    memes:Array<IMeme>
}

const MemeThumbnail: React.FC<IMemeThumbnailProps> = (props) => {
   
    return (
        <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
            {
                props.memes.map((meme:IMeme) =>
                <div className={style.vignette} key={"MemeThumbnail"+meme.id}>
                    <MemeSVGViewer 
                    meme={meme}
                    image={props.images.find((img:IImage)=>img.id===meme.imageId)} />
                </div>  
                )
            }
        </div>
    )
}

export default MemeThumbnail;