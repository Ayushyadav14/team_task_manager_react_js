import { useSelector } from "react-redux";

function ActivityChart() {
  const { stats, adminStats } = useSelector((state) => state.dashboard);

  const rawData =
    stats?.activity ||
    stats?.weeklyActivity ||
    stats?.activityChart ||
    adminStats?.activity ||
    adminStats?.weeklyActivity ||
    adminStats?.activityChart ||
    [];

  const activity = Array.isArray(rawData)
    ? rawData.map((item, index) => {
        if (typeof item === "number") {
          return {
            label: `Day ${index + 1}`,
            value: item,
          };
        }

        return {
          label: item.label || item.day || item.name || `Item ${index + 1}`,
          value: item.value ?? item.count ?? item.total ?? 0,
        };
      })
    : [];

  const maxValue = Math.max(...activity.map((item) => item.value), 1);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Activity</h2>

      {activity.length === 0 ? (
        <p className="text-gray-500">No activity data available</p>
      ) : (
        <div className="space-y-4">
          {activity.map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex items-center justify-between text-sm text-gray-600">
                <span>{item.label}</span>
                <span className="font-medium text-gray-800">{item.value}</span>
              </div>

              <div className="h-2 w-full rounded-full bg-gray-100">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{
                    width: `${(item.value / maxValue) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ActivityChart;
