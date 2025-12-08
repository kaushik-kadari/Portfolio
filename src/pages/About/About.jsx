/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/dev-icon.png",
    title: "Web development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    icon: "/images/genai-icon.png",
    title: "Gen AI",
    description: "I am good at Gen AI and Retrieval-Augmented Generation.",
  },
  {
    icon: "/images/appdev-icon.png",
    title: "iOS App Development",
    description:
      "I currently have a good understanding of iOS App Development.",
  },
  {
    icon: "/images/dsa-icon.png",
    title: "DSA and OOP",
    description: "I have a good understanding of DSA and OOP.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a motivated software engineer specializing in full-stack
          development, AI/ML, and iOS application development. I have hands-on
          experience building scalable applications using the MERN stack and
          developing intelligent systems powered by LLMs and Retrieval-Augmented
          Generation (RAG). My professional background includes iOS development at Eventbrite, 
          where I led the migration of the Organizer App to a modern architecture using Swift Concurrency.
          Additionally, I have experience in CUDA-based GPU optimization, where I contributed to 
          accelerating large-scale scientific simulations.
        </p>
        <p>
          I have built impactful projects such as SkillForge—an AI-integrated
          learning platform with features like Chat-with-PDF, AI-generated
          content, quizzes, and an interview bot—and a customized RAG-powered
          LLM component for the Registration Department’s citizen service
          portal. My technical skill set spans C, C++, Python, Java, JavaScript,
          Swift, React.js, Node.js, Express.js, Flask, MongoDB, MySQL, Tailwind,
          Docker, Git, and more.
        </p>
        <p>
          I am currently open to freelance and collaborative opportunities. If
          you have a project—whether AI-driven, full-stack, or
          performance-critical—that could benefit from my expertise, feel free
          to reach out. I’m always excited to work on innovative and meaningful
          solutions.
        </p>
      </section>

      {/* <!--
      - service
    --> */}

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* <!--
      - testimonials
    --> */}

      {/* <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section> */}

      {/* <!--
      - clients
    --> */}

      {/* <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section> */}
    </article>
  );
};

export default About;
