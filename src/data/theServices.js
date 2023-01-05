import { AiFillSchedule } from 'react-icons/ai'
import { FaRecordVinyl } from 'react-icons/fa'
import { TbMessages } from 'react-icons/tb'
import { AiOutlineFileDone } from 'react-icons/ai'
import {BsPeopleFill} from 'react-icons/bs'
import { FaPrescriptionBottle } from 'react-icons/fa'

export const services = [
    {
        id: 1,
        name: "Appointment Scheduling",
        text:"Easily Schedule appointments with your healthcare providers.",
        icon: <AiFillSchedule />
        
    },
    {
        id: 2,
        name: "Medical record management",
        text:"Manage medical records,health history,medications and allergies.",
        icon: <FaRecordVinyl />
        
    },
    {
        id: 3,
        name: "Messaging",
        text:"Messaging services with your healthcare providers.",
        icon: <TbMessages />
        
    },
    {
        id: 4,
        name: "Health Tracking",
        text:"Monitor various health metrics,such as weight and blood pressure.",
        icon: <AiOutlineFileDone />
        
    },
    {
        id: 5,
        name: "Diverse Specialities",
        text:"Wide range of healthcare providers,including specialists,and mental health professionals.",
        icon: <BsPeopleFill />
        
    },
    {
        id: 6,
        name: "Virtual Prescription",
        text:"Manage your medications and get the support you need to stay healthy.",
        icon: <FaPrescriptionBottle />
        
    }
]