import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../../../components/common/Input";
import TextArea from "../../../components/common/TextArea";
import Button from "../../../components/common/Button";

import { createProject } from "../redux/projectThunk";

import { ROUTES } from "../../../routes/routeConstants";

function CreateProjectForm({ onSuccess }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.projects);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "ACTIVE",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createProject(formData));

    onSuccess?.();

    navigate(ROUTES.PROJECTS);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6 shadow-sm"
    >
      <Input
        label="Project Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter project name"
      />

      <TextArea
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter project description"
      />

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Status</label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="ACTIVE">ACTIVE</option>

          <option value="COMPLETED">COMPLETED</option>

          <option value="ON_HOLD">ON_HOLD</option>
        </select>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Project"}
      </Button>
    </form>
  );
}

export default CreateProjectForm;
