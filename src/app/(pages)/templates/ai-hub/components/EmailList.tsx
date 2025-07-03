import EmailListForm from "@/components/organisms/EmailListForm";
import { motion } from "framer-motion";
function EmailList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-md p-6 text-white"
    >
      <motion.h3 variants={itemVariants} className="text-xl font-bold mb-3">
        Stay Updated
      </motion.h3>
      <motion.p variants={itemVariants} className="text-blue-100 mb-4">
        Get the latest AI news delivered to your inbox weekly.
      </motion.p>
      <motion.div variants={itemVariants} className="space-y-3">
      <EmailListForm />
      </motion.div>
    </motion.div>
  );
}

export default EmailList;
