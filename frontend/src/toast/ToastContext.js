import { useContext,createContext } from "react";;

const ToastContext=createContext();
const useToast=()=>useContext(ToastContext);

export{useToast,ToastContext};