import TaskCard from "./TaskCard";

function KanbanBoard({ tasks }) {
  const columns = {
    TODO: [],

    IN_PROGRESS: [],

    IN_REVIEW: [],

    DONE: [],
  };

  tasks.forEach((task) => {
    columns[task.status]?.push(task);
  });

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      {Object.entries(columns).map(
        ([status, columnTasks]) => (
          <div
            key={status}
            className="rounded-2xl bg-gray-100 p-4"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                {status}
              </h2>

              <span className="rounded-full bg-white px-3 py-1 text-sm font-medium">
                {columnTasks.length}
              </span>
            </div>

            <div className="space-y-4">
              {columnTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default KanbanBoard;