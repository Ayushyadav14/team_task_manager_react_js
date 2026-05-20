import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMembers } from "../redux/teamThunk";

import TeamList from "../components/TeamList";

function TeamPage() {
  const dispatch = useDispatch();

  const { members, isLoading } = useSelector(
    (state) => state.team
  );

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Team Members
        </h1>

        <p className="mt-1 text-gray-500">
          Manage organization users
        </p>
      </div>

      {isLoading ? (
        <p>Loading members...</p>
      ) : (
        <TeamList members={members} />
      )}
    </div>
  );
}

export default TeamPage;