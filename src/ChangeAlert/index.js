import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css';
import '../TodoForm/TodoForm.css';


function ChangeAlert({ show, toggleShow }){
    if (show){
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador</p>
                    <p>Sincroniza tus TODOs</p>
                    <button 
                        className="btn-todoForm btn-todoForm--add"
                        /* onClick={() => toggleShow(false)} */
                        onClick={toggleShow}
                    >
                        Aceptar
                    </button>
                </div>
                
            </div>
        );
    } else{
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);


export { ChangeAlertWithStorageListener };