import { useSettings } from '../hooks/useSettings';
import { useUpdateSettings } from '../mutations/useUpdateSettings';

export function SettingsPanel() {
  const settingsQuery = useSettings();
  const updateSettings = useUpdateSettings();

  return (
    <section className="panel">
      <h1>Settings</h1>
      <label>
        <input
          type="checkbox"
          checked={settingsQuery.data?.emailReceipts ?? true}
          onChange={(event) =>
            updateSettings.mutate({ emailReceipts: event.currentTarget.checked })
          }
        />
        Email receipts
      </label>
    </section>
  );
}
