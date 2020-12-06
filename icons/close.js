import React from 'react';

export default function Close({ style }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            style={style}
        >
            <g data-name="Layer 2">
                <g data-name="close">
                    <rect
                        width="26"
                        height="26"
                        opacity="0"
                        transform="rotate(180 12 12)"
                    />
                    <path
                        fill="white"
                        d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                    />
                </g>
            </g>
        </svg>
    );
}
