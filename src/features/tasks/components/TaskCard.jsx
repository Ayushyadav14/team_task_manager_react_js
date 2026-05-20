import { Link } from "react-router-dom";

function TaskCard({ task }) {
  return (
    <Link
      to={`/tasks/${task.id}`}
      className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {task.title}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {task.description}
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {task.status}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Priority
          </p>

          <p className="font-semibold text-gray-800">
            {task.priority}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Assignee
          </p>

          <p className="font-semibold text-gray-800">
            {task.assignee?.name ||
              "Unassigned"}
          </p>
        </div>
      </div>

      <div className="mt-5 border-t pt-4">
        <p className="text-sm text-red-500">
          Due: {task.dueDate}
        </p>
      </div>
    </Link>
  );
}

export default TaskCard;