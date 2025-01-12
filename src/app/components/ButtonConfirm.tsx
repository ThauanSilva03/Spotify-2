interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function ButtonConfirm({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick ? onClick : undefined}
      className="rounded-full py-3 px-5 font-semibold bg-[#1ED760] hover:bg-[#3BE477] text-black text-[15px] my-3 w-full"
    >
      {children}
    </button>
  );
}
