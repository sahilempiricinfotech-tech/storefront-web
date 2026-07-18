import { AccountSidebar } from '../components/AccountSidebar';
import { ProfileHeader } from '../components/ProfileHeader';
import { UserProfileCard } from '../components/UserProfileCard';

const fixtureUserId = 'user-123';

export function AccountRoute() {
  return (
    <section className="twoColumn">
      <div className="primaryPanel">
        <ProfileHeader userId={fixtureUserId} />
        <UserProfileCard userId={fixtureUserId} />
      </div>
      <AccountSidebar userId={fixtureUserId} />
    </section>
  );
}
