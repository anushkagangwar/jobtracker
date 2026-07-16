import { motion } from "framer-motion";

const StatsCard = ({
  title,
  value,
  icon,
  color = "from-blue-500 to-cyan-500",
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg"
    >
      {/* Gradient Top Border */}
      <div
        className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${color}`}
      />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${color} text-2xl text-white shadow-lg`}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;