import create from 'zustand';
import { getFormsAsObservable } from 'services/common/forms';
export const useStoreDataForm =  create((set) => ({
    valueSections:undefined,
    valueQuestions:undefined,
    loading:false,
    error:null,
    complete:null,
    setLoading: (value) => set({ loading: value }),
    requestSection:(url,idForm,type)=>{
        const urlPlus = url+idForm;
        set({loading:true});
        getFormsAsObservable({url:urlPlus,type}).subscribe({
            next:(data)=>{
                set({loading:false});
                if (data?.data?.sections_in_form?.length > 0) {
                set({valueSections:data?.data?.sections_in_form});
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
    requestQuestions:(url,idSection,type)=>{
        const urlPlus = url+idSection;
        getFormsAsObservable({url:urlPlus,type}).subscribe({
            next:(data)=>{
                if (data?.data?.question?.length > 0) {
                set({valueQuestions:data?.data?.question});
                } else if (data?.error) {
                  set({error:data?.error?.title});
                }
            },
            error:({error})=>{
                set({error,loading:false});
            },
            complete:(data)=>{
                set({complete:data,loading:false});
            }
        })
    }
}));
export default useStoreDataForm;