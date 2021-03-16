import * as React from "react";
import { PageProps } from "gatsby";
import {MyContent} from "../cmp/MyContent";
import {MyNav} from "../cmp/MyNav";
import {MyFooter} from "../cmp/MyFooter";
import {MyScripts} from "../cmp/MyScripts";


// markup
const InfoPage = (props: PageProps) => {
  return (
      <div>
          <MyNav/>
          <MyContent/>
          <MyFooter/>
          <MyScripts/>
      </div>
  );
};

export default InfoPage;
