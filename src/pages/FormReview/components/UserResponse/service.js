export const getDataModel = ({data},{t}) => {
    const dataSource = []

    const sectionsID = []
    const sections = []

    data?.forEach((item) => {
        if (!sectionsID?.includes(item.section_id)){
            sectionsID.push(item.section_id)
            sections.push({
                id: item.section_id,
                name: item.section_title
            })
        }
    })
   

    sections.forEach((section) => {
        const dataResponse = []
        data?.forEach((item) => {
            if(section.id == item.section_id){
                const dataResp = {
                    question: item.question,
                    answer: item.answer,
                    question_id: item.question_id,
                    answer_id: {
                        answers_selection_id: item?.answers_selection_id,
                        answers_short_question_id: item?.answers_short_question_id
                        //answers_short_question_id: item?.answers_short_question_id
                    },
                    section_id: item.section_id,
                    section_title: item.section_title,
                  }
                dataResponse.push(dataResp)
            }  
        })

        dataResponse && dataSource.push(
            {
                section_id: section.id,
                section_name: section.name,
                responses: dataResponse
            })
    })
    
  
    console.log(dataSource)
    return dataSource;
  }

const uniqueSection = (value, index, self) => {
    return self.indexOf(value) === index;
}