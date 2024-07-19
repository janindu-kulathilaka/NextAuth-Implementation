'use client';

import { logout } from '@/actions/logout';
import { useCurrentUser } from '@/hooks/use-current-user';

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };
  return (
    <div className="">
      {JSON.stringify(user)}
      <button
        className="px-4 py-2 bg-blue-400 text-white rounded-lg ml-5"
        onClick={onClick}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SettingsPage;
