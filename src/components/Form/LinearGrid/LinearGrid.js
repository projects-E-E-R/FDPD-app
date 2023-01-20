import React from "react";
import { useLinearInput } from "react-google-forms-hooks";
import {ErrorLabel,Layout} from "./LinearGrid.style";
import { Tooltip } from "antd";


const LinearGrid = ({ id })=>{
  const { options, legend, error } = useLinearInput(id);

  return (
    <>
    {
      legend?.columns ? <>
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
                         </Layout></> : 
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

