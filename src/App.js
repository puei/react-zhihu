import { css } from '@emotion/react'
import { Global } from '@emotion/react'
import { normalize } from 'polished'
import React from 'react'
import { THEME } from './constants/theme'
// import { THEME } from './constants/theme'
import Routes from './Routes'

function App() {
  return (
    <div className='App'>
      <>
        <Routes />
        <Global styles={css`
          ${normalize()};
          html{
            box-sizing:border-box;
          }
          html,body{
            background-color:rgb(246,246,246);
            color:${THEME.colors.black[100]};
          }
          *,*:before,*:after{
            box-sizing:inherit;
          }
          input{
            background:none;  
	          outline:none;  
	          border:0px;
          }
        `} />
      </>
    </div>
  )
}

export default App
