import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchProject } from "../redux/projectThunk";

function ProjectDetailsPage() {
  const dispatch = useDispatch();

  const { projectId } = useParams();

  const { selectedProject, isLoading } =
    useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [dispatch, projectId]);

  if (isLoading) {
    return <p>Loading project...</p>;
  }

  if (!selectedProject) {
    return <p>Project not found</p>;
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {selectedProject.name}
            </h1>

            <p className="mt-3 text-gray-500">
              {selectedProject.description}
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {selectedProject.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Members
          </h2>

          <div className="space-y-3">
            {selectedProject.members?.map(
              (member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between rounded-xl border p-4"
                >
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {member.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {member.email}
                    </p>
                  </div>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {member.role}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Task Summary
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Total Tasks</span>

              <span className="font-semibold">
                {
                  selectedProject.taskCounts
                    ?.total
                }
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span>Completed</span>

              <span className="font-semibold text-green-600">
                {
                  selectedProject.taskCounts
                    ?.done
                }
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span>In Progress</span>

              <span className="font-semibold text-yellow-600">
                {
                  selectedProject.taskCounts
                    ?.inProgress
                }
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span>Overdue</span>

              <span className="font-semibold text-red-600">
                {
                  selectedProject.taskCounts
                    ?.overdue
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;