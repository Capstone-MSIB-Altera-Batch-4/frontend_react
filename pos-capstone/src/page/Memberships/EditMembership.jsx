import React from "react";
import PageTitle from "../../element/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import { membershipsData } from "../../data/DummyData";
import MembershipForm from "../../component/MembershipForm/MembershipForm";


const EditMembership = () => {
  const { id } = useParams();

    const memberships = membershipsData[id];
    console.log(memberships);

  return (
    <div className="col">
      <div className="row container-fluid col-md-8 col-sm-4 mx-auto">
        <div className="my-4 pt-5 text-center">
          <PageTitle title="Edit Membership" />
        </div>
        <div>
          <MembershipForm showModalFor={"edit"} />
        </div>
      </div>
    </div>
  );
};

export default EditMembership;