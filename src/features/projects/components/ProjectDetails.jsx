import ProjectHeader from "./ProjectHeader";
import ProjectStats from "./ProjectStats";
import MemberList from "./MemberList";

function ProjectDetails({ project, actions }) {
  if (!project) {
    return <p className="text-gray-500">No project selected</p>;
  }

  const recentTasks = project.recentTasks || project.tasks || [];

  return (
    <div className="space-y-6">
      <ProjectHeader project={project} actions={actions} />

      <ProjectStats taskCounts={project.taskCounts} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Members</h2>

          <MemberList members={project.members || []} />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Recent Tasks
          </h2>

          <div className="space-y-4">
            {recentTasks.length > 0 ? (
              recentTasks.map((task) => (
                <div key={task.id} className="rounded-xl border p-4">
                  <h3 className="font-semibold text-gray-800">{task.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{task.status}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No recent tasks</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
