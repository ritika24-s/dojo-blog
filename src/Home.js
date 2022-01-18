import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    
    const handleDelete = (id) => {
        setBlogs(blogs.filter( blog => blog.id!==id));
    }

    // const handleClick = (e) =>{        
    //     console.log(e);
    // }
    return ( 
        <div className="home">
            {/* <button onClick={(e) => {handleClick(e)}}>Click me</button> */}
            
            <BlogList blogs={blogs} title ="All Blogs"  handleDelete={handleDelete}/>
            <BlogList 
                blogs={blogs.filter( (blog)=> (blog.author==='mario') )}
                title="Mario's blogs" />
        </div>
     );
}
 
export default Home;