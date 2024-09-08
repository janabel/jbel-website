import React, { CSSProperties } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

type YouTubeOptions = YouTubeProps["opts"];

export enum DanceTypes {
  fxn = "fxn",
  choreo = "choreo",
  teach = "teach",
  other = "other",
}

// indicator dictionary (binary vals)
export interface StringNumDictionary {
  [key: string]: number;
}

export interface YouTubeDisplayProps {
  //   className: string;
  filters: StringNumDictionary;
  row: number;
  col: number;
  ytWidth: number;
  ytHeight: number;
  wMarginPercent: number;
  hMarginPercent: number;
  ytWidthPercentOfWindow: number;
  filterHeightPercent: number;
  ytHeightPercentOfWindow: number;
  videoId: string;
  id: string;
  type: string; // type of video, e.g. choreo, performance, fxn, donk, etc.
}

const YouTubeDisplay = (props: YouTubeDisplayProps) => {
  const opts: YouTubeProps["opts"] = {
    width: props.ytWidth,
    height: props.ytHeight,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: 1,
      controls: 0, // Hide the controls
      modestbranding: 1, // Remove YouTube logo
      rel: 0, // Prevent showing related videos at the end
      showinfo: 0, // Hide video title (Deprecated, but showinfo was often used in older implementations)
      iv_load_policy: 3, // Hide annotations
      playsinline: 1, // Play inline on iOS (without fullscreen)
    },
  };

  // set column offsets here
  const colToOffset: Record<number, number> = {
    2: 1.45,
    0: 1.7,
    1: 1.2,
  };

  const TypeToColor: Record<string, string> = {
    choreo: "RED",
    teach: "YELLOW",
    fxn: "PURPLE",
    other: "BLUE",
  };

  const ColorMap: Record<string, string> = {
    RED: "rgb(169, 25, 62)",
    YELLOW: "rgb(243, 181, 0)",
    PURPLE: "rgb(93, 56, 137)",
    BLUE: "rgb(0, 81, 147)",
  };

  const rectangleStyle: CSSProperties = {
    position: "absolute",
    left:
      (
        1 +
        props.wMarginPercent * (props.col + 1) +
        props.ytWidthPercentOfWindow * props.col
      ).toString() + "%",
    top:
      (
        -4 +
        props.filterHeightPercent +
        props.ytHeightPercentOfWindow * colToOffset[props.col] + // initial offset
        (props.ytHeightPercentOfWindow + props.hMarginPercent) * props.row
      ).toString() + "%",
    width: props.ytWidthPercentOfWindow.toString() + "%", // Width of the rectangle
    height: props.ytHeightPercentOfWindow.toString() + "%", // Height of the rectangle
    border: "2px solid " + ColorMap[TypeToColor[props.type]], // Thickness and color of the outline
    backgroundColor: "transparent", // Transparent background
    boxSizing: "border-box", // Include padding and border in element's width and height
  };

  let currClassName = "";
  if (props.filters[props.type] == 1) {
    currClassName = "fade-in";
  } else {
    currClassName = "fade-out";
  }

  return (
    <div className={currClassName}>
      {/* {props.filters[props.type] == 1 && ( */}
      <div>
        <div className="outlined-rectangle" style={rectangleStyle}></div>
        <YouTube
          style={{
            position: "absolute",
            left:
              (
                props.wMarginPercent * (props.col + 1) +
                props.ytWidthPercentOfWindow * props.col
              ).toString() + "%",
            top:
              (
                props.filterHeightPercent +
                props.ytHeightPercentOfWindow * colToOffset[props.col] + // initial offset
                (props.ytHeightPercentOfWindow + props.hMarginPercent) *
                  props.row
              ).toString() + "%",
          }}
          videoId={props.videoId}
          id={props.id}
          opts={opts}
        />
      </div>
      {/* )} */}
    </div>
  );
};

export default YouTubeDisplay;
