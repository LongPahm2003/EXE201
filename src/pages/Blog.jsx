import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const trendingPosts = [
    { id: 1, image: "/src/assets/images/blog.jpg", title: "Vue" },
    { id: 2, image: "/src/assets/images/blog.jpg", title: "React" },
    { id: 3, image: "/src/assets/images/blog.jpg", title: "JavaScript" },
    { id: 4, image: "/src/assets/images/blog.jpg", title: "TypeScript" },
  ];

  const featuredPosts = [
    {
      id: 1,
      image: "/src/assets/images/blog2.jpg",
      title:
        "Class adds $75 million to its balance sheet for a fresh funding round",
      author: {
        name: "John Doe",
        avatar: "/src/assets/images/avatar1.jpg",
      },
      date: "MAR 25,2023",
      readTime: "5 MIN READ",
    },
    {
      id: 2,
      image: "/src/assets/images/blog2.jpg",
      title:
        "Class adds $75 million to its balance sheet for a fresh funding round",
      author: {
        name: "Jane Smith",
        avatar: "/src/assets/images/avatar1.jpg",
      },
      date: "MAR 25,2023",
      readTime: "5 MIN READ",
    },
  ];

  const marketingArticles = [
    {
      id: 1,
      image: "/src/assets/images/blog2.jpg",
      title: "AWS Certified solutions Architect",
      author: {
        name: "John Doe",
        avatar: "/src/assets/images/avatar1.jpg",
      },
      date: "MAR 25,2023",
    },
    // Thêm các bài viết khác tương tự
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <img
              src="/src/assets/images/avatar1.jpg"
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <span className="ml-2 text-gray-600">By Themewagon</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full">
            Read More
          </button>
        </div>
      </div>

      {/* Trending Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Trending Now In</h2>
        <div className="grid grid-cols-4 gap-4">
          {trendingPosts.map((post) => (
            <div key={post.id} className="relative rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50">
                <h3 className="text-white font-semibold">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Blog Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Related Blog</h2>
          <button className="text-blue-500">See all</button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="ml-2 text-gray-600">
                      {post.author.name}
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {post.date} • {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing Articles Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Marketing Articles</h2>
          <button className="text-blue-500">See all</button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {marketingArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-3">{article.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      {article.author.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
