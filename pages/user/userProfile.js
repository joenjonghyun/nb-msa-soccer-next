import React from 'react';
// import 'features/common/style/Button.scss'
export default function profile(){
    return <a className="arrow-btn" style={{cursor:"pointer"}}
        onClick = { e => {
            e.preventDefault()
            e.stopPropagation()
            localStorage.clear(e)
            window.location.href="/"
        }}> 프로필
    </a>}