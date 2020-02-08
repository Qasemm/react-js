import React , {Component} from 'react';
import axios from 'axios';
import "./blog.css"
 class Blog extends Component {
     state = { 
         users:[]
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res=>{
             console.log(res.data)

             this.setState({
                 users: res.data
             })
         })
     }
    render(){
        const {users} = this.state;
        const userlist = users.map(user=>{
            return(
                <div className="content">
                    <div key={user.id}>
                        <div> Name : {user.name}</div>
                        <div> UserName : {user.username}</div>
                        <div> UserEmail : {user.email}</div>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <h2> Blog </h2>
                <p>   this is Blog section </p>
                <div>
                    {userlist}
                </div>
            </div>
        )
    }
 }
 export default Blog;