import create from 'zustand';
import { getFormsAsObservable } from 'services/common/forms';
export const useStoreDataForm =  create((set) => ({
    valueDetailForm:undefined,
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
                    let fieldsReMap = data?.data?.fields;    
                    fieldsReMap.unshift({id:0,label:'',options:[],required:false,seection:1,sub_section_id:1,type:'RADIO'});     
                set({valueDetailForm:
                    {
                        ...data?.data,
                        fields: fieldsReMap?.map((f)=>{
                            if(f?.sub_section_id){
                                return {
                                    ...f,
                                    id: f?.id?.toString(),
                                }
                            }else{
                                return {
                                    ...f,
                                    id: f?.id?.toString(),
                                    sub_section_id:1
                                }
                            }
                        }),
                        fieldsOrder:data?.data?.fields_order?.reduce((acc,{id,position})=>{
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