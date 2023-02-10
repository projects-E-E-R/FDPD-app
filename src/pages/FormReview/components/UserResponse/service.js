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

const uniqueSection = (value, index, self) => {
    return self.indexOf(value) === index;
}