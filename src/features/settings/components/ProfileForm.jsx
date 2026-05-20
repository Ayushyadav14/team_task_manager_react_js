import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

import {
  fetchCurrentUserProfile,
  updateCurrentUser,
} from "../../../users/redux/userThunk";

function ProfileForm() {
  const dispatch = useDispatch();

  const { profile, isLoading } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    dispatch(fetchCurrentUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        email: profile.email || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateCurrentUser(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Profile Information
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Update your account profile
        </p>
      </div>

      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Updating..." : "Update Profile"}
      </Button>
    </form>
  );
}
export default ProfileForm;
