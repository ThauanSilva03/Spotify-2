interface Props {
  children: React.ReactNode;
}
export default function Button({ children }: Props) {
  return (
    <div>
      <button className="bg-[#2A2A2A] rounded-full text-sm text-white py-1.5 px-3 hover:bg-[#333333]">
        {children}
      </button>
    </div>
  );
}
