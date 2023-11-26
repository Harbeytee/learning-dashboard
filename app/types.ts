
export type Lesson = {
    id: string,
    coverImage: string,
    topic: string,
    viewed: number
}

export type Class = {
    _id: string,
    name: string,
    __v: number

}

export type Subject ={
    _id: string,
    name: string,
    
  }

export type Store = {
    index: number,
    changeIndex: (newIndex: number) => void,

    classes: Class[],
    setClass: (data: Class[]) => void,

    id: string,
    setId: (newId: string) => void

    subjects: Subject[],
    setSubjects: (subject: Subject[]) => void


    subjectId: string,
    setSubjectId: (newId: string) => void

    lessons: Lesson[],
    setLessons: (lesson: Lesson[]) => void
    
}
  
