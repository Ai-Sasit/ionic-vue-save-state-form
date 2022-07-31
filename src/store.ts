import create from 'vue-zustand'

interface formState {
    prefix: string
    surname: string
    lastname: string
    dob: string
    peopleId: string
    peopleBackId: string
    currentAddress: string
    fixAddress: string
    job: string
    phone: string
    setPrefix: (text: string) => void
    setSurname: (text: string) => void
    setLastname: (text: string) => void
    setDob: (text: string) => void
    setPeopleId: (text: string) => void
    setPeopleBackId: (text: string) => void
    setCurrentAddress: (text: string) => void
    setFixAddress: (text: string) => void
    setJob: (text: string) => void
    setPhone: (text: string) => void
}

export const useFormState = create<formState>(set => ({
    prefix: '',
    surname: '',
    lastname: '',
    dob: '',
    peopleId: '',
    peopleBackId: '',
    currentAddress: "",
    fixAddress: "",
    job: "",
    phone: "",
    setPrefix: (text: string) => set(state => ({ ...state, prefix: text })),
    setSurname: (text: string) => set(state => ({ ...state, surname: text })),
    setLastname: (text: string) => set(state => ({ ...state, lastname: text })),
    setDob: (text: string) => set(state => ({ ...state, dob: text })),
    setPeopleId: (text: string) => set(state => ({ ...state, peopleId: text })),
    setPeopleBackId: (text: string) => set(state => ({ ...state, peopleBackId: text })),
    setCurrentAddress: (text: string) => set(state => ({ ...state, currentAddress: text })),
    setFixAddress: (text: string) => set(state => ({ ...state, fixAddress: text })),
    setJob: (text: string) => set(state => ({ ...state, job: text })),
    setPhone: (text: string) => set(state => ({ ...state, phone: text })),
}))
