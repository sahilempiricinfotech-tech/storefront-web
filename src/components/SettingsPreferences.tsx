import { useSettings } from '../hooks/useSettings';

export function SettingsPreferences() {
  const settingsQuery = useSettings();

  return (
    <aside className="panel">
      <h2>Preferences</h2>
      <p>Currency: {settingsQuery.data?.currency ?? 'USD'}</p>
      <p>Marketing: {settingsQuery.data?.marketingOptIn ? 'on' : 'off'}</p>
    </aside>
  );
}
