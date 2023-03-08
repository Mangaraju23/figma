export interface MLOpsResult_Model {
    message?: string
    scores: Score[]
    companyName?: string
    userName?: string
    pdfFileName?: string
    s3FileUrl?: string
    weightageAvgSum: number
  }
  
  export interface Score {
    category: string
    scoreValue?: number
    gap?: number
    weightage?: number
    weightageAvg: number
  }
  