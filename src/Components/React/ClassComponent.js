import React, { Component } from 'react';

class ClassComponent extends Component {

    // mounting phase.

    // calling sequence.
    constructor(props) {
        // step1 in monting 
        console.log("in constructor")
        super(props)
        this.state = {
            firstName: "Deepak",
            LastName: "Keshri"
        }
    }

    static getDerivedStateFromProps(props, state) {
        // step2 in monting 

        // step1 in update phase.



        // this method is called everytime when component re-render.
        console.log("getDerivedStateFromProps called.");
        // if (props.LastName !== undefined)
        //     state.LastName = props.LastName;
        // return state;
        return null;
    }


    componentDidMount() {
        // step4 in monting 

        // this method is called only once.
        // here we can may ajax call or any API call. to fetch data
        console.log("componentDidMount called.");
    }

    // mounting phase close.

    // update phase start.

    shouldComponentUpdate(nextProps, nextState) {
        // step 2 update phase
        console.log("shouldComponentUpdate called.");
        return true;
    }

    getSnapshotBeforeUpdate(prevProp,prevState){
         // step 3 update phase

         // this method is use to get the scroll position or many things and return a value. 
         console.log("getSnapshotBeforeUpdate called.");
         return null;
    }
    componentDidUpdate(prevProp,prevState,snapshot){
        // step 4 update phase

        // returned value from getSnapshotBeforeUpdate fn is passed to the snapshot parameter of this method.

        // here we can go for the ajax call or any side effect.
        console.log("componentDidUpdate called.");
        return null;
    }
    // update phase close.


    // unmounting phase

    componentWillUnmount(){
        // this method invoked immediately before component is unmount or destroyed.

        // we can perform cleanup task.
        // cancling request or unsubscribe event handlers.
        console.log("componentWillUnmount called.");
    }

    // unmounting phase close

    clickHandler = () => {
        this.setState({
            LastName: "sharma"
        });
        console.log('clickHandled')
    }
    render() {
        // Render also called in mounting phase.
        // step3 in monting and updating phase too.
        console.log("render called."+ this.state.LastName);
        
        return <div>
            <h1>Class Component Lifecycle</h1>
            <span>FirstName: {this.state.firstName} <br></br> LastName: {this.state.LastName}</span>
            <br />
            <button onClick={this.clickHandler}> Change LastName </button>
        </div>;
    }
}

export default ClassComponent;
