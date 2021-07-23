import { useState } from 'react';

export default function useSwitch(){
    const [open,setOpen] = useState(true);

    const bind =()=>({
        open,
        onChange:setOpen
    })
    
    return {
        open,
        setOpen,
        bind,
    }
}