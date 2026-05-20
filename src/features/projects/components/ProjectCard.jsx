import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {project.name}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {project.description}
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {project.status}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Members
          </p>

          <p className="font-semibold text-gray-800">
            {project.memberCount || 0}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Tasks
          </p>

          <p className="font-semibold text-gray-800">
            {project.taskCount || 0}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;