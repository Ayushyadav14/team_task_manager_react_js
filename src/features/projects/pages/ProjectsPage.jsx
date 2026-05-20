import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProjects } from "../redux/projectThunk";

import ProjectList from "../components/ProjectList";

function ProjectsPage() {
  const dispatch = useDispatch();

  const { projects, isLoading } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Projects
          </h1>

          <p className="mt-1 text-gray-500">
            Manage all your projects
          </p>
        </div>
      </div>

      {isLoading ? (
        <p>Loading projects...</p>
      ) : (
        <ProjectList projects={projects} />
      )}
    </div>
  );
}

export default ProjectsPage;