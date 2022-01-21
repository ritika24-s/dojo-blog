import { useState, useEffect } from "react";

import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    
    const[name, setName] = useState('mario');

    
    // const handleDelete = (id) => {
    //     setBlogs(blogs.filter( blog => blog.id!==id));
    // }

    // const handleClick = (e) =>{        
    //     console.log(e);
    // }

    useEffect(() =>{
       fetch(' http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
            .then((data) => {
                setBlogs(data);
            })

    }, []);

    return ( 
        <div className="home">
            {/* <button onClick={(e) => {handleClick(e)}}>Click me</button> */}
            
            {blogs && <BlogList blogs={blogs} title ="All Blogs"  handleDelete={handleDelete}/>}
            <BlogList 
                blogs={blogs.filter( (blog)=> (blog.author==='mario') )}
                title="Mario's blogs" />
            <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;