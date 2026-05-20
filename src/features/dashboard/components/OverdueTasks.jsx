import { useSelector } from "react-redux";

function OverdueTasks() {
  const { stats, adminStats } = useSelector((state) => state.dashboard);

  const overdueTasks =
    stats?.overdueTaskList ||
    adminStats?.overdueTaskList ||
    stats?.overdueTasksList ||
    adminStats?.overdueTasksList ||
    [];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        Overdue Tasks
      </h2>

      <div className="space-y-4">
        {overdueTasks.length > 0 ? (
          overdueTasks.map((task) => (
            <div key={task.id} className="rounded-xl border border-red-200 p-4">
              <h3 className="font-semibold text-gray-800">{task.title}</h3>

              <p className="mt-1 text-sm text-red-500">Due: {task.dueDate}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No overdue tasks</p>
        )}
      </div>
    </div>
  );
}

export default OverdueTasks;
