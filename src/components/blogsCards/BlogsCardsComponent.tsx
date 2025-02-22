"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";
import Image from "next/image";

interface Blog {
    id: string;
    category: string;
    date: string;
    comments: number;
    title: string;
    imageUrl: string;
    categoryColor: string;
}

const BlogCardsComponent: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        fetch("/blogsInfo.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {blogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.id}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-transform transform hover:scale-105">
                        <Image width={256} height={256} src={blog.imageUrl} alt={blog.title} className="w-full h-64 object-cover" />
                        <div className={`absolute top-3 left-3 text-white px-3 py-1 rounded-full text-xs font-semibold ${blog.categoryColor}`}>
                            {blog.category}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 bg-white p-4 rounded-xl shadow-md">
                            <div className="flex items-center text-gray-500 text-xs gap-3 mb-1">
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} /> {blog.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MessageCircle size={12} /> {blog.comments} Comment{blog.comments !== 1 ? "s" : ""}
                                </span>
                            </div>
                            <h3 className="text-black font-semibold text-lg">{blog.title}</h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogCardsComponent;