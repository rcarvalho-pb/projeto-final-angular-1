import { CompetenciesData } from "./competencies-data.model";
import { LanguagesData } from "./languages-data.model";
import { ContactData } from "./contact-data.model";
import { EducationData } from "./education-data.model";
import { WorkExperienceData } from "./work-experience-data.model";

export interface AppData {
  contact: ContactData,
  skills: CompetenciesData[],
  languages: LanguagesData[],
  workExperience: WorkExperienceData[],
  education: EducationData[]
}