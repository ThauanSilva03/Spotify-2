interface Props {
  children: React.ReactNode;
}

export default function Topics({ children }: Props) {
  return (
    <div className="pt-4 font-bold flex justify-between pr-8">
      <h2 className="text-xl">{children}</h2>
      <h4 className="text-sm">Mostrar tudo</h4>
    </div>
  );
}
