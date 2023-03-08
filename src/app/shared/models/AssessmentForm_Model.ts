export interface AssessmentForm_Model {
  assessmentId: string
  discipline: string
  name: string
  version: string
  createdOn: string
  modifiedOn: string
  assessmentInfo: AssessmentInfo[]
}

export interface AssessmentInfo {
  category: string
  sectionId:string
  weightage:string
  questions: Question[]
}

export interface Question {
  questionId: string
  type: string
  questionValue: string
  options?: Option[]
  scored?: string
  hidden?: string
  dependency?: Dependency
}

export interface Option {
  optionId: string
  optionValue: string
  scoringWeightage?: string
  type?: string
}

export interface Dependency {
  questionId: string
  optionId: string
  action: string
}
