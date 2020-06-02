import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initFirestorter, Collection, Document } from "firestorter";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
});

// Initialize Firebase
initFirestorter({ firebase: firebase });

export const auth = firebase.auth();
export interface TaskType {
  user_uid: string;
  title: string;
  created_at: Date;
}

export type Task = Document<TaskType>;
export type Tasks = Collection<Task>;

const tasks = new Collection<Task>("tasks");

export { tasks };
