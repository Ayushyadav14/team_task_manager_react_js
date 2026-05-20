import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchProject } from "../redux/projectThunk";

import Button from "../../../components/common/Button";
import Modal from "../../../components/common/Modal";

import ProjectDetails from "../components/ProjectDetails";
import UpdateProjectForm from "../components/UpdateProjectForm";
import AddMemberModal from "../components/AddMemberModal";

function ProjectDetailsPage() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const projectId = id;

  const { selectedProject, isLoading } = useSelector((state) => state.projects);

  useEffect(() => {
    if (projectId) {
      dispatch(fetchProject(projectId));
    }
  }, [dispatch, projectId]);

  const [isEditOpen, setIsEditOpen] = useState(false);

  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);

  if (isLoading) {
    return <p>Loading project...</p>;
  }

  if (!selectedProject) {
    return <p>Project not found</p>;
  }

  const actions = (
    <>
      <Button variant="secondary" onClick={() => setIsEditOpen(true)}>
        Edit Project
      </Button>

      <Button onClick={() => setIsAddMemberOpen(true)}>Add Member</Button>
    </>
  );

  return (
    <div className="space-y-6">
      <ProjectDetails project={selectedProject} actions={actions} />

      <Modal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        title="Update Project"
      >
        <UpdateProjectForm
          project={selectedProject}
          onSuccess={() => {
            setIsEditOpen(false);
            if (projectId) {
              dispatch(fetchProject(projectId));
            }
          }}
        />
      </Modal>

      <AddMemberModal
        isOpen={isAddMemberOpen}
        onClose={() => setIsAddMemberOpen(false)}
        projectId={projectId}
        onSuccess={() => {
          if (projectId) {
            dispatch(fetchProject(projectId));
          }
        }}
      />
    </div>
  );
}

export default ProjectDetailsPage;
