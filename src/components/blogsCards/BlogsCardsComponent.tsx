"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, /*MessageCircle*/ } from "lucide-react";
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
        <section id="blogs" className="mt-16">
            <div>
                <p className="text-4xl font-bold text-center bg-gradient-to-r from-[#804BEA] to-[#40237B] bg-clip-text text-transparent mb-4">My Recent Blogs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {blogs.map((blog) => (
                    <Link key={blog.id} href={`/blogDetails/${blog.id}`}>
                        <div className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-transform transform hover:scale-105">
                            <Image width={256} height={256} src={blog.imageUrl} alt={blog.title} className="w-full h-64 object-cover" />
                            {/* <div className={`absolute top-3 left-3 text-white px-3 py-1 rounded-full text-xs font-semibold ${blog.categoryColor}`}>
                                {blog.category}
                            </div> */}
                            <div className="absolute bottom-3 left-3 right-3 group bg-white hover:bg-gradient-to-r from-[#804BEA] to-[#40237B] hover:text-white p-4 rounded-xl shadow-md">
                                <div className="flex items-center text-gray-500 group-hover:!text-white text-xs gap-3 mb-1">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {blog.date}
                                    </span>
                                    {/* <span className="flex items-center gap-1">
                                        <MessageCircle size={12} /> {blog.comments} Comment{blog.comments !== 1 ? "s" : ""}
                                    </span> */}
                                </div>
                                <h3 className="text-black group-hover:!text-white font-semibold text-lg">{blog.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default BlogCardsComponent;