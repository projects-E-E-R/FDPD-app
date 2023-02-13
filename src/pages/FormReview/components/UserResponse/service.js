export const getDataModel = ({data},{t}) => {
    const dataSource = []
    const sectionsID = []
    const sections = []

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
                const dataResp = {
                    question: item.question,
                    answer: item.answer,
                    is_open_question: item.is_open_question,
                    is_linear_question: item.AnswerInt > 0 ? true : false,
                    linear_question_answer_scale: item.AnswerInt > 0 ? 20 * item.AnswerInt : undefined,
                    question_id: item.question_id,
                    answer_id: {
                        answers_selection_id: item?.answers_selection_id,
                        answers_short_question_id: item?.answers_short_question_id
                        //answers_short_question_id: item?.answers_short_question_id
                    },
                    section_id: item.section_id,
                    section_title: item.section_title,
                    is_correct: item.is_correct,
                    score: item.score_for_each_question,
                  }
                dataResponse.push(dataResp)
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
    return dataSource;
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
      data?.forEach((section) => {
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