import React, { Component } from 'react';
class Counter extends Component {
    state={
        count:0,
        
    };
    

    handleIncrement =()=>{
        
        this.setState({count: this.state.count+1})
        this.props.recieved(this.props.price)
    };
    handleDecrement =()=>{
        if (this.state.count===0){
            this.setState({count: 0})
        }
        else{
            this.setState({count: this.state.count-1})
            this.props.recieved2(this.props.price)
        }
    };
    render() { 
        let classes = "badge m-2 badge-";
        classes+= this.state.count===0 ? "warning":"primary";
        return (
        <div style={{border:"solid", backgroundImage: "URL(bg11.png)"}}>
            {this.props.children}
            <span className={classes}>Quantity: {this.state.count}</span>
            {/* <span className="badge badge-primary m-5">{this.state.count+1}</span> */}
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Add to cart</button>
            <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-5">Decrement</button>
            {/* <ul>{this.state.items.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
        </div>
        );
    }
}
 
export default Counter;