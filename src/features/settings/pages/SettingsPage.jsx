import ProfileForm from "../components/ProfileForm";
import ChangePasswordForm from "../components/ChangePasswordForm";

function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Settings
        </h1>

        <p className="mt-1 text-gray-500">
          Manage your account settings
        </p>
      </div>

      <ProfileForm />

      <ChangePasswordForm />
    </div>
  );
}

export default SettingsPage;