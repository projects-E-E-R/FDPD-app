import { generate } from '@ant-design/colors';
const appColors = generate('#23415B');
const appColors2 = generate('lightGray');

export const colors = {
  default: appColors[5],
  light: appColors[5],
  dark: appColors[5],
  white: '#FFFFFF',
  black: '#333333',
  gray: '#999999',
  darkGray: '#707070',
  lightGray: '#CCCCCC',
  green: '#34b050',
  red: '#dc3545',
  orange: '#BC6124',
  lightRed: '#ffccc7',
  softRed: '#fff2f0',
  yellow: '#ffc107',
  silver: '#f5f5f5',
  darkSilver: '#e0e0e0',
  border: appColors2[6],
  blue: '#0168b5',
  secondary:'#8A97B9'
};

const theme = {
  name: 'light',
  app: appColors2,
  colors,
  padding: '1rem',
  radius: '0.5rem',
  header: {
    color: colors.white,
    height: 55,
    backgroundColor: appColors[5],
    gradientLight: appColors[7],
    gradientDark: appColors[7]
  },
  breadcrumb: {
    height: 33
  },
  title: {
    color: colors.black
  },
  subtitle: {
    color: colors.black
  },
  text: {
    fontSize: '14px',
    color: colors.black
  },
  button: {
    default: {
      backgroundColor: colors.white,
      color: colors.black
    },
    primary: {
      backgroundColor: colors.light,
      color: colors.white
    },
    green: {
      backgroundColor: colors.green,
      color: colors.white
    },
    red: {
      backgroundColor: colors.red,
      color: colors.white
    },
    yellow: {
      backgroundColor: colors.yellow,
      color: colors.white
    },
    dark: {
      backgroundColor: colors.light,
      color: colors.white
    },
    orange:{
      backgroundColor:colors.orange,
      color:colors.white
    },
    secondary:{
      backgroundColor:colors.secondary,
      color:colors.white
    }
  },
  input: {
    color: colors.black,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    selection: {
      backgroundColor: colors.silver
    },
    disabled: {
      backgroundColor: colors.silver
    }
  },
  table: {
    borderColor: appColors2[5],
    hyperlink: colors.blue,
    head: {
      color: colors.black,
      backgroundColor: appColors2[4],
      sorterActiveColor: appColors2[7],
      sorterColor: appColors2[6]
    },
    body: {
      backgroundColor: appColors2[0],
      color: appColors2[7]
    },
    pagination: {
      color: appColors[2]
    }
  },
  content: {
    backgroundColor: colors.white
  },
  sidebar: {
    backgroundColor: appColors2[3],
    borderColor: colors.lightGray
  },
  drawer: {
    backgroundColor: appColors2[4],
    borderColor: appColors2[7],
    color: appColors2[9]
  },
  tabs: {
    color: appColors[3],
    colorActive: appColors[4],
    colorInkBar: appColors[5]
  },
  loading: {
    backgroundColor: appColors2[2] + 90
  },
  home: {
    backgroundColor: appColors2[3],
    borderColor: appColors2[4],
    insetShadowColor: appColors2[4],
    outsetShadowColor: appColors2[9],
    content: {
      backgroundColor: appColors2[1]
    }
  }
};

export default theme;
