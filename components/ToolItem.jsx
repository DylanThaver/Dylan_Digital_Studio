export default function ToolItem({ icon, label }) {
  return (
    <div
      className="flex items-center gap-3
                 bg-white/5 border border-white/10
                 rounded-xl px-4 py-3
                 text-gray-300
                 hover:bg-white/10 hover:text-white
                 transition-all"
    >
      <span className="text-xl text-orange-400">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
