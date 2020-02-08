import React, {Component} from 'react';

class Item extends Component {
    render() {

       const {items} = this.props;
        const theitems = items.map((item)=>{
          return item.count > 5 ?(
            <div key={item.id}>
                 <p>{item.id}</p>
                 <p>{item.name}</p>
                 <p>{item.age}</p>
                 <hr></hr>
            </div>
          ):null
        })
        return ( 
             <div>
                 {theitems}
            </div>
        )
    }
}
export default Item;