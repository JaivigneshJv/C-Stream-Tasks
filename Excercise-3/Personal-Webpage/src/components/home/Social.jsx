import React from "react";

const Social = () => {
  return (
    <div className="home home__social">
      <a
        href="https://github.com/JaivigneshJv"
        className="home__social-icon"
        target={"_blank"}
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/jaivigneshjv/"
        className="home__social-icon"
        target={"_blank"}
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="mailto:jaivignesh_jv@outlook.com"
        className="home__social-icon"
        target={"_blank"}
      >
        <i class="uil uil-envelope"></i>
      </a>
    </div>
  );
};

export default Social;
