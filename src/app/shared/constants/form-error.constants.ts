export const formErrors = {
  name: {
    required: 'Name cannot be empty.',
    pattern: 'Name cannot contain special characters & only numbers'
  },
  company_name: {
    required: 'Company Name cannot be empty.',
    pattern: 'Invalid Pattern'
  },
  dept: {
    required: 'Department cannot be empty.',
    pattern: 'Department cannot contain special characters'
  },
  other_dept: {
    required: 'Other Department cannot be empty.',
    pattern: 'Invalid Pattern'
  },
  email: {
    required: 'Email cannot be empty.',
    pattern: 'Enter your Business Email.'
  },
  mandatory_question: {
    required: 'This Question requires an answer.',
    whitespace: 'Only Spaces not allowed',
  }
};
