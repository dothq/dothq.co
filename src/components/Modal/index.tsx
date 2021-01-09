import React from "react"
import RM from 'react-modal';
import { colours } from "../../colours";

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '24px'
    },
    overlay: {
        zIndex: 1000,
        backgroundColor: '#00000080'
    }
};  

RM.setAppElement('html')

export const Modal = ({ visible, children, title, subtitle }: { visible: boolean; children: any; title?: string; subtitle?: string }) => {  
    return (
        <RM
            isOpen={visible}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <>
                {title && <h2 style={{ margin: "0 auto", textAlign: "center" }}>{title}</h2>}
                {subtitle && <p style={{ margin: "0 auto", textAlign: "center", marginTop: "8px", color: colours.gray2 }}>{subtitle}</p>}
                {children}
            </>
        </RM>
    );
}