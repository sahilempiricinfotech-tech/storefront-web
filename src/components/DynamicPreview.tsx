import { useDynamicData } from '../hooks/useDynamicData';

type DynamicPreviewProps = {
  resourceType: string;
  id: string;
};

export function DynamicPreview({ resourceType, id }: DynamicPreviewProps) {
  const dynamicQuery = useDynamicData(resourceType, id);

  return (
    <section className="panel">
      <h2>Dynamic preview</h2>
      <pre>{JSON.stringify(dynamicQuery.data ?? { resourceType, id }, null, 2)}</pre>
    </section>
  );
}
