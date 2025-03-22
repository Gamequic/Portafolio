
import { motion } from "framer-motion";

const fadeInAnimation = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

export default function Subrogates() {
  return (
    <div>
        <section
            className="content-section flex flex-col lg:flex-row items-center justify-center h-screen bg-slate-900"
        >
            <motion.h2
                className="text-center text-3xl md:text-5xl lg:text-6xl font-bold w-1/2"
                style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
                variants={fadeInAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
            >
            IMSS-frontend Project
            </motion.h2>
            <motion.p
                className="text-center text-[18px] font-bold w-1/2 m-8"
                style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
                variants={fadeInAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
            >
            I had the opportunity to work on the modernization of the IMSS Subrogation System, a key platform for managing medical subrogation requests. Thanks to my connection with the system administrator, I was able to develop a fast and accessible interface using React with Vite and Tailwind CSS, optimizing user experience and performance. Additionally, I contributed to the backend by implementing a logging system and a WebSocket in Go to monitor the server in real time. This experience has been invaluable and motivates me to continue creating efficient and scalable digital solutions. Here are some key features that might be interest:
            </motion.p>
        </section>

        <section
            className="content-section flex flex-col lg:flex-row items-center justify-center h-screen bg-slate-900"
        >
            <div className="w-full lg:w-1/2 text-slate-200 flex flex-col items-center justify-center p-6 space-y-4">
                <motion.h2
                    className="text-center text-3xl md:text-5xl lg:text-6xl font-bold"
                    style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                >
                Secure Authentication
                </motion.h2>
                <motion.img
                    src="/public/Subrogates/SecureAuthentication.png"
                    className="rounded-lg"
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                />
            </div>
        
            <div className="w-full lg:w-1/2 text-slate-200 flex items-center justify-center p-6 space-y-4">
                <motion.p 
                    className="text-center text-[18px] font-bold"
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                >
                The application uses a secure token-based authentication system, ensuring that only authorized users can access certain areas of the application.
                </motion.p>
            </div>
        </section>

        <section
            className="content-section flex flex-col lg:flex-row items-center justify-center h-screen bg-slate-900"
        >
            <div className="w-full lg:w-1/2 text-slate-200 flex flex-col items-center justify-center p-6 space-y-4">
                <motion.h2
                    className="text-center text-3xl md:text-5xl lg:text-6xl font-bold"
                    style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                >
                Easy Navigation
                </motion.h2>
                <motion.img
                    src="/public/Subrogates/EasyNavigation.png"
                    className="rounded-lg"
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                />
            </div>
        
            <div className="w-full lg:w-1/2 text-slate-200 flex items-center justify-center p-6 space-y-4">
                <motion.p 
                    className="text-center text-[18px] font-bold"
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                >
                The application is designed with clear and simple navigation, allowing users to easily move between different sections.
                </motion.p>
            </div>
        </section>

        <section
            className="content-section flex flex-col lg:flex-row items-center justify-center h-screen bg-slate-900"
        >
            <div className="w-full lg:w-1/2 text-slate-200 flex flex-col items-center justify-center p-6 space-y-4">
                <motion.h2
                    className="text-center text-3xl md:text-5xl lg:text-6xl font-bold"
                    style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                >
                Attractive User Interface
                </motion.h2>
                <motion.img
                    src="/public/Subrogates/AtractiveUserInterface.png"
                    className="rounded-lg"
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                />
            </div>
        
            <div className="w-full lg:w-1/2 text-slate-200 flex items-center justify-center p-6 space-y-4">
                <motion.p 
                    className="text-center text-[18px] font-bold"
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                >
                It uses modern and attractive visual components, based on Material-UI, to offer a pleasant and professional user experience.
                </motion.p>
            </div>
        </section>

        <section
            className="content-section flex flex-col lg:flex-row items-center justify-center h-screen bg-slate-900"
        >
            <div className="w-full lg:w-1/2 text-slate-200 flex flex-col items-center justify-center p-6 space-y-4">
                <motion.h2
                    className="text-center text-3xl md:text-5xl lg:text-6xl font-bold"
                    style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                >
                Customizable Settings
                </motion.h2>
                <motion.img
                    src="/public/Subrogates/CustomizableSettings.png"
                    className="rounded-lg"
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                />
            </div>
        
            <div className="w-full lg:w-1/2 text-slate-200 flex items-center justify-center p-6 space-y-4">
                <motion.p 
                    className="text-center text-[18px] font-bold"
                    variants={fadeInAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                >
                The application efficiently handles notifications and alerts, ensuring that users are always informed about important events or errors.
                </motion.p>
            </div>
        </section>
    </div>
  );
}