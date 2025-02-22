"use client"
import Image from 'next/image';
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const BlogDetailsComponent = (props: any) => {

    const { id } = props;

    const [blog, setBlog] = useState<any | null>(null);

    useEffect(() => {
        if (id) {
            fetch("/blogsInfo.json")
                .then((res) => res.json())
                .then((data) => {
                    const foundBlog = data.find((p: any) => p.id === id);
                    setBlog(foundBlog || null);
                });
        }
    }, [id]);

    if (!blog) return <p className="text-white text-center mt-10">Loading blog details...</p>;


    return (
        <div>
            <div className="max-w-4xl mx-auto p-6">
                <Link href="/" className="text-[#8750F7] font-semibold mb-4 inline-block">← Go Back</Link>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image width={384} height={384} src={blog.imageUrl} alt={blog.title} className="object-cover mx-auto" />
                    {/* <div className={`absolute top-3 left-3 text-white px-3 py-1 rounded-full text-xs font-semibold ${blog.categoryColor}`}>
                        {blog.category}
                    </div> */}
                </div>
                <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
                <p className="text-gray-600 text-sm mt-1">📅 {blog.date} {/*• 💬 {blog.comments} comments*/}</p>
                <p className="mt-4 text-gray-700">{blog.content}</p>
            </div>
        </div>
    );
};

export default BlogDetailsComponent;