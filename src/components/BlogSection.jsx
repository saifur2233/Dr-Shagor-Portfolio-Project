import React from "react";
import BlogImage01 from "../assets/images/blog/blog-1.jpg";
import BlogImage02 from "../assets/images/blog/blog-2.jpg";
import BlogImage03 from "../assets/images/blog/blog-3.jpg";

const BlogSection = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h2>Latest News</h2>
                            <p>Stay updated with our latest news and articles.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Blog Post 1 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <img src={BlogImage01} alt="Blog Post 1" />
                            <h3><a href="#">Blog Post Title 1</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat ut nulla facilisis.</p>
                        </div>
                    </div>
                    {/* Blog Post 2 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <img src={BlogImage02} alt="Blog Post 2" />
                            <h3><a href="#">Blog Post Title 2</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat ut nulla facilisis.</p>
                        </div>
                    </div>
                    {/* Blog Post 3 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <img src={BlogImage03} alt="Blog Post 3" />
                            <h3><a href="#">Blog Post Title 3</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat ut nulla facilisis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;