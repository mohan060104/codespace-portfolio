import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      {/*grid of 4 education cells*/}

      <div className="grid" style={{ display: "flex", justifyContent: "center" }}>
        <div className="cell">
          <h3>JK College</h3>
          <p>2023-2027</p>
          <p>Bachelor of Computer Science</p>
        </div>
        <div className="cell">
          <h3>Purulia Zilla School</h3>
          <p>2020-2022</p>
          <p>Higher Secondary Education</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
