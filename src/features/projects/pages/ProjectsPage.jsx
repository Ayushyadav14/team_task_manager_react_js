import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProjects } from "../redux/projectThunk";

import Modal from "../../../components/common/Modal";
import Button from "../../../components/common/Button";

import ProjectHeader from "../components/ProjectHeader";
import ProjectList from "../components/ProjectList";
import CreateProjectForm from "../components/CreateProjectForm";

function ProjectsPage() {
  const dispatch = useDispatch();

  const { projects, isLoading, error } = useSelector((state) => state.projects);

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="space-y-6">
      <ProjectHeader
        title="Projects"
        subtitle="Manage all your projects"
        actions={
          <Button onClick={() => setIsCreateOpen(true)}>New Project</Button>
        }
      />

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      {isLoading ? (
        <p>Loading projects...</p>
      ) : (
        <ProjectList projects={projects} />
      )}

      <Modal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="Create Project"
      >
        <CreateProjectForm onSuccess={() => setIsCreateOpen(false)} />
      </Modal>
    </div>
  );
}

export default ProjectsPage;
