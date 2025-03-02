import Image from 'next/image';
import Link from 'next/link';
import styles from './subrogates.module.css';

import config from './../../next.config.mjs';

export default function Subrogates() {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <Link href="/" className={styles.backButton}>
                    <div className={styles.backButtonCircle}>
                        <Image 
                            src={`${config.basePath}/back-arrow.svg`}
                            alt="Go back" 
                            width={24} 
                            height={24}
                        />
                    </div>
                </Link>
                <h1 className={styles.title}>IMSS-frontend Project</h1>
            </div>
            <p className={styles.description}>I had the opportunity to work on the modernization of the IMSS Subrogation System, a key platform for managing medical subrogation requests. Thanks to my connection with the system administrator, I was able to develop a fast and accessible interface using React with Vite and Tailwind CSS, optimizing user experience and performance. Additionally, I contributed to the backend by implementing a logging system and a WebSocket in Go to monitor the server in real time. This experience has been invaluable and motivates me to continue creating efficient and scalable digital solutions. Here are some key features that might be interest:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContainer}>
                            <strong>Secure Authentication:</strong> 
                            <p>The application uses a secure token-based authentication system, ensuring that only authorized users can access certain areas of the application.</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={`${config.basePath}/Subrogates/SecureAuthentication.png`} alt="Secure Authentication" width={500} height={300} />
                        </div>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContainer}>
                            <strong>Easy Navigation:</strong> 
                            <p>The application is designed with clear and simple navigation, allowing users to easily move between different sections.</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={`${config.basePath}/Subrogates/EasyNavigation.png`} alt="Easy Navigation" width={500} height={300} />
                        </div>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContainer}>
                            <strong>Attractive User Interface:</strong> 
                            <p>It uses modern and attractive visual components, based on Material-UI, to offer a pleasant and professional user experience.</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={`${config.basePath}/Subrogates/AtractiveUserInterface.png`} alt="Attractive User Interface" width={500} height={300} />
                        </div>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContainer}>
                            <strong>Customizable Settings:</strong> 
                            <p>Users can customize the application settings according to their preferences, such as changing the color theme or menu orientation.</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={`${config.basePath}/Subrogates/CustomizableSettings.png`} alt="Customizable Settings" width={500} height={300} />
                        </div>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContainer}>
                            <strong>Notifications and Alerts:</strong> 
                            <p>The application efficiently handles notifications and alerts, ensuring that users are always informed about important events or errors.</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={`${config.basePath}/Subrogates/NotificationsAlerts.png`} alt="Notifications and Alerts" width={500} height={300} />
                        </div>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContainer}>
                            <strong>Server Performance:</strong> 
                            <p>It includes a dedicated section for monitoring server performance, providing crucial information to keep the infrastructure running optimally.</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={`${config.basePath}/Subrogates/ServerPerformance.png`} alt="Server Performance" width={500} height={300} />
                        </div>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContainer}>
                            <strong>Responsive Designs:</strong> 
                            <p>The application features several responsive designs that enhance functionality and user experience, ensuring a seamless experience across different devices.</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={`${config.basePath}/Subrogates/ResponsiveDesing.png`} alt="Responsive Designs" width={500} height={300} layout="intrinsic" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}