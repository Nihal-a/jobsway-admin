import React from 'react'
import { Icon } from '@iconify/react'
import swal from 'sweetalert'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { banCompany,unBanCompany } from '../../actions/company'

function CompanyCard({unban,name,location,img,id}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault()
        if(unban){
            swal({
                title: "Are you sure to UnBan this Company?",
                text: "The Company will be provided with the dashboard",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    dispatch(unBanCompany(id,history)).then(() => {
                        swal("Company was unblocked Successfully", {
                            icon: "success",
                          });
                    })
                }
              });
        }else{
            swal({
                title: "Are you sure to Ban this Company?",
                text: "The Company will be forbidden from its Dashboard",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    dispatch(banCompany(id,history)).then(() => {
                        swal("User was blocked Successfully", {
                            icon: "success",
                          });
                    })
                }
              });
        }
    }

    return (
        <div className="w-80 h-auto pt-8 bg-secondary rounded-lg flex flex-col items-center">
            <img src={img} alt="" className="w-16 h-16 rounded-lg mt-2" />
            <h5 className="text-xl font-semibold text-dark mt-1">{name}</h5>
            <div className="text-sm text-secondary flex items-center">
                <Icon icon="akar-icons:location" className="text-dark"/><p className="text-dark font-light ml-1">{location}</p>
            </div>
            <div className="w-full m-2 flex justify-end">
            <button onClick={handleClick} className="px-6 py-1 bg-warning rounded-lg text-sm mr-2 text-white">{unban ? 'UnBan' : 'Ban'}</button>
            </div>
        </div>
    )
}

export default CompanyCard
