import { useSelector } from "react-redux";

function RecentProjects() {
  const { stats, adminStats } = useSelector((state) => state.dashboard);

  const recentProjects =
    stats?.recentProjects || adminStats?.recentProjects || [];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        Recent Projects
      </h2>

      <div className="space-y-4">
        {recentProjects.length > 0 ? (
          recentProjects.map((project) => (
            <div key={project.id} className="rounded-xl border p-4">
              <h3 className="font-semibold text-gray-800">{project.name}</h3>

              <p className="mt-1 text-sm text-gray-500">{project.status}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No recent projects</p>
        )}
      </div>
    </div>
  );
}

export default RecentProjects;
