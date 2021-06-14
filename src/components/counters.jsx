import React, { Component } from 'react';
import Counter from './counter'
import Topbar from './topbar'
class Counters extends Component {
    state = { 
        counters:[
            {id:1001,value:0,price:2.40,quantity:0,imageURL:"https://images-na.ssl-images-amazon.com/images/I/71AFcf4TMYL._SL1500_.jpg"},
            {id:1002,value:0,price:12.50,quantity:0,imageURL:"https://rukminim1.flixcart.com/image/416/416/k0zlsi80/diary-notebook/p/8/g/comma-comma-abaca-a5-size-soft-bound-notebook-pack-of-4-original-imafknvfykhkzpup.jpeg?q=70"},
            {id:1003,value:0,price:29.40,quantity:0, imageURL:"https://www.thedrawingroom.co.nz/img/product/fabriano-ecoqua-spiral-graph-notebooks-85gsm-a5-3007483-400.jpg"},
            {id:1004,value:0,price:3.40,quantity:0, imageURL:"https://www.redwolf.in/image/cache/catalog/notebooks/snoopy-my-happy-journal-peanuts-spiral-notebook-india-438x438.jpg"}
        ],
        
        tkmessage:'Make Payment',
        totalAmt:0
     };
     updateQty=(val)=>{
        
        this.setState({totalAmt:this.state.totalAmt+val})
     }
     updateQty2=(val)=>{
        
        this.setState({totalAmt:this.state.totalAmt-val})
     }
    updateMsg=()=>
    {
        this.setState({tkmessage:"Thank you for shopping with Kart!"})
    }
     
    render() { 
        let classes = "badge m-2 badge-primary";
        let classes2 = "badge m-2 badge-success";
        return (  
            <div>
                <Topbar />
                
                {this.state.counters.map(counter => (
                <Counter key={counter.id} id={counter.id} price={counter.price} img={counter.imageURL} recieved={this.updateQty} recieved2={this.updateQty2}>
                    <h4>  Product ID: #{counter.id}</h4>
                    <h6>  Price: ${counter.price}</h6>
                    <img src={counter.imageURL} height="200" width="200" ></img>
                </Counter>
                ))}
                
                <h2><span class={classes}>Total Amount: $ {this.state.totalAmt}</span></h2>
                <h2><button class={classes2} onClick={this.updateMsg}>{this.state.tkmessage}</button></h2>
                
            </div>
        );
    }
}
 
export default Counters;