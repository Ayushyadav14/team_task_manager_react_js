import { useSelector } from "react-redux";

function RecentTasks() {
  const { stats } = useSelector(
    (state) => state.dashboard
  );

  const recentTasks = stats?.recentTasks || [];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        Recent Tasks
      </h2>

      <div className="space-y-4">
        {recentTasks.length > 0 ? (
          recentTasks.map((task) => (
            <div
              key={task.id}
              className="rounded-xl border p-4"
            >
              <h3 className="font-semibold text-gray-800">
                {task.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {task.status}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No recent tasks
          </p>
        )}
      </div>
    </div>
  );
}

export default RecentTasks;