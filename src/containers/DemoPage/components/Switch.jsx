import { desaturate, size as pSize } from "polished"
import {css} from '@emotion/react'
import { useState } from "react"
// import {THEME} from '../../../constants/theme'

function Switch({
        size=40,
        open,
        defaultOpen,
        onChange=()=>{},
        ...props}){
    let [toggle,setToggle] = useState(defaultOpen)

    if((open && defaultOpen) !== undefined){
        return new Error('open and defaultOpen can not be used at sametime');
    }

    if(open !== undefined){
        toggle = open;
        setToggle = onChange;
    }

    function handleClick(){
        const newState = !toggle;
        setToggle(newState)
        onChange(newState)
    }

    return(
        <div className="Switch" css={css`
            display:inline-flex;
            width:${size*2}px;
            padding:4px;
            background-color:lavender;
            border-radius:100px;
            cursor:pointer;
            user-select:none;
            box-sizing:content-box;
        `}
            onClick={handleClick}
            {...props}
        >
            <div className="circle" css={
                [
                    css`
                        ${pSize(size)};
                        border-radius:100px;
                        background-color:slateblue;
                    `,
                    !toggle && css`
                        transform:translate(${size}px);
                        background-color:${desaturate(.4,'slateblue')};`,
                ]
                } />
        </div>
    )
}

export default Switch