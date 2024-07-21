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
      <button
        className="px-4 py-2 bg-white text-black font-md rounded-lg ml-5 mt-5"
        onClick={onClick}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SettingsPage;
