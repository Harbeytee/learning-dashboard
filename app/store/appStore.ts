import { create } from 'zustand'
import { Class, Subject, Lesson, Store} from '../types'


export const useStore = create<Store>((set) => (
  {
   index: 1,
   changeIndex: (newIndex: number) => set({ index: newIndex}),

   classes: [],
   setClass: (data: Class[]) => set({classes: data}),


   id: '',
   setId: (newId: string) => set({id: newId}),


   subjects: [],
   setSubjects: (subject: Subject[]) => set({subjects: subject}),

   subjectId: '',
   setSubjectId: (newId: string) => set({subjectId: newId}),
   
   lessons: [],
   setLessons: (lesson: Lesson[]) => set({lessons: lesson}),

  }
))