import create from 'zustand';
import { getFormsAsObservable } from 'services/common/forms';
export const useStoreDataForm =  create((set) => ({
    valueDetailForm:undefined,
    columns:undefined,
    loading:false,
    error:null,
    complete:null,
    setLoading: (value) => set({ loading: value }),
    requestGetDetail : (url,idForm,type) => {
        const urlPlus = url+idForm;
        set({loading:true});
        getFormsAsObservable({url:urlPlus,type}).subscribe({
            next:(data)=>{
                set({loading:false});
                if (data?.data?.fields) {
                    let fieldsReMapFirst = data?.data?.fields;   
                    let sectionContent = data?.data?.section_content;     
                    //fieldsReMapFirst.unshift({id:0,label:'',options:[],required:false,section:1,sub_section_id:1,type:'RADIO'});     
                    let fieldsReMap = fieldsReMapFirst?.map((f)=>{
                        if(f?.sub_section_id){
                            return {...f, id: f?.id?.toString()};
                        } else {
                            return {
                                ...f,
                                sub_section_id:1, 
                                id: f?.id?.toString()
                            }
                        }
                    });                 
                    /* Re map fields */
                    let arraySection = [];
                    let columnsState = undefined;
                    sectionContent?.map((section)=>{
                        let arraySubSection = [];
                        fieldsReMap?.map((field)=>{
                           if(field?.section == section?.id){
                                if(field?.sub_section_id){
                                    //0 1 2 3
                                    let result = arraySubSection?.find((e)=>e?.id == field?.sub_section_id);
                                    if(field?.legend?.columns){
                                        columnsState= field?.legend?.columns;
                                    }
                                    if(result==undefined){
                                        arraySubSection.push({id:field?.sub_section_id,section_id:section?.id})
                                    } 
                                }
                           }
                        });
                        arraySection?.push(arraySubSection)
                    })
                    /* Obtengo el array de cuantas subsections tiene cada section */
                    let SectionFields = [];
                    arraySection?.map((subsections)=>{
                        let arraySubsectionsDetailed = [];
                        subsections?.map(({id,section_id})=>{
                            let arrayFieldsForSubSections = [];
                            fieldsReMap?.map((f)=>{
                                if(f?.sub_section_id == id && section_id ==f?.section){
                                    arrayFieldsForSubSections?.push(f);
                                }
                            })
                            arraySubsectionsDetailed?.push(arrayFieldsForSubSections);
                        })
                        SectionFields?.push(arraySubsectionsDetailed)
                    });
                 
                    let arraytoSend = [];
                    let cont = 0;
                    SectionFields?.map((subsection)=>{
                        return subsection?.map((array)=>{
                            return array?.map((field,index)=>{
                                if(field?.legend){
                                    if(field?.legend?.columns == undefined && index == 0){
                                        arraytoSend?.push({
                                            ...field,
                                            id:field?.id,
                                            position:cont,
                                            legend:{
                                                columns:columnsState,
                                                labelFirst:field?.legend?.labelFirst
                                            }
                                        });
                                        cont++;
                                    } else {
                                        arraytoSend?.push({...field,position:cont,id:field?.id});
                                        cont++;
                                    }
                                } else {
                                    arraytoSend?.push({...field,position:cont,id:field?.id});
                                    cont++;
                                }
                            })
                        });
                    });            
                set({valueDetailForm:
                    {
                        ...data?.data,
                        section_content:sectionContent?.map((section,index)=>{
                            return {
                                ...section,         
                                sub_section: arraySection[index]?.length
                            }
                        }),
                        fields: arraytoSend,
                        fieldsOrder: arraytoSend?.reduce((acc,{id,position})=>{      
                            return {
                                ...acc,[id]:position     
                            }
                        },[])
                    }
                });
                
                } else if (data?.error) {
                  set({error:data?.error?.title})
                }
            },
            error:({error})=>{
                set({error,loading:false});
            },
            complete:(data)=>{
                set({complete:data,loading:false});
            }
        })
    },
    cleanAll:()=>
        set({
            valueDetailForm:undefined,
            loading:false,
            error:null,
            complete:null,
        })
    
}));
export default useStoreDataForm;