

const Blog = () => {
    
const blogs = [
  {
    id: 1,
    image:"/src/assets/images/blog1.jpg",
    category: "DESIGN TIPS",
    title: "How to Use Green in your Space",
  },
  {
    id: 2,
    image:"/src/assets/images/blog2.jpg",
    category: "ORGANIZATION",
    title: "10 Amazing Hacks for Keeping your Closet Tidy",
  },
  {
    id: 3,
    image:"/src/assets/images/blog3.jpg",
    category: "DESIGN",
    title: "Should You Add a Double Island to your Kitchen?",
  },
];
  return (
    <section className="blog">

      <div className="blog-container">

        <p className="blog-subtitle">
          read the latest
        </p>

        <h2 className="blog-title">
          THE BLOG
        </h2>

        <div className="blog-grid">

          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>

              <div className="blog-image">

                <img
                  src={blog.image}
                  alt={blog.title}
                />

              </div>

              <span>{blog.category}</span>

              <h3>{blog.title}</h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Blog;