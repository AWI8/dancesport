import React from 'react'

function GoogleAnalitics() {
    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}/>
            <script dangerouslySetInnerHTML={{
                __html:`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_ID}',{
                    page_path: window.location.pathname,
                });
                `,}}
            />
        </>
    )
}

export default GoogleAnalitics