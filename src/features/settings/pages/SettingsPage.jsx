import SettingsTabs from "../components/SettingsTabs";

function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>

        <p className="mt-1 text-gray-500">Manage your account settings</p>
      </div>

      <SettingsTabs />
    </div>
  );
}

export default SettingsPage;
