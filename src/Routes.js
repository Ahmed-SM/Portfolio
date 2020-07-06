import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutContent from "./components/Contents/AboutContent";
import ProjectContent from "./components/Contents/ProjectContent";
import NewContent from "./components/Contents/NewContent";
import SequentialStudyContent from "./components/Contents/SequentialStudyContent";
import ScefContent from "./components/Contents/ScefContent";
import SkillsContent from "./components/Contents/SkillsContent";
import EducationContent from "./components/Contents/EducationContent";
import Hbar from "./components/Hbar";
import StyledContent from "./containers/Content";

const Routes = () => {
    return(
        <StyledContent minWidth={"1440px"}>
            <Switch>
                <Route exact component={AboutContent} path={"/"}/>
                <Route exact component={ProjectContent} path={"/Projects"}/>
                <Route exact component={SkillsContent} path={"/Skills"}/>
                <Route exact component={EducationContent} path={"/Education"}/>
                <Route exact component={NewContent} path={"/Projects/Newportal"}/>
                <Route exact component={SequentialStudyContent} path={"/Projects/SequentialStudy"}/>
                <Route exact component={ScefContent} path={"/Projects/ScefHr"}/>
            </Switch>
            <Switch>
                <Route exact component={Hbar} path={["/Projects/*", "/Projects"]}/>
            </Switch>
        </StyledContent>
    );
};
export default Routes;