export const getFormReMap = (value)=>{
    return value?.map(({form_detail,form_id,form_title})=>{
        return {
            id:form_id,
            name:form_title,
            detail:form_detail,
            path:'/form',
            answered:false
        }
    })

} 