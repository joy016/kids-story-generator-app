export interface OptionTypes {
  label: string;
  imageUrl: string;
  isFree: boolean;
}

export interface FieldData {
  fieldValue: string;
  fieldName: string;
}

export interface FormDataType {
  storySubject: string;
  storyType: string;
  ageGroup: string;
  imageStyle: string;
}

export interface StoryChapterType {
  chapter_title: string;
  description: string;
  image_prompt: string;
}

export interface StoryDetails {
  ageGroup: string;
  id: number;
  imageStyle: string;
  output: StoryOutput;
  storyId: string;
  storySubject: string;
  storyType: string;
}

export interface StoryOutput {
  story_name: string;
  cover_image: CoverImage;
  chapters: Chapter[];
}

export interface Chapter {
  chapter_title: string;
  description: string;
  image_prompt: string;
}

export interface CoverImage {
  description: string;
  style: string;
}
