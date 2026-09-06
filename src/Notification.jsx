import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

const Notification = ({ message, type, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          className="fixed top-4 right-4 z-50"
        >
          <div
            className="p-4 rounded-md border flex items-center gap-3 min-w-[320px] bg-[var(--panel)] font-mono text-sm"
            style={{
              borderColor: type === "success" ? "var(--accent)" : "#ef4444",
            }}
          >
            {type === "success" ? (
              <CheckCircle className="w-5 h-5 text-[var(--accent)] shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400 shrink-0" />
            )}
            <p className="text-[var(--ink)] flex-1">{message}</p>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4 text-[var(--ink-dim)]" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
