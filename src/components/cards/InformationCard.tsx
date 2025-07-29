interface Props {
  title: string;
  description: string | number | null;
}

export function InformationCard({ title, description }: Props) {
  return (
    <div className="flex flex-col border-1 bg-neutral-950 border-neutral-700 p-8">
      <div>
        <p className="text-xs font-bold text-zinc-700 uppercase">{title}</p>
        {description && <p className="text-2xl"> {description}</p>}
      </div>
    </div>
  );
}
