import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../redux/taskThunk";

import TaskList from "../components/TaskList";
import TaskFilters from "../components/TaskFilters";

function TasksPage() {
  const dispatch = useDispatch();

  const { tasks, filters, isLoading } =
    useSelector((state) => state.tasks);

  const { selectedProject } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    if (selectedProject?.id) {
      dispatch(
        fetchTasks(
          selectedProject.id,
          filters
        )
      );
    }
  }, [dispatch, selectedProject, filters]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Tasks
        </h1>

        <p className="mt-1 text-gray-500">
          Manage project tasks
        </p>
      </div>

      <TaskFilters />

      {isLoading ? (
        <p>Loading tasks...</p>
      ) : (
        <TaskList tasks={tasks} />
      )}
    </div>
  );
}

export default TasksPage;