import { useState } from 'react';

export default function useSwitch(){
    const [open,setOpen] = useState(true);

    const bind =()=>({
        open,
        onChange:setOpen
    })
    
    function toggle() {
        setOpen(!open)
    }

    return {
        open,
        setOpen,
        bind,
        toggle,
    }
}