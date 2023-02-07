import { BASE_URL } from 'settings/constants';
import { headColor } from 'settings/report';

export const getDataModel = {
  
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
        title: "Nombre",
        width: {
          wpx: 80
        },
        style: titleStyle
      },
      {
        title: "Apellido",
        width: {
          wpx: 80
        },
        style: titleStyle
      },
      {
        title: "Rut",
        width: {
          wch: 40
        },
        style: titleStyle
      },
      {
        title: "Carrera",
        width: {
          wch: 40
        },
        style: titleStyle
      },
      {
        title: "Género",
        width: {
          wch: 40
        },
        style: titleStyle
      },
      {
        title: "Correo",
        width: {
          wch: 40
        },
        style: titleStyle
      },
      
    ]

    const data2 = data?.map((user) => {
      const userData = [
        {
          value: user?.first_name,
        },
        {
          value: user?.last_name,
        },
        {
          value: user?.rut,
        },
        {
          value: user?.career,
        },
        {
          value: t(`user.${user?.gender}`),
        },
        {
          value: user?.email,
        },
        
      ]

      return userData;

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
              [
                  {value: "H3", style: {font: {sz: "14", bold: true}}},
                  {value: "italic", style: {font: {italic: true}}},
                  {value: "Green", style: {fill: {patternType: "solid", fgColor: {rgb: "FF00FF00"}}}},
              ],
              [
                  {value: "H4", style: {font: {sz: "12", bold: true}}},
                  {value: "strike", style: {font: {strike: true}}},
                  {value: "Orange", style: {fill: {patternType: "solid", fgColor: {rgb: "FFF86B00"}}}},
              ],
              [
                  {value: "H5", style: {font: {sz: "10.5", bold: true}}},
                  {value: "outline", style: {font: {outline: true}}},
                  {value: "Yellow", style: {fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}},
              ],
              [
                  {value: "H6", style: {font: {sz: "7.5", bold: true}}},
                  {value: "shadow", style: {font: {shadow: true}}},
                  {value: "Light Blue", style: {fill: {patternType: "solid", fgColor: {rgb: "FFCCEEFF"}}}}
              ]
          ]

  const dataset = [{
    columns: columns,
    data: data2,
  }]
    console.log("data set: ",dataset);
    return dataset;
  }
};
