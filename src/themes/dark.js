import { generate } from '@ant-design/colors';
const appColors = generate('gray');
const widget = generate('#2f94b6');
// const appColors = generate('#206f8f');

export const colors = {
  default: widget[6],
  light: widget[5],
  dark: widget[7],
  white: '#ffffff',
  black: '#333333',
  gray: '#999999',
  darkGray: '#707070',
  lightGray: '#CCCCCC',
  green: '#34b050',
  red: '#dc3545',
  orange: '#ff9807',
  lightRed: '#ffccc7',
  softRed: '#fff2f0',
  yellow: '#ffc107',
  silver: '#f5f5f5',
  darkSilver: '#e0e0e0',
  border: appColors[4],
  blue: '#0168b5'
};

const theme = {
  name: 'dark',
  app: appColors,
  colors,
  padding: '1rem',
  radius: '0.5rem',
  header: {
    color: colors.white,
    height: 55,
    backgroundColor: appColors[8],
    gradientLight: appColors[6],
    gradientDark: appColors[9]
  },
  breadcrumb: {
    height: 33
  },
  title: {
    color: colors.white
  },
  subtitle: {
    color: colors.white
  },
  text: {
    fontSize: '14px',
    color: colors.white
  },
  button: {
    default: {
      backgroundColor: colors.white,
      color: colors.black
    },
    primary: {
      backgroundColor: colors.white,
      color: colors.black
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
      backgroundColor: colors.dark,
      color: colors.white
    },
    primaryWhite: {
      backgroundColor: colors.light,
      color: colors.white
    }
  },
  input: {
    color: appColors[0],
    backgroundColor: appColors[7],
    borderColor: appColors[5],
    selection: {
      color: appColors[6],
      backgroundColor: appColors[7]
    },
    disabled: {
      backgroundColor: appColors[6]
    }
  },
  table: {
    borderColor: appColors[5],
    hyperlink: colors.yellow,
    head: {
      color: colors.white + 'cf',
      backgroundColor: appColors[6],
      sorterActiveColor: appColors[7],
      sorterColor: appColors[1]
    },
    body: {
      backgroundColor: appColors[5],
      color: colors.white + 'cf'
    },
    pagination: {
      color: appColors[2]
    }
  },
  content: {
    backgroundColor: appColors[7]
  },
  sidebar: {
    backgroundColor: appColors[7],
    borderColor: appColors[5]
  },
  drawer: {
    backgroundColor: appColors[7],
    borderColor: appColors[9],
    color: appColors[0]
  },
  tabs: {
    color: appColors[3],
    colorActive: appColors[2],
    colorInkBar: appColors[1]
  },
  loading: {
    backgroundColor: appColors[7] + 90
  },
  home: {
    backgroundColor: appColors[7],
    borderColor: appColors[5],
    insetShadowColor: appColors[6],
    outsetShadowColor: appColors[0],
    content: {
      backgroundColor: appColors[6]
    }
  }
};

export default theme;
