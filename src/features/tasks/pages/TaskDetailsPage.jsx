import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  addTaskComment,
  fetchTask,
  editTask,
  updateTaskStatus,
} from "../redux/taskThunk";

import Button from "../../../components/common/Button";
import Modal from "../../../components/common/Modal";

import TaskDetails from "../components/TaskDetails";
import UpdateTaskForm from "../components/UpdateTaskForm";
import AssignTaskModal from "../components/AssignTaskModal";

function TaskDetailsPage() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const taskId = id;

  const [comment, setComment] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAssignOpen, setIsAssignOpen] = useState(false);

  const { selectedTask, isLoading } = useSelector((state) => state.tasks);

  const { selectedProject } = useSelector((state) => state.projects);

  useEffect(() => {
    if (selectedProject?.id && taskId) {
      dispatch(fetchTask(selectedProject.id, taskId));
    }
  }, [dispatch, selectedProject, taskId]);

  const handleStatusChange = (status) => {
    if (!selectedProject?.id || !taskId) {
      return;
    }

    dispatch(updateTaskStatus(selectedProject.id, taskId, status));
  };

  const handleAddComment = () => {
    if (!comment.trim()) return;
    if (!selectedProject?.id || !taskId) return;

    dispatch(
      addTaskComment(selectedProject.id, taskId, {
        content: comment,
      }),
    );

    setComment("");
  };

  const handleAssign = (assigneeId) => {
    if (!selectedProject?.id || !taskId) return;

    dispatch(
      editTask(selectedProject.id, taskId, {
        assigneeId,
      }),
    );
  };

  if (isLoading) {
    return <p>Loading task...</p>;
  }

  if (!selectedTask) {
    return <p>Task not found</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Task Details</h1>
          <p className="mt-1 text-gray-500">Review and update task progress</p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => setIsAssignOpen(true)}>
            Assign Task
          </Button>
          <Button onClick={() => setIsEditOpen(true)}>Edit Task</Button>
        </div>
      </div>

      <TaskDetails task={selectedTask} />

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleStatusChange("IN_PROGRESS")}
            className="rounded-xl bg-yellow-500 px-4 py-2 font-medium text-white"
          >
            Move to In Progress
          </button>

          <button
            onClick={() => handleStatusChange("IN_REVIEW")}
            className="rounded-xl bg-blue-500 px-4 py-2 font-medium text-white"
          >
            Move to Review
          </button>

          <button
            onClick={() => handleStatusChange("DONE")}
            className="rounded-xl bg-green-500 px-4 py-2 font-medium text-white"
          >
            Mark Done
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-semibold text-gray-800">Comments</h2>

        <div className="space-y-4">
          {selectedTask.comments?.length > 0 ? (
            selectedTask.comments.map((comment) => (
              <div key={comment.id} className="rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">
                    {comment.user?.name}
                  </h3>

                  <p className="text-sm text-gray-500">{comment.createdAt}</p>
                </div>

                <p className="mt-3 text-gray-700">{comment.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet</p>
          )}
        </div>

        <div className="mt-6">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="min-h-[120px] w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500"
          />

          <button
            onClick={handleAddComment}
            className="mt-4 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Add Comment
          </button>
        </div>
      </div>

      <Modal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        title="Update Task"
      >
        <UpdateTaskForm
          task={selectedTask}
          onSuccess={() => setIsEditOpen(false)}
        />
      </Modal>

      <AssignTaskModal
        isOpen={isAssignOpen}
        onClose={() => setIsAssignOpen(false)}
        members={selectedProject?.members || []}
        onAssign={handleAssign}
      />
    </div>
  );
}

export default TaskDetailsPage;
