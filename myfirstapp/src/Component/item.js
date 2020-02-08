import React, {Component} from 'react';

class Item extends Component {
    render() {

       const {items} = this.props;
        const theitems = items.map((item)=>{
            return(
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                    <hr></hr>
                </div>
            )
        })
        return ( 
             <div>
                 {theitems}
            </div>
        )
    }
}
export default Item;