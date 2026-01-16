import React, { useEffect, useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import YouTubeDisplay, {
  YouTubeDisplayProps,
  DanceTypes,
  StringNumDictionary,
} from "../components/YTDisplay";
import FilterButton from "./FilterButton";

const Dance = () => {
  const defaultFilter: StringNumDictionary = {
    fxn: 1,
    choreo: 1,
    teach: 1,
    other: 1,
  };
  const [filters, setFilters] = useState<StringNumDictionary>(defaultFilter);
  const [choreoState, setChoreoState] = useState<string>("choreo");
  const [fxnState, setFxnState] = useState<string>("fxn");
  const [teachState, setTeachState] = useState<string>("teach");
  const [otherState, setOtherState] = useState<string>("other");

  const [fadeOut, setFadeOut] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);
  const [divWidth, setDivWidth] = useState<number>(0); // dummy but just in case
  const [divHeight, setDivHeight] = useState<number>(0); // dummy but just in case
  const [ytWidth, setYTWidth] = useState<number>(320);
  const [ytHeight, setYTHeight] = useState<number>(180);
  const [ytHeightPercentOfWindow, setYTHeightPercentOfWindow] =
    useState<number>(0);

  const ytWidthRatioOfWindow = 0.27;
  const ytWidthPercentOfWindow = ytWidthRatioOfWindow * 100;
  const filterHeightRatio = 0.1;
  const filterHeightPercent = filterHeightRatio * 100; // for jbel's poor conversion brain
  const wMarginPercent = 4; // as a % of window width
  const hMarginPercent = 6;

  const updateWidth = () => {
    if (divRef.current) {
      const width = divRef.current.getBoundingClientRect().width;
      const height = divRef.current.getBoundingClientRect().height;
      setDivWidth(width);
      setDivHeight(height);
      setYTWidth(ytWidthRatioOfWindow * width);
      setYTHeight(width * ytWidthRatioOfWindow * (9 / 16));
      // need to do a bit of work bc height just computed from desired width ratio,
      // so don't know what it actually is relative to outer div height
      // 1. get yt height raw
      // 2. get window height raw
      // 3. compute ratio
      setYTHeightPercentOfWindow((ytHeight / height) * 100);
    }
  };

  useEffect(() => {
    updateWidth();
  }, []);

  window.addEventListener("resize", updateWidth);

  const opts: YouTubeProps["opts"] = {
    width: ytWidth,
    height: ytHeight,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: 1,
      // controls: 0, // Hide the controls
      // modestbranding: 1, // Remove YouTube logo
      // rel: 0, // Prevent showing related videos at the end
      // showinfo: 0, // Hide video title (Deprecated, but showinfo was often used in older implementations)
      // iv_load_policy: 3, // Hide annotations
      // playsinline: 1, // Play inline on iOS (without fullscreen)
    },
  };

  const toggle = (danceType: string) => {
    // outdated:
    // say it exist, and i press toggle. then fadeout will be true, which causes component to fade out. then u turn off filter, so component stops rendering totally. then u turn fadein, but it's gone.
    // say it doesn't exist, and i press toggle. fadout will be true, but component already doesn't exist bc filter off. then turn on filter, which will cause component to exist. then u turn on fadein, so it fades in.
    setTimeout(() => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [danceType]: 1 - prevFilters[danceType],
      }));
      // setFadeOut(false);
    }, 1000);
  };

  return (
    <div className="page-text fade-in-text" ref={divRef}>
      <p style={{ marginBottom: 0 }}>
        i've been dancing since i was 3 years old, starting out with Chinese
        classical and ethnic folk dance.
      </p>
      <p style={{ marginTop: 0, marginBottom: 0 }}>
        throughout my years dancing, i've also done ballet, jazz, and
        contemporary.
      </p>
      <p style={{ marginTop: 0, marginBottom: 0 }}>
        more recently, i've gotten into street and club dance, such as house and
        hip hop freestyle.
      </p>
      <p>
        tl;dr - i love moving and teaching movement! here are some things i've
        choreographed and/or performed for:
      </p>

      <div className="filter-button-container">
        <FilterButton
          text={"my choreo"}
          danceType={"choreo"}
          filters={filters}
          clickFunction={toggle}
        ></FilterButton>

        <FilterButton
          text={"fxn perfs"}
          danceType={"fxn"}
          filters={filters}
          clickFunction={toggle}
        ></FilterButton>

        <FilterButton
          text={"teaching"}
          danceType={"teach"}
          filters={filters}
          clickFunction={toggle}
        ></FilterButton>

        <FilterButton
          text={"donk perfs & more"}
          danceType={"other"}
          filters={filters}
          clickFunction={toggle}
        ></FilterButton>
      </div>

      {/* <div className="video-display-container"> */}
      {/* ROW 0 */}

      <YouTubeDisplay
        filters={filters}
        row={0}
        col={0}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="ncGWsggOKG4"
        id="new dorp (sp23)"
        type={DanceTypes.choreo}
      />

      <YouTubeDisplay
        filters={filters}
        row={0}
        col={1}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="uP0f47dahmw"
        id="trad trio (sp23)"
        type={DanceTypes.fxn}
      />

      <YouTubeDisplay
        filters={filters}
        row={0}
        col={2}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="k1t9RgYjEeY"
        id="waves (sp22)"
        type={DanceTypes.choreo}
      />

      {/* ROW 1 */}

      <YouTubeDisplay
        filters={filters}
        row={1}
        col={0}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="kMzIfPtGBzI"
        id="donk closer (sp24)"
        type={DanceTypes.other}
      />

      <YouTubeDisplay
        filters={filters}
        row={1}
        col={1}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="q-yCmKJIziA"
        id="youth (fa23)"
        type={DanceTypes.teach}
      />

      <YouTubeDisplay
        filters={filters}
        row={1}
        col={2}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="yFU6dKIKDjI"
        id="move (sp23)"
        type={DanceTypes.fxn}
      />

      {/* ROW 2 */}

      <YouTubeDisplay
        filters={filters}
        row={2}
        col={0}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="K_XqThno84c"
        id="riverbank (sp23)"
        type={DanceTypes.fxn}
      />

      <YouTubeDisplay
        filters={filters}
        row={2}
        col={1}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="-0-7082s2Xk"
        id="kawamurra"
        type={DanceTypes.choreo}
      />

      <YouTubeDisplay
        filters={filters}
        row={2}
        col={2}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="8X3oSAaoCqU"
        id="longing for joy (sp23)"
        type={DanceTypes.other}
      />

      {/* ROW 3 */}

      <YouTubeDisplay
        filters={filters}
        row={3}
        col={0}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="4uBDtVmtsMc"
        id="young folks (sp22)"
        type={DanceTypes.choreo}
      />

      <YouTubeDisplay
        filters={filters}
        row={3}
        col={1}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="3xTCwAY2RT0"
        id="bathing in heaven (sp23)"
        type={DanceTypes.teach}
      />

      <YouTubeDisplay
        filters={filters}
        row={3}
        col={2}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="umeFGXE1fAc"
        id="be water (sp24 set)"
        type={DanceTypes.choreo}
      />

      {/* ROW 4 */}

      <YouTubeDisplay
        filters={filters}
        row={4}
        col={0}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="2W6l9YFE0Pw"
        id="donk closer (sp22)"
        type={DanceTypes.other}
      />

      <YouTubeDisplay
        filters={filters}
        row={4}
        col={1}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="9A2nwzA0Qtg"
        id="daydreams (fa23)"
        type={DanceTypes.fxn}
      />

      <YouTubeDisplay
        filters={filters}
        row={4}
        col={2}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="383LBnDiCtw"
        id="our roots (fa22)"
        type={DanceTypes.teach}
      />

      {/* ROW 5 */}

      <YouTubeDisplay
        filters={filters}
        row={5}
        col={0}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="IyaItB7dpLg"
        id="galloping (sp22)"
        type={DanceTypes.teach}
      />

      <YouTubeDisplay
        filters={filters}
        row={5}
        col={1}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="DCOQV9wjCM8"
        id="ambivalence (s23 set)"
        type={DanceTypes.choreo}
      />

      <YouTubeDisplay
        filters={filters}
        row={5}
        col={2}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="J_gQEIkUl6s"
        id="contaminated (fa20 set)"
        type={DanceTypes.fxn}
      />

      {/* ROW 6 */}

      <YouTubeDisplay
        filters={filters}
        row={6}
        col={0}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="KkhC7iOhtfg"
        id="memory box (fa23 set)"
        type={DanceTypes.choreo}
      />

      <YouTubeDisplay
        filters={filters}
        row={6}
        col={1}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="q-yCmKJIziA"
        id="youth (fa23)"
        type={DanceTypes.teach}
      />

      <YouTubeDisplay
        filters={filters}
        row={6}
        col={2}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="2_b7H48tWCo"
        id="WOD obsession (fa22 set)"
        type={DanceTypes.choreo}
      />

      {/* ROW 7 */}

      <YouTubeDisplay
        filters={filters}
        row={7}
        col={0}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="BWPVKQrEicM"
        id="mountains (sp21 set)"
        type={DanceTypes.fxn}
      />

      <YouTubeDisplay
        filters={filters}
        row={7}
        col={1}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="Lb9yNvTn-3w"
        id="beautiful scenery (fa21)"
        type={DanceTypes.teach}
      />

      <YouTubeDisplay
        filters={filters}
        row={7}
        col={2}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="JxnBIjFovpY"
        id="missb (fa21)"
        type={DanceTypes.other}
      />

      {/* ROW 8 */}

      <YouTubeDisplay
        filters={filters}
        row={8}
        col={0}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="fBdlTrB5FRE"
        id="stranger in the north (sp21)"
        type={DanceTypes.other}
      />

      <YouTubeDisplay
        filters={filters}
        row={8}
        col={1}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="8o2J81Y0sTI"
        id="delilah (fa21 set)"
        type={DanceTypes.choreo}
      />

      <YouTubeDisplay
        filters={filters}
        row={8}
        col={2}
        ytWidth={ytWidth}
        ytHeight={ytHeight}
        wMarginPercent={wMarginPercent}
        hMarginPercent={hMarginPercent}
        ytWidthPercentOfWindow={ytWidthPercentOfWindow}
        ytHeightPercentOfWindow={ytHeightPercentOfWindow}
        filterHeightPercent={filterHeightPercent}
        videoId="Y4QA670NxBI"
        id="swan geese (sp21)"
        type={DanceTypes.teach}
      />
    </div>
    // </div>
  );
};

export default Dance;
