type PlaceholderProps = {
  title: string;
  description?: string;
  phase?: string;
};

export default function Placeholder({ title, description, phase }: PlaceholderProps) {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
      {description && <p className="mt-3 text-ink-500">{description}</p>}
      {phase && (
        <div className="mt-8 inline-block px-4 py-2 border border-ink-900 rounded-full text-sm font-medium">
          {phase}
        </div>
      )}
    </div>
  );
}
