interface Toggle {
  isEnabled: boolean;
  text: string;
  change: () => void;
}

function Toggle({ isEnabled, text, change }: Toggle) {
  return (
    <div className="flex items-center justify-center gap-12 flex-row">
      <button
        className={`flex items-center w-20 h-10 p-[4px] rounded-full  transition-all ${
          isEnabled ? "bg-green-500 justify-end" : "bg-gray-500 justify-start"
        }`}
        onClick={() => {
          change();
        }}
      >
        <div className="w-10 h-8 bg-white rounded-full"></div>
      </button>
      <div className="font-bold text-xl">{text}</div>
    </div>
  );
}

export default Toggle;
