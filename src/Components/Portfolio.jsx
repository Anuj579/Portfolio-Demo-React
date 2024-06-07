/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio-img.jpg";

const imageAltText = "laptop image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "IceCreamsCorner E-commerce Website",
    description:
      "IceCreamsCorner is a Django-based web application for managing an online ice cream shop. Built with HTML, CSS, JavaScript, Bootstrap, and Django, it features user authentication, a shopping cart, order placement, and order history, all wrapped in a responsive design.",
    url: "https://anuj459.pythonanywhere.com/",
  },
  {
    title: "Time Tracer Website",
    description:
      "Created a single-page website using HTML, CSS, and JavaScript. Implemented time tracing functionality where users can input a date and time, and the app calculates and displays the time left until or since the selected time. ",
    url: "https://timetracer.infinityfreeapp.com/",
  },
  {
    title: "Todo App with React",
    description:
      "A simple and responsive Todo app built using React.js, Tailwind CSS, and Daisy UI. It features theme switching, task addition, editing, deletion, and bulk management of todos. Easily manage your tasks with an intuitive interface optimized for all device sizes.",
    url: "https://mytodoapp9.netlify.app/",
  },
  {
    title: "Tax Calculator",
    description:
      "A web application that calculates overall income after tax deductions based on user inputs. Built with HTML, CSS, JavaScript, and Bootstrap, it offers a user-friendly interface for accurate tax calculations tailored to different age groups.",
    url: "https://taxcalculator99.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{paddingTop: "3rem" }}>
        <div style={{  alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "50vh", width:'100vw', objectFit: "cover", animation: "3s ease-out 0s 1 slideInLeft"   }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
