function MemberList({ members = [] }) {
  if (!members.length) {
    return (
      <p className="text-gray-500">
        No members found
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {members.map((member) => (
        <div
          key={member.id}
          className="flex items-center justify-between rounded-xl border p-4"
        >
          <div>
            <h3 className="font-semibold text-gray-800">
              {member.name}
            </h3>

            <p className="text-sm text-gray-500">
              {member.email}
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {member.role}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MemberList;