import {React,Component} from 'react'
import Posts from './Posts';

import "materialize-css/dist/css/materialize.min.css";
import NewPost from './NewPost';




export default class Dashbored extends Component {
    constructor(){
        super()
        this.state={
            posts :  [
                { id: 111, title: "Happiness", author: "Jhone" },
                { id: 112, title: "MIU", author: "Dean" },
                { id: 113, title: "Enjoy Life", author: "Jasmin" }
            ]
        }
    }
  render() {
    return (
     <>
        <Posts  post={this.state.posts} />
        <NewPost/>
     </>
    )
  }
}



// export default function Dashbored() {

//     const [post, setPost] = useState(
        // [
        //     { id: 111, title: "Happiness", author: "Jhone" },
        //     { id: 112, title: "MIU", author: "Dean" },
        //     { id: 113, title: "Enjoy Life", author: "Jasmin" }
        // ]
//     );
//   return (
//     /*
//         RENDER 
//             POSTS
//             FORM
//             POST DERAILS 
//     */ 
//    <>
//    <Posts posts={post} />
//    </>
    
//   )
// }
