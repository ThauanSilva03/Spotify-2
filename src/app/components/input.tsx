interface Props {
  type: string;
  placeholder: string;
  value?: string;
  showPassword?: boolean;
  id: string;
  onChange?: (value: string) => void;
}

export default function Input({
  type,
  placeholder,
  value,
  showPassword,
  id,
  onChange,
}: Props) {
  return (
    <input
      type={showPassword ? "text" : type}
      placeholder={placeholder}
      className="py-3 px-2 pr-10 border border-[#7C7C7C] bg-transparent placeholder-[#AEAEAE] rounded-md w-full"
      id={id}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
    />
  );
}
