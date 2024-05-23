/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about-bg.jpg";

const imageAltText = "a dark motion background with some lines";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a BCA student studying at an online college. I'm passionate about web development and enjoy building dynamic and interactive websites. I specialize in creating clean and efficient code to bring engaging user experiences to life.";

const skillsList = [
  "HTML and CSS",
  "JavaScript",
  "React JS",
  "Tailwind CSS",
  "Bootstrap",
  "Django",
  "Python",
  "Responsive Web design",
  "UI/UX Design",
  "WordPress Development",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am dedicated to finding innovative solutions to complex problems through web development. With my experience in frontend and backend technologies, I constantly seek out new methods to enhance user experiences and make technology more accessible for everyone.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-div">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
