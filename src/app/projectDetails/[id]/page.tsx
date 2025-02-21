/* eslint-disable @typescript-eslint/no-explicit-any */

import ProjectDetailsComponent from "@/components/projectDetailsComponent/ProjectDetailsComponent";

const ProjectDetails = async ({ params }: { params: Promise<{ id: any }> }) => {
    const { id } = await params

    console.log(id);
    

    return (
        <div className="my-16">
            <ProjectDetailsComponent id={id}/>
        </div>
    );
};

export default ProjectDetails;