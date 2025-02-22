/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsComponent from '@/components/blogDetails/BlogDetailsComponent';
import React from 'react';

const page = async({ params }: { params: Promise<{ id: any }> }) => {

    const { id } = await params

    return (
        <div className='mt-16'>
            <BlogDetailsComponent id={id}/>
        </div>
    );
};

export default page;