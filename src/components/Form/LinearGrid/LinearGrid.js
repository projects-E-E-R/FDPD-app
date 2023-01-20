import React from "react";
import styled from "styled-components";

import { useLinearInput } from "react-google-forms-hooks";
import {FirstRow,ErrorLabel,Layout} from "./LinearGrid.style";



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
                              return <td><span>{title}</span></td>
                            })}
                            </tr>
                          </table>
                            </div> 
                          </Layout>      
                         <Layout>
                          <div class="column">
                          <div  style={{fontSize:15}}>{legend.labelFirst}</div>     
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
                          <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel> 
                         </Layout></> : 
                         <Layout>
                          <div class="column">
                          <div  style={{fontSize:15}}>{legend.labelFirst}</div>     
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
                          <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel> 
                         </Layout>

    }


    </>
  );
}
export default LinearGrid;
