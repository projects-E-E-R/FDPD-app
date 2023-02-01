import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { customDetector } from './lang';
const languageDetector = new LanguageDetector();
languageDetector.addDetector(customDetector);

i18n
  // detect user language
  .use(languageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    detection: {
      order: ['myCustomDetector']
    },
    debug: false,
    fallbackLng: 'es',
    resources: {
      es: {
        translation: {
          login:{
            inputUsernameError: 'por favor ingrese su usuario',
            inputPasswordError: 'por favor ingrese su contraseña',
            rememberMe: 'recordarme',
            signIn: 'ingresar',
            logOut: 'Cerrar sesión',
            lofNotification: 'Notificaciones',
            confirmTitle: 'Cerrar sesión',
            passForgot: '¿Has olvidado la contraseña?',
            passChange: 'Cambiar contraseña',
            passChangeInstruction:
              'Por favor ingrese su correo para cambiar contraseña',
            send: 'enviar',
            notificationPositive:
              'Solicitud de cambio de contraseña exitoso, revise su correo por favor',
            notificationNegative:
              'Solicitud de cambio de contraseña no exitoso',
            confirmMessage:
              'La sesión terminará y se deberá volver a iniciar sesión',
            success: 'Sesión finalizada',
            update: 'Actualizar'
          },
          common: {
            searching: 'Buscando ...',
            search: 'Buscar',
            date: 'Fecha',
            wait: 'Espere',
            pleaseWait: 'Espere un momento...',
            charging: 'Cargando información...',
            next:'Siguiente',
            back:'Atrás',
            send:'Enviar'
          },
          user:{
            first_name: "Nombre",
            last_name: "Apellido",
            full_name: "Nombre completo",
            rut: "Rut",
            career: "Carrera",
            gender: "Género",
            email: "Correo",
            password: "Contraseña",
            male: "Masculino",
            female: "Femenino"
          }
      }
     },
      en: {
        translation: {
          login:{
            signIn:'Sign in'
          }
      }
    }
   }
  });

export default i18n;
