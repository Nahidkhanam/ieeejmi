import {useEffect, useState} from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_BLOGS } from "../../api/blogs";
import { useNavigate } from "react-router-dom";

const DUMMY_DATA = [
  {
    author: "Husain Rashid Rao",
    summary: `This award that you all see here shall be awarded to the one who
eats the maccy mac extra largeeee pizzaaaa within 40 minutes
  before everyone else does. This award that you all see here
  shall be awarded to the one who eats the maccy mac extra
  largeeee pizzaaaa within 40 minutes before everyone else does.
  This ward that you all see here shall be awarded to the one
  what`,
    title: "Be A Gluton Contest",
    img: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2079&q=80",
  },
  {
    author: "Sarfraz",
    summary: `This award that you all see here shall be awarded to the one who
eats the maccy mac extra largeeee pizzaaaa within 40 minutes
  before everyone else does. This award that you all see here
  shall be awarded to the one who eats the maccy mac extra
  largeeee pizzaaaa within 40 minutes before everyone else does.
  This ward that you all see here shall be awarded to the one
  what`,
    title: "Be A Gluton Contest",
    img: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2079&q=80",
  },
];

const Blogs = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_BLOGS);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (data?.blogs) {
      setBlogs(
        data.blogs.map((blog) => ({
          author: blog.author[0],
          summary: blog.summary,
          img: blog.img.url,
          title: blog.title,
          id: blog.id,
          slug: blog.slug,
        }))
      );
      console.log(data);
    }
  }, [loading, data]);

  return (
    <div className="py-20 flex flex-col font-body justify-start items-center min-h-screen w-full">
      <h1 className="text-5xl font-bold">Blogs</h1>
      <div
        style={{ width: "70%", minWidth: "70%", maxWidth: "70%" }}
        className="mt-9"
      >
        {blogs.map((blog) => (
          <div
            className="w-full min-h-max h-72 flex flex-row rounded overflow-hidden shadow-lg m-2"
            key={blog.id}
          >
            <div className="flex flex-col h-max justify-between items-start m-4">
              <div className="flex flex-col items-start">
                <h1>{blog.title}</h1>
                <p className="h-full font-normal text-wrap text-slate-600 text-sm mt-4">
                  {blog.summary.slice(0, 500).concat("...")}
                </p>
                <strong className="font-light text-sm text-slate-400 mt-2 ">
                  By {blog.author}
                </strong>
              </div>
              <button
                className="py-1 underline font-light hover:underline-offset-4 hover:-translate-y-1 transition-all"
                onClick={() => navigate(`/blogs/${blog.slug}`)}
              >
                Continue Reading
              </button>
            </div>
            <img className="" src={blog.img} style={{ height: "100%", width: "auto" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
