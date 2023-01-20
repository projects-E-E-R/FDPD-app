import { googleFormsToJson } from 'react-google-forms-hooks'

// can use both full and shortened form url
const result = async ()=> googleFormsToJson(
  'https://docs.google.com/forms/d/e/1FAIpQLScv-TtVMfCgYwjgpFsFzljNy0ZvVcUUAD6Hi8s3RAxcIUhN5A/viewform'
)

console.log(result?.fields)
// will output the form fields in an appropriate structure
// [
//   {
//     label: 'Do you want to give some feedback?',
//     type: 'LONG_ANSWER',
//     id: '1864908950',
//     required: false
//   },
//   ...
// ]

/* 
    {
      "label": "Do you want to give some feedback?",
      "type": "SHORT_ANSWER",
      "id": "1864908921",
      "required": false
    }

*/