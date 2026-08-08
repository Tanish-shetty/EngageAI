interface Props {
  current: number;
  max: number;
}

export default function CharacterCounter({
  current,
  max,
}: Props) {
  return (
    <div className="mt-2 text-right text-xs text-foreground/50">
      {current} / {max}
    </div>
  );
}