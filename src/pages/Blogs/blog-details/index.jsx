import React from "react";
import CodeContentBody from "./code-content/code-content";

const BlogDetailsPage = () => {
  const codeContent = `import React from "react";
import ContentBody from "./content-body/content-body";

const Homepage = () => {
    return (
    <div>
        <ContentBody />
    </div>
    );
};

export default Homepage;`;

  return (
    <div>
      <h2>Hey My name is something goof</h2>
      <CodeContentBody codeContent={codeContent} />
    </div>
  );
};

export default BlogDetailsPage;
