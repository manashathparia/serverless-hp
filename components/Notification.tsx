import React from 'react';
import styled from 'styled-components';
import InfoIcon from '../icons/info';
import CloseIcon from '../icons/close';
import SuccessIcon from '../icons/success';
import ErrorIcon from '../icons/error';

const variants = {
    info: {
        icon: <InfoIcon />,
        background: '#353941',
    },
    success: {
        icon: <SuccessIcon />,
        background: 'green',
    },
    error: {
        icon: <ErrorIcon />,
        background: '#ca0000',
    },
};

export default function Notification({ notifications, onClose }) {
    const autoClose = (bool) => {
        if (bool) setTimeout(onClose, 5000);
    };

    return notifications.map(({ varient, message, autoDismiss }) => (
        <Root key={message} varient={varient}>
            {autoClose(autoDismiss)}
            <Icon>{variants[varient].icon}</Icon>
            <div
                style={{
                    display: 'inline-block',
                    marginTop: '2px',
                    paddingLeft: '6px',
                    minWidth: '80%',
                }}
            >
                <span>{message}</span>
            </div>
            <Close onClick={onClose}>
                <CloseIcon style={{ verticalAlign: 'middle' }} />
            </Close>
        </Root>
    ));
}

const Root = styled.div`
    min-width: 300px;
    min-height: 30px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background: ${({ varient }) => variants[varient].background};
    border-radius: 5px;
    @media only screen and (max-width: 786px) {
        width: 97vw;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
    }
`;

const Icon = styled.div`
    display: inline-block;
    @media only screen and (max-width: 786px) {
        text-align: center;
    }
`;
const Close = styled.div`
    display: inline-block;
    width: 20px;
    padding: 5px;
    vertical-align: middle;
    margin-right: 10px;
    margin-top: 3px;
    @media only screen and (max-width: 786px) {
        position: absolute;
        top: 0;
        right: 0;
    }
    cursor: pointer;
`;
