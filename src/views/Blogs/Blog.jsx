import { useQuery } from "@apollo/client";
import React, { useState } from "react";
// import "@hydralite/vortex/dist/style.css";
import Blog from "@hydralite/vortex";
import moment from "moment";
import { useParams } from "react-router-dom";

import { GET_BLOG } from "../../api/blogs";

const BlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState();
  const { loading, error, data } = useQuery(GET_BLOG(slug));

  React.useEffect(() => {
    if (data) {
      setBlog({
        author: {
          name: data.blog.author[0],
          avatar: data.blog.author[0],
        },
        content: data.blog.content.markdown,
        header: {
          title: data.blog.title,
          image: { src: data.blog.img.url, borderRadius: "20px" },
        },
        publishedAt: data.blog.publishedAt,
      });
    }
  }, [data]);

  return (
    <div className="py-20 flex flex-col items-center justify-center">
      {blog && (
        <Blog
          layout="Default"
          content={blog.content}
          author={blog.author}
          header={blog.header}
          date={moment(blog.publishedAt).format("LL")}
        />
      )}
    </div>
  );
};

export default BlogPage;
