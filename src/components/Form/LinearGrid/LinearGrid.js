import React from "react";
import { useLinearInput } from "react-google-forms-hooks";
import {ErrorLabel, Layout, QuestionContainerLinear, StyleImageContent,StyleImageContentTwo} from "./LinearGrid.style";
import { Tooltip,Image,Row,Col,Space} from "antd";
import Question from "components/Question/Question";
const LinearGrid = ({ id,field })=>{

  const { options, legend, error,image_url,title,question_description,label } = useLinearInput(id);

  const image_array = image_url?.split(" ");
  return (
    <>
    {
      legend?.columns && question_description == undefined ? <>
                          <Layout>
                            <div class="column">
                            </div>  
                            <div class="column2">
                            <table style={{width:"100%"}}>
                            <tr>
                            {  legend?.columns?.map(({title}) => {
                              return     <Tooltip placement="top" title={title}>
                              <td><span>{title}</span></td>
                                </Tooltip>
     
                            })}
                            </tr>
                          </table>
                            </div> 
                          </Layout>      
                         <Layout>
                          <div class="column">
                            <Tooltip placement="top" title={legend.labelFirst}>
                            <div  className="labelClass">
                              {legend.labelFirst}
                            </div>
                            </Tooltip>
                          <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel>      
                          </div>  
                          <div class="column2">
                          <table style={{width:"100%"}}>
                            <tr>
                            {options.map((o) => {
                            return <td><input style={{height:20, width:20}}key={o.id} type="radio" {...o.registerOption()} /></td>;
                          })}
                            </tr>
                          </table>
                          </div> 
                         </Layout></> :
        title     ? <>
                        <Question command={false} title={title} shadow loading={false} initSection={false}>
                        
                                          
                                            <div>
                                            <p>
                                              {question_description}
                                            </p>   
                                            <p  style={{fontSize:15}}>
                                            {
                                              label != ''  ? label : legend.labelFirst 
                                            }        
                                            </p> 
                                            <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel>     
                                            </div>
                                            {
                                              image_array?.length > 0 ?  
                                            
                                              image_array?.map((image) => {
                                                return <StyleImageContent as={Image} width={"100%"} src={image} preview={false}/>
                                              })
                                          
                                               : null
                                            } 
                                            <div>
                                               {
                                                options.map((o) => {
                                              return  <>
                                              <QuestionContainerLinear key={id}>                                               
                                                <input style={{height:20, width:20, marginRight: 10}} key={o.id} type="radio" {...o.registerOption()} />
                                                <p>{o?.label}</p>
                                                {
                                                  o?.image_url ?  <StyleImageContentTwo as={Image} width={"35%"} src={o?.image_url} preview={false}/> : null
                                                }           
                                              </QuestionContainerLinear>
                                              </>;
                                              })
                                            }
                                            </div> 
                                            
                                         
                        
                       
                       
                        </Question>
                      </>             
                         
                         
                         : 
                         <Layout>
                          <div class="column">
                          <div  style={{fontSize:15}}>{legend.labelFirst}</div> 
                          <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel>     
                          </div>  
                          <div class="column2">
                          <table style={{width:"100%"}}>
                            <tr>
                            {options.map((o) => {
                            return <td><input style={{height:20, width:20}}key={o.id} type="radio" {...o.registerOption()} /></td>;
                          })}
                            </tr>
                          </table>
                          </div> 
                          
                         </Layout>

    }


    </>
  );
}
export default LinearGrid;

