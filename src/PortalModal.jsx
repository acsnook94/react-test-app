import { createRoot } from "react-dom/client";
import { useState } from "react";
import { createPortal } from "react-dom";

function PortalledModal({isOpen, onClose, children}){
    if(!isOpen) return null;

    return createPortal(
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px'
            }}>
            </div>
        </div>,
        document.body
    );
}

function ModalTestPage(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <h1>My Test App</h1>
            <button onClick={()=>setIsOpen(true)}>
                Open Modal
            </button>
        
            <PortalledModal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                <h2>Modal Content</h2>
                <p>This content is rendered outside the App component!</p>
            </PortalledModal>
        </div>

    )
}

export {ModalTestPage};