import Navbar from '../components/Navbar'
import aboutMain from '../assets/about-main.jpg'
import aboutMain2 from '../assets/about/about-main.jpg'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import imageOne from '../assets/about-one.jpg'
import imageTwo from '../assets/about-two.jpg'
import interiorImg from '../assets/furniture.jpg'
import founder from '../assets/founder.avif'
import Footer from '../components/Footer';
import FloatingSocials from '../components/FloatingSocials';



const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutSection = ({ title, text, img, reverse }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
                } items-center gap-10 py-20 px-6 md:px-20`}
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
        >
            <div className="flex-1">
                <motion.img
                    src={img}
                    alt={title}
                    className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className="flex-1 space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold fugaz text-primary">
                    {title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
            </div>
        </motion.section>
    );
};


const AboutUs = () => {
    return (
        <>
            
            <FloatingSocials />
            <div className="w-full overflow-hidden">
                {/* Hero Section */}
                <motion.div
                    className="relative h-[50vh]  lg:h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutMain2})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>
                    <motion.h1
                        className="relative text-white text-3xl md:text-4xl lg:text-5xl fugaz font-bold z-10"
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        About <span className='text-glow'> Escape LTD</span>
                    </motion.h1>
                </motion.div>

                {/* Introduction */}
                <AboutSection
                    title="Who We Are"
                    text="Escape LTD is a Rwandan-based interior design company dedicated to transforming spaces into modern, elegant, and functional environments. Our mission is to craft interiors that reflect beauty, creativity, and comfort for both homes and businesses."
                    img={imageOne}
                />

                {/* Vision & Mission */}
                <AboutSection
                    title="Our Vision & Mission"
                    text="Our vision is to redefine interior design by merging creativity with sustainability. We aim to deliver top-tier designs that meet international standards while embracing the uniqueness of African aesthetics."
                    img={imageTwo}
                    reverse
                />

                {/* Values Section */}
                <motion.section
                    className="py-20 bg-primary text-white text-center space-y-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold fugaz">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
                        {[
                            {
                                title: "Innovation",
                                text: "We constantly push the boundaries of creativity to bring fresh and unique designs.",
                            },
                            {
                                title: "Quality",
                                text: "Every detail matters — we deliver excellence in every project we handle.",
                            },
                            {
                                title: "Sustainability",
                                text: "Our designs embrace eco-friendly materials and lasting beauty.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="p-8 bg-white text-primary rounded-2xl shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <section className="py-20 px-6 md:px-20 bg-gray-50">
                    <motion.h2
                        className="text-3xl fugaz font-semibold text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Meet The Team
                    </motion.h2>
                    <div className="max-w-4xl mx-auto text-center">
                        <img src={founder} alt="Founder" className="mx-auto rounded-full w-40 h-40 object-cover mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-800">HOREBU</h3>
                        <p className="text-gray-600 mb-6">Founder &amp; Creative Director</p>
                        <p className="text-gray-700 leading-relaxed">With over a decade of experience in luxury interior design, HOREBU leads the creative vision at Escape Ltd — combining refined aesthetics, deep professionalism and a commitment to quality in every project.</p>
                    </div>
                </section>


                <section className="bg-primary text-white py-16 text-center">
                    <motion.h2
                        className="text-3xl fugaz font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Ready to work together?
                    </motion.h2>
                    <motion.a
                        href="/contact"
                        className="inline-block bg-white text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Us
                    </motion.a>
                </section>
            </div>
        </>
    )
}

export default AboutUs