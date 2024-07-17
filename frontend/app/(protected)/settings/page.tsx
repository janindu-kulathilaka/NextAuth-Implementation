import { auth, signOut } from '@/auth';

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="px-4 py-2 bg-blue-400  text-white rounded-lg mt-5">
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
