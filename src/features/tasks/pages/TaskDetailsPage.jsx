import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  addTaskComment,
  fetchTask,
  updateTaskStatus,
} from "../redux/taskThunk";

function TaskDetailsPage() {
  const dispatch = useDispatch();

  const { taskId } = useParams();

  const [comment, setComment] = useState("");

  const { selectedTask, isLoading } =
    useSelector((state) => state.tasks);

  const { selectedProject } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    if (selectedProject?.id && taskId) {
      dispatch(
        fetchTask(
          selectedProject.id,
          taskId
        )
      );
    }
  }, [dispatch, selectedProject, taskId]);

  const handleStatusChange = (status) => {
    dispatch(
      updateTaskStatus(
        selectedProject.id,
        taskId,
        status
      )
    );
  };

  const handleAddComment = () => {
    if (!comment.trim()) return;

    dispatch(
      addTaskComment(
        selectedProject.id,
        taskId,
        {
          content: comment,
        }
      )
    );

    setComment("");
  };

  if (isLoading) {
    return <p>Loading task...</p>;
  }

  if (!selectedTask) {
    return <p>Task not found</p>;
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {selectedTask.title}
            </h1>

            <p className="mt-3 text-gray-500">
              {selectedTask.description}
            </p>
          </div>

          <div className="flex gap-3">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              {selectedTask.status}
            </span>

            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              {selectedTask.priority}
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-gray-500">
              Assignee
            </p>

            <p className="mt-1 font-semibold text-gray-800">
              {selectedTask.assignee?.name ||
                "Unassigned"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Due Date
            </p>

            <p className="mt-1 font-semibold text-gray-800">
              {selectedTask.dueDate}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Tags
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {selectedTask.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() =>
              handleStatusChange(
                "IN_PROGRESS"
              )
            }
            className="rounded-xl bg-yellow-500 px-4 py-2 font-medium text-white"
          >
            Move to In Progress
          </button>

          <button
            onClick={() =>
              handleStatusChange(
                "IN_REVIEW"
              )
            }
            className="rounded-xl bg-blue-500 px-4 py-2 font-medium text-white"
          >
            Move to Review
          </button>

          <button
            onClick={() =>
              handleStatusChange("DONE")
            }
            className="rounded-xl bg-green-500 px-4 py-2 font-medium text-white"
          >
            Mark Done
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-semibold text-gray-800">
          Comments
        </h2>

        <div className="space-y-4">
          {selectedTask.comments?.length >
          0 ? (
            selectedTask.comments.map(
              (comment) => (
                <div
                  key={comment.id}
                  className="rounded-xl border p-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">
                      {
                        comment.user
                          ?.name
                      }
                    </h3>

                    <p className="text-sm text-gray-500">
                      {
                        comment.createdAt
                      }
                    </p>
                  </div>

                  <p className="mt-3 text-gray-700">
                    {comment.content}
                  </p>
                </div>
              )
            )
          ) : (
            <p className="text-gray-500">
              No comments yet
            </p>
          )}
        </div>

        <div className="mt-6">
          <textarea
            value={comment}
            onChange={(e) =>
              setComment(e.target.value)
            }
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
    </div>
  );
}

export default TaskDetailsPage;