"use client";

import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Blog() {
  const { isDark } = useTheme();

  const blogPosts = [
    {
      image: "/futuristic-ui-ux-design-purple-blue.jpg",
      category: "UI/ UX Design",
      author: "Faizu",
      date: "10 Nov, 2023",
      title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    },
    {
      image: "/loan-management-system-dashboard-green.jpg",
      category: "App Design",
      author: "Faizu",
      date: "09 Oct, 2023",
      title: "Sugee: Loan Management System for Rural Sector.",
    },
    {
      image: "/movie-streaming-app-design-yellow.jpg",
      category: "App Design",
      author: "Faizu",
      date: "13 Aug, 2023",
      title: "Cinetrade: Innovative way to invest in Digital Media",
    },
  ];

  return (
    <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center mb-12">
          <h2
            className={`text-4xl font-bold ${isDark ? "text-gray-100" : "text-gray-800"}`}
          >
            From my
            <br />
            <span className={isDark ? "text-gray-100" : "text-gray-800"}>
              blog post
            </span>
          </h2>
          <button className="bg-theme-primary text-white px-6 py-3 rounded-full font-medium hover:bg-theme-primary-hover transition-colors">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group">
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-4 right-4 w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-theme-primary transition-colors">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </button>
              </div>
              <div
                className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 ${
                  isDark
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {post.category}
              </div>
              <div
                className={`flex items-center gap-4 mb-3 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-theme-primary rounded-full"></span>
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-theme-primary rounded-full"></span>
                  {post.date}
                </span>
              </div>
              <h3
                className={`text-xl font-bold leading-tight ${isDark ? "text-gray-100" : "text-gray-800"}`}
              >
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
