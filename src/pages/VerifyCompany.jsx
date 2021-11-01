import React,{useEffect} from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import Sidenav from '../components/sidnav/Sidenav'
import { Link,useHistory} from 'react-router-dom'
import { useLocation } from 'react-router'
import swal from 'sweetalert';
import { useDispatch } from 'react-redux'
import { verifyCompany,rejectCompany } from '../actions/company'


function VerifyCompany() {

    const location = useLocation()
    const {company} = location.state
    const dispatch = useDispatch()
    const history = useHistory()

    const handleApprove = (e) => {
        e.preventDefault()
        swal({
            title: "Are you sure to Approve?",
            text: "The dashboard will be provided to the company",
            buttons: true,
          })
          .then((success) => {
            if (success) {
                dispatch(verifyCompany(company._id,history)).then(() => {
                    swal("Compnay request has been approved", {
                        icon: "success",
                      });
                })
            } else {
              swal("Request Cancelled!");
            }
          });
    }

    const handleReject = (e) => {
        e.preventDefault()
        swal({
            title: "Are you sure to Reject?",
            text: "The dashboard will not be provided to the company ",
            buttons: true,
            dangerMode:true,
          })
          .then((success) => {
            if (success) {
                swal("Write the reason for rejection :", {
                    content: "input",
                  })
                  .then((value) => {
                    var obj = {
                        reason : value
                    }
                    dispatch(rejectCompany(company._id,obj,history)).then(() => {
                        swal("Compnay request has been rejected", {
                            icon: "success",
                        });
                    })
                  });               
            } else {
              swal("Request Cancelled!");
            }
          });
    }


    return (
        <div className="flex">
            <Sidenav />
            <div className="w-full">
                <PageHeader name="Nihal" desc="Verify Companies" />
                <div className="mt-12 px-8 container w-full">
                    <h5 className="text-xl font-semibold text-dark mb-8">Company Details :</h5>
                    <div className="w-full h-40 flex items-center justify-center flex-col">
                        <img src={company.imgUrl} alt="Company logo" className="w-32 rounded-md shadow-xl bg-primary" />
                        <h4 className="mt-3 text-2xl font-semibold ">{company.companyName}</h4>
                    </div>
                    <div className="w-full h-30  mt-8 grid grid-cols-2 justify-items-center">
                        <div className="">
                            <div className="flex">
                                <div className="flex flex-col items-start mt-2">
                                    <h6 className="mt-2 font-light text-xl">Industry</h6>
                                    <h6 className="mt-2 font-light text-xl">Location</h6>
                                    <h6 className="mt-2 font-light text-xl">Email</h6>
                                    <h6 className="mt-2 font-light text-xl">Phone</h6>
                                </div>
                                <div className="flex flex-col items-start mt-2">
                                    <h4 className="mt-2 font-medium text-xl ml-8">{company.industry}</h4>
                                    <h4 className="mt-2 font-medium text-xl ml-8">{company.location}</h4>
                                    <h4 className="mt-2 font-medium text-xl ml-8">{company.email}</h4>
                                    <h4 className="mt-2 font-medium text-xl ml-8">{company.phone}</h4>
                                </div>
                            </div>
                            <div className="mt-8 max-w-md">
                                <h5 className="font-semibold text-lg">Bio : </h5>
                                <p>{company.bio}</p>
                            </div>
                        </div>
                        <div className="">
                        <div className="flex">
                                <div className="flex flex-col items-start mt-2">
                                    <h6 className="mt-2 font-light text-xl">Website</h6>
                                    <h6 className="mt-2 font-light text-xl">LinkedIn</h6>
                                    <h6 className="mt-2 font-light text-xl">Facebook</h6>
                                    <h6 className="mt-2 font-light text-xl">Twitter</h6>
                                    <h6 className="mt-2 font-light text-xl">Instagram</h6>
                                </div>
                                <div className="flex flex-col items-start mt-2">
                                    <Link className="underline mt-2 font-medium text-xl ml-8">{company.website}</Link>
                                    <Link className="underline mt-2 font-medium text-xl ml-8">{company.linkedIn}</Link>
                                    <Link className="underline mt-2 font-medium text-xl ml-8">{company.facebook}</Link>
                                    <Link className="underline mt-2 font-medium text-xl ml-8">{company.twitter}</Link>
                                    <Link className="underline mt-2 font-medium text-xl ml-8">{company.instagram}</Link>
                                </div>
                            </div>
                            <div className="mt-8 max-w-md">
                                <div className="pt-8">
                                    <button className="py-3 px-8 text-white bg-success rounded-md" onClick={handleApprove}>Approve</button>
                                    <button className="py-3 px-10 text-white bg-danger rounded-md ml-2" onClick={handleReject}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyCompany
