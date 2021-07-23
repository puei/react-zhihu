import { css } from '@emotion/react'
import { size } from 'polished'
import SvgLogo from '../../components/svgs/SvgLogo'
import SvgMess from '../../components/svgs/SvgMess'
import SvgNotification from '../../components/svgs/SvgNotification'
import SvgSearch from '../../components/svgs/SvgSearch'
import { THEME } from '../../constants/theme'
import { navigation } from '../Header/constants'

function Header() {
    return (
    <div className='Header' css={css`
        box-shadow : ${THEME.boxShadow.card};
        background-color:${THEME.colors.white[100]};
    `}>
        <div className="wrap" css={css`
            display:flex;
            align-items:center;
            flex-wrap:wrap;
            overflow:hidden;
            max-width:1200px;
            min-height:52px;
            margin:0 auto;
            padding:8px 12px;
            box-sizing:border-box;
        `}>
        <div className="logo" css={css`
            padding:0 10px;
        `}>
            <SvgLogo></SvgLogo>
        </div>
        
        <nav className='navigation' css={css`
            display:flex;
            align-self:normal;
            color:${THEME.colors.hint};
            a{
                display:flex;
                align-items:center;
                margin:0 20px;
                font-size:16px;
                color:currentColor;
                text-decoration:none;
            }
            a.active{
                font-weight:bold;
                color:${THEME.colors.black[100]};
                box-shadow:0 -3px 0 ${THEME.colors.primary} inset;
            }
        `}>
            <a className='active' href="#33" >样式测试</a>
            {Object.values(navigation).map(item=>(
                <a href={item.value} key={item.value}>
                    {item.title}
                </a>
            ))}
        </nav>
        <div className='search' css={css`
            display:flex;
            align-items:center;
            flex:1;
            input{
                flex:1;
                margin:12px;
                padding:8px 16px;
                border:1px solid ${THEME.colors.black[10]};
                border-radius:100px;
                font-size:14px;
                background-color:${THEME.colors.white[10]};
            }
            input:focus{
                color:${THEME.colors.primary};
            }
        `}>
            <input className='input' type="text" placeholder='搜索答案' />
            <SvgSearch size={15} css={css`
                margin:0 30px 0 -40px;
                color:${THEME.colors.primary};
            `} />
            <button type='button' css={css`
                padding:8px 20px;
                border: none;
                outline: none;
                background-color:${THEME.colors.primary};
                color:${THEME.colors.white[100]};
                border-radius:100px;
            `}>提问</button>
        </div>
        <div className="toolbar" css={css`
            display:flex;
            align-items:center;
            flex:0.4;
            justify-content:flex-end;
            color:${THEME.colors.hint};
            &>*{
                margin:0 12px;
            }
            .avatar{
                ${size(30)}
            }
            img{
                width:100%;
                height:100%;
                object-fit:cover;
                border-radius:6px;
            }
        `}>
            <div className="notification">
                <SvgNotification/>
            </div>
            <div className="message">
                <SvgMess/>
            </div>
            <a href="#avatar" className="avatar">
                <img src="https://pic3.zhimg.com/v2-a2c18b83cb7dadefbdfbd941565b3136_is.jpg" alt="" />
            </a>
        </div>
        </div>
    </div>
    )
    
}

export default Header