// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;

const BlogList = ({blogs, title, handleDelete}) => {
    
    return ( 
        <div className="bloglist">
            <h1>{title}</h1>
            {blogs.map( (blog) => (
            <div className="blog-preview" key={blog.id}>
                <a href="/{blog.id}"><h2>{ blog.title }</h2></a>
                <p>Written by { blog.author }</p>
                <button onClick={() => (handleDelete(blog.id))}>Delete</button>
            </div>
            ))}
        </div>
     );
}
 
export default BlogList;