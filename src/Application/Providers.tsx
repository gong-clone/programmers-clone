/** @jsx jsx */
import { StrictMode, FC } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Global, jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { BrowserRouter } from 'react-router-dom'
import { firebaseConfig, reduxFirebaseConfig } from './firebaseConfig'
import { store } from './Store'

import globalStyle from './globalStyle'
import { theme } from './Theme'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.auth()
firebase.storage()
firebase.firestore()
// const firestore = firebase.firestore()
// if (window.location.hostname === 'localhost') {
//   firestore.settings({
//     host: 'localhost:5001',
//     ssl: false,
//   })
// }

const Providers: FC = ({ children }) => (
  <StrictMode>
    <ReduxProvider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={reduxFirebaseConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
          <ThemeProvider theme={theme}>
            <Global styles={globalStyle} />
            {children}
          </ThemeProvider>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </ReduxProvider>
  </StrictMode>
)

export default Providers
