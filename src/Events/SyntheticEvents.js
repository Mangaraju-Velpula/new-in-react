import React from 'react';

export default class SyntheticEvents extends React.Component {
    onClick = (e) => {
        // e.stopPropagation();
        console.log("SyntheticEvents on button", e.target, e.nativeEvent);
        setTimeout(()=> {
            console.log("After 2 sec event is ", e.target);
        }, 2000)
    }

    onDivClick = (e) => {
        console.log("SyntheticEvents onDivClick ", e.target);
        setTimeout(()=> {
            console.log("After 2 sec event is ", e);
        }, 2000)
    }

    onRootDivClick = (e) => {
        console.log("SyntheticEvents onRootDivClick ", e.target, e.currentTarget);
        // const rajesh = e;
        // e.persist()
        setTimeout(()=> {
            console.log("After 2 sec event is ", e);
        }, 2000)
    }

    render() {
        return(
        <div onClick={this.onRootDivClick} className="rootDivClass">
            <div onClick={this.onDivClick} className="divClass">
                <button type="submit" onClick={this.onClick}> Click Here </button>
            </div>
        </div>
        )
    }
}