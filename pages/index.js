import React from "react";

import { withData } from "utils/withData";

import { LessonReview } from "views/lesson_review/LessonReview";

const Page = () => <LessonReview />;

export default withData(Page);
