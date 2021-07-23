import {css} from '@emotion/react'
import { useState } from 'react';
import Heading from "../../components/Heading";
import Text from '../../components/Text'
import Switch from "./components/Switch";
import useSwitch from './hooks/useSwitch';

function DemoPage() {

    const {bind} = useSwitch()

    return (
    <div className="DemoPage">
        <Text>hi</Text>
        <Heading as='h5'>hello</Heading>
        
        {/* <h3>{open ? 'open' : 'close'}</h3> */}

        <div css={css`
            margin:20px;
        `}>
            <Switch {...bind()} />
        </div>
    </div>
    )
    
}

export default DemoPage