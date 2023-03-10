export const getDataModel = ({data},{t}) => {
  const dataSource = []
  const sectionsID = []
  const sections = []
  let totalScore = 0

  data?.form_responses?.forEach((item) => {
      if (!sectionsID?.includes(item.section_id)){
          sectionsID.push(item.section_id)
          sections.push({
              id: item.section_id,
              name: item.section_title,
              score_for_each_question: item.score_for_each_question,
              duration_seconds: undefined
          })
      }
  })

  sections?.forEach((item) => {
      data?.time_per_section?.forEach((item_time) => {
          if(item.id == item_time.section_id){
              item.duration_seconds = item_time.section_time
          }
      })
  })

  sections.forEach((section) => {
      const dataResponse = []
      data?.form_responses?.forEach((item) => {
          if(section.id == item.section_id){
              //var hasImage = (item.image_url || item.question_has_image)
              const dataResp = {
                  question: item?.short_question_description || item.question,
                  answer: item.answer,
                  is_open_question: (item.is_open_question || item.question_type == 'SHORT_ANSWER'),
                  is_linear_question: item.question_type == 'LINEAR' && !(item.image_url || item.question_has_image) && item.AnswerInt != 0,
                  has_score: item.has_score,
                  linear_question_answer_scale: item.AnswerInt > 0 ? 20 * item.AnswerInt : undefined,
                  question_id: item.question_id,
                  answer_id: {
                      answers_selection_id: item?.answers_selection_id,
                      answers_short_question_id: item?.answers_short_question_id
                      //answers_short_question_id: item?.answers_short_question_id
                  },
                  section_id: item.section_id,
                  section_title: item.section_title,
                  is_corrected: item.has_score ? true : false,
                  is_correct: item.has_score ? item.is_correct : undefined,
                  score: !item.has_score ? 0 : item.is_correct? item.score_for_each_question : (item.assigne_score || 0),
                }
              dataResponse.push(dataResp)
              if(dataResp.has_score){
                totalScore = totalScore + dataResp.score
              }
          }  
      })
      dataResponse && dataSource.push(
          {
              section_id: section.id,
              section_name: section.name,
              score_for_each_question: section.score_for_each_question,
              time_seconds: section.duration_seconds,
              responses: dataResponse
          })
  })
  console.log(dataSource)
  return {user_id: data?.student_id, score: totalScore, sections: dataSource}; //fix
}

export const getDataReport = (
  { data },
  { t, border, color }
) => {
  if (data) {

    const titleStyle = {
      font: {
        bold: true
      },
      fill: {
        patternType: "solid",
        fgColor: {
          rgb: "FFCCEEFF"
        }
      }
    }

    const columns = [
      {
        title: "Sección",
        width: {
          wpx: 200
        },
        style: titleStyle
      },
      {
        title: "Pregunta",
        width: {
          wpx: 200
        },
        style: titleStyle
      },
      {
        title: "Respuesta",
        width: {
          wpx: 200
        },
        style: titleStyle
      },        
    ]

    const data2 = []
    data?.sections?.forEach((section) => {
      section?.responses?.forEach((response) => {
          const responsesData = [
              {
                  value: section.section_name,
              },    
              {
                  value: response?.question,
              },
              {
                  value: response?.answer,
              },    
          ]
          data2.push(responsesData)
      })
    })
    const dataUsers = [
              [
                  {value: "H1", style: {font: {sz: "24", bold: true}}},
                  {value: "Bold", style: {font: {bold: true}}},
                  {value: "Red", style: {fill: {patternType: "solid", fgColor: {rgb: "FFFF0000"}}}},
              ],
              [
                  {value: "H2", style: {font: {sz: "18", bold: true}}},
                  {value: "underline", style: {font: {underline: true}}},
                  {value: "Blue", style: {fill: {patternType: "solid", fgColor: {rgb: "FF0000FF"}}}},
              ],
          ]

  const dataset = [{
    columns: columns,
    data: data2,
  }]
    console.log("data set: ",dataset);
    return dataset;
  }
};