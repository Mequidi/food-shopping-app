import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
// import Card from "./Card";

const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onClick} />
}

const ModalOverlay = (props) =>{
    return <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    
}

const portalElement = document.getElementById("overlay");

const Modal = (props) =>{
    return (<Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}     
    </Fragment>)
}

export default Modal