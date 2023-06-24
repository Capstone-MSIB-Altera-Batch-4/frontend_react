import React, { useEffect } from "react";
import PageTitle from "../../element/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import { membershipsData } from "../../data/DummyData";
import MembershipForm from "../../component/MembershipForm/MembershipForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers } from "../../config/redux/actions/memberActions";


const EditMembership = () => {
  const { id } = useParams();
  const loading = useSelector(state => state.members.loading)
  const members = useSelector(state => state.members.members.data);

  const filteredMember = members.filter(member => member.id === parseInt(id));

  // const memberships = membershipsData[id];
  // console.log(memberships);



  return (
    <>
      {loading ?
        <Loader
          secondaryColor="#B1464A"
          color="#FFF0DE"
        /> :
        <div className="col">
          <div className="row container-fluid col-md-8 col-sm-4 mx-auto">
            <div className="my-4 pt-5 text-center">
              <PageTitle title="Edit Membership" />
            </div>
            <div>
              <MembershipForm filterData={filteredMember} showModalFor="edit" />
            </div>
          </div>
        </div>}
    </>
  );
};

export default EditMembership;