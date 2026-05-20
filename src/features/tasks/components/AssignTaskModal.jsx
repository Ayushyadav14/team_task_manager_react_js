import { useState } from "react";

import Modal from "../../../components/common/Modal";
import Button from "../../../components/common/Button";

function AssignTaskModal({
  isOpen,
  onClose,
  members = [],
  onAssign,
}) {
  const [assigneeId, setAssigneeId] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAssign?.(assigneeId);

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Assign Task"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Select Member
          </label>

          <select
            value={assigneeId}
            onChange={(e) =>
              setAssigneeId(e.target.value)
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="">
              Select member
            </option>

            {members.map((member) => (
              <option
                key={member.id}
                value={member.id}
              >
                {member.name}
              </option>
            ))}
          </select>
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          Assign
        </Button>
      </form>
    </Modal>
  );
}

export default AssignTaskModal;