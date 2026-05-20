import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../redux/taskThunk";

import Button from "../../../components/common/Button";
import Modal from "../../../components/common/Modal";

import TaskHeader from "../components/TaskHeader";
import TaskList from "../components/TaskList";
import TaskFilters from "../components/TaskFilters";
import TaskForm from "../components/TaskForm";
import KanbanBoard from "../components/KanbanBoard";

function TasksPage() {
  const dispatch = useDispatch();

  const { tasks, filters, isLoading } = useSelector((state) => state.tasks);

  const { selectedProject } = useSelector((state) => state.projects);

  const [viewMode, setViewMode] = useState("list");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  useEffect(() => {
    if (selectedProject?.id) {
      dispatch(fetchTasks(selectedProject.id, filters));
    }
  }, [dispatch, selectedProject, filters]);

  return (
    <div className="space-y-6">
      <TaskHeader
        actions={
          <>
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-1">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                List
              </button>
              <button
                type="button"
                onClick={() => setViewMode("kanban")}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  viewMode === "kanban"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Kanban
              </button>
            </div>

            <Button
              onClick={() => setIsCreateOpen(true)}
              disabled={!selectedProject?.id}
            >
              New Task
            </Button>
          </>
        }
      />

      {!selectedProject?.id ? (
        <div className="rounded-2xl bg-white p-6 text-gray-500 shadow-sm">
          Select a project to view its tasks.
        </div>
      ) : (
        <>
          <TaskFilters />

          {isLoading ? (
            <p>Loading tasks...</p>
          ) : viewMode === "kanban" ? (
            <KanbanBoard tasks={tasks || []} />
          ) : (
            <TaskList tasks={tasks} />
          )}
        </>
      )}

      <Modal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="Create Task"
      >
        <TaskForm onSuccess={() => setIsCreateOpen(false)} />
      </Modal>
    </div>
  );
}

export default TasksPage;
