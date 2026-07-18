import { SettingsPanel } from '../components/SettingsPanel';
import { SettingsPreferences } from '../components/SettingsPreferences';

export function SettingsRoute() {
  return (
    <section className="twoColumn">
      <SettingsPanel />
      <SettingsPreferences />
    </section>
  );
}
