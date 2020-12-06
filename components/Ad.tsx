import React from 'react';

export default function Ad() {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-8388643923972618"
                data-ad-slot="6313855938"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
            <script>if(typeof adsbygoogle === 'undefined' && !Array.isArray(adsbygoogle)) (adsbygoogle = window.adsbygoogle || []).push({});</script>`,
            }}
        ></div>
    );
}
