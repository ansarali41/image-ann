import React from "react";
import ReactImageAnnotate from "react-image-annotate";

const App = () => (
  <ReactImageAnnotate
    labelImages
    regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
    regionTagList={["tag1", "tag2", "tag3"]}
    videoSrc="https://www.w3school.com.cn/example/html5/mov_bbb.mp4"
    hideNext={true}
    hidePrev={true}
    onExit={(r) => {
      console.log(r);
    }}
  />
);

export default App;
